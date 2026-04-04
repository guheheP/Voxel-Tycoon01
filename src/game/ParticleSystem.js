/**
 * ParticleSystem — 3Dパーティクルエフェクト（コイン・星・紙吹雪）
 */
import * as THREE from 'three';

export class ParticleSystem {
  static MAX_PARTICLES = 200; // パーティクル数の上限（メモリ保護）

  constructor(scene) {
    this.scene = scene;
    this.particles = [];

    // メモリアロケーションとGC負荷を下げるために共有ジオメトリを使用
    this.geometries = {
      box: new THREE.BoxGeometry(1, 0.3, 1),
      octahedron: new THREE.OctahedronGeometry(1, 0),
      plane: new THREE.PlaneGeometry(1, 1),
      sphere: new THREE.SphereGeometry(1, 4, 4),
    };

    // 毎フレームの Vector3 アロケーションを避けるための一時変数
    this._tempVec = new THREE.Vector3();
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        // shared geometry なので dispose しない
        p.mesh.material.dispose();
        this.particles.splice(i, 1);
        continue;
      }

      // 物理更新（clone() を排除して共有 tempVec を使用）
      p.velocity.y -= p.gravity * dt;
      this._tempVec.copy(p.velocity).multiplyScalar(dt);
      p.mesh.position.add(this._tempVec);
      p.mesh.rotation.x += p.spin.x * dt;
      p.mesh.rotation.y += p.spin.y * dt;
      p.mesh.rotation.z += p.spin.z * dt;

      // フェードアウト
      const alpha = Math.min(1, p.life / p.fadeTime);
      p.mesh.material.opacity = alpha;
      p.mesh.scale.setScalar(p.baseScale * (0.5 + 0.5 * alpha));
    }
  }

  /** パーティクル上限を超えていたら古いものを即座に除去 */
  _enforceLimit() {
    while (this.particles.length > ParticleSystem.MAX_PARTICLES) {
      const oldest = this.particles.shift();
      this.scene.remove(oldest.mesh);
      oldest.mesh.material.dispose();
    }
  }

  /**
   * コインパーティクル — 販売時に金色キューブが噴出
   */
  spawnCoinBurst(position = new THREE.Vector3(0, 2, 5), count = 12) {
    for (let i = 0; i < count; i++) {
      const size = 0.15 + Math.random() * 0.15;
      const geo = this.geometries.box;
      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(0.12 + Math.random() * 0.05, 0.9, 0.55 + Math.random() * 0.15),
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.set(size, size, size); // 共有ジオメトリをスケールで調整
      mesh.position.copy(position);
      mesh.position.x += (Math.random() - 0.5) * 1;
      mesh.position.z += (Math.random() - 0.5) * 1;
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          3 + Math.random() * 4,
          (Math.random() - 0.5) * 6,
        ),
        gravity: 12,
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
        ),
        life: 1.2 + Math.random() * 0.8,
        fadeTime: 0.6,
        baseScale: 1,
      });
    }
    this._enforceLimit();
  }

  /**
   * スターパーティクル — 調合成功時にキラキラ上昇
   * @param {string} qualityTier - 品質ティア ('q-poor'|...|'q-legendary')
   */
  spawnCraftStars(position = new THREE.Vector3(6, 1, 0), count = 10, qualityTier = 'q-common') {
    const colorMap = {
      'q-poor':      0x888888,
      'q-common':    0xd4c4a0,
      'q-fine':      0x7daa68,
      'q-excellent': 0x7ab0c4,
      'q-legendary': 0xe8b84b,
    };
    const baseColor = colorMap[qualityTier] || 0xffffff;

    for (let i = 0; i < count; i++) {
      const size = 0.08 + Math.random() * 0.12;
      const geo = this.geometries.octahedron;
      const mat = new THREE.MeshStandardMaterial({
        color: baseColor,
        emissive: baseColor,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.set(size, size, size); // 共有ジオメトリをスケールで調整
      mesh.position.copy(position);
      mesh.position.x += (Math.random() - 0.5) * 2;
      mesh.position.z += (Math.random() - 0.5) * 2;
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          2 + Math.random() * 3,
          (Math.random() - 0.5) * 2,
        ),
        gravity: -0.5, // 上昇する（負の重力）
        spin: new THREE.Vector3(
          Math.random() * 4,
          Math.random() * 4,
          Math.random() * 4,
        ),
        life: 1.5 + Math.random() * 1.0,
        fadeTime: 0.8,
        baseScale: 1,
      });
    }
    this._enforceLimit();
  }

  /**
   * 紙吹雪パーティクル — ランクアップ時に上空から降る
   */
  spawnConfetti(count = 40) {
    const colors = [0xe8b84b, 0x7daa68, 0xc47a5a, 0x7ab0c4, 0xf5e6c8, 0xff9955];

    for (let i = 0; i < count; i++) {
      const w = 0.15 + Math.random() * 0.15;
      const h = 0.08 + Math.random() * 0.08;
      const geo = this.geometries.plane;
      const mat = new THREE.MeshStandardMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.set(w, h, 1); // 共有ジオメトリをスケールで調整
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        15 + Math.random() * 10,
        (Math.random() - 0.5) * 30,
      );
      this.scene.add(mesh);

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 3,
          -(1 + Math.random() * 2),
          (Math.random() - 0.5) * 3,
        ),
        gravity: 1.5,
        spin: new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
        ),
        life: 4 + Math.random() * 3,
        fadeTime: 2,
        baseScale: 1,
      });
    }
    this._enforceLimit();
  }

  /**
   * 環境パーティクル — 時間帯に応じた色でゆっくり浮遊
   * @param {number} dayProgress 0-1
   */
  spawnAmbientParticle(dayProgress = 0.5) {
    // 時間帯別の色
    let color;
    if (dayProgress < 0.15) {
      color = 0xffe8c0; // 朝焼け - 花粉色
    } else if (dayProgress < 0.5) {
      color = 0xfff8e8; // 昼 - 白い光
    } else if (dayProgress < 0.75) {
      color = 0xff9955; // 夕方 - オレンジ蛍
    } else {
      color = 0x6688bb; // 夜 - 青い星
    }

    const size = 0.04 + Math.random() * 0.06;
    const geo = this.geometries.sphere;
    const mat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: dayProgress > 0.75 ? 1.0 : 0.3,
      transparent: true,
      opacity: 0.6,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.set(size, size, size); // 共有ジオメトリをスケールで調整
    mesh.position.set(
      (Math.random() - 0.5) * 40,
      Math.random() * 2,
      (Math.random() - 0.5) * 40,
    );
    this.scene.add(mesh);

    this.particles.push({
      mesh,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        0.2 + Math.random() * 0.4,
        (Math.random() - 0.5) * 0.3,
      ),
      gravity: -0.05,
      spin: new THREE.Vector3(0, Math.random() * 2, 0),
      life: 8 + Math.random() * 6,
      fadeTime: 3,
      baseScale: 1,
    });
    this._enforceLimit();
  }

  dispose() {
    for (const p of this.particles) {
      this.scene.remove(p.mesh);
      // shared geometry なので dispose しない
      p.mesh.material.dispose();
    }
    this.particles.length = 0;

    // 共有ジオメトリを破棄
    Object.values(this.geometries).forEach(g => g.dispose());
  }
}
