/**
 * ParticleSystem — 3Dパーティクルエフェクト（コイン・星・紙吹雪）
 * メモリ最適化版: オブジェクトプール + Material 再利用
 */
import * as THREE from 'three';

export class ParticleSystem {
  static MAX_PARTICLES = 200;

  constructor(scene) {
    this.scene = scene;
    this.particles = [];

    // 共有ジオメトリ
    this.geometries = {
      box: new THREE.BoxGeometry(1, 0.3, 1),
      octahedron: new THREE.OctahedronGeometry(1, 0),
      plane: new THREE.PlaneGeometry(1, 1),
      sphere: new THREE.SphereGeometry(1, 4, 4),
    };

    // Material プール — 使い終わったMaterialを色変更して再利用
    this._materialPool = [];

    // 毎フレームの Vector3 アロケーションを避けるための一時変数
    this._tempVec = new THREE.Vector3();
  }

  /** Material をプールから取得、なければ新規作成 */
  _getMaterial(color, options = {}) {
    let mat;
    if (this._materialPool.length > 0) {
      mat = this._materialPool.pop();
      mat.color.set(color);
      mat.emissive?.set(options.emissive ?? 0x000000);
      mat.emissiveIntensity = options.emissiveIntensity ?? 0;
      mat.metalness = options.metalness ?? 0;
      mat.roughness = options.roughness ?? 1;
      mat.opacity = 1;
      mat.side = options.doubleSide ? THREE.DoubleSide : THREE.FrontSide;
      mat.visible = true;
      mat.needsUpdate = true;
    } else {
      mat = new THREE.MeshStandardMaterial({
        color,
        emissive: options.emissive ?? 0x000000,
        emissiveIntensity: options.emissiveIntensity ?? 0,
        metalness: options.metalness ?? 0,
        roughness: options.roughness ?? 1,
        transparent: true,
        opacity: 1,
        side: options.doubleSide ? THREE.DoubleSide : THREE.FrontSide,
      });
    }
    return mat;
  }

  /** Material をプールに返却 */
  _recycleMaterial(mat) {
    if (this._materialPool.length < 250) {
      mat.visible = false;
      this._materialPool.push(mat);
    } else {
      mat.dispose();
    }
  }

  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this._recycleMaterial(p.mesh.material);
        this.particles.splice(i, 1);
        continue;
      }

      // 物理更新
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

  _enforceLimit() {
    while (this.particles.length > ParticleSystem.MAX_PARTICLES) {
      const oldest = this.particles.shift();
      this.scene.remove(oldest.mesh);
      this._recycleMaterial(oldest.mesh.material);
    }
  }

  /** パーティクルを1個追加する共通メソッド */
  _addParticle(geo, mat, position, velocity, gravity, spin, life, fadeTime, baseScale) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.setScalar(baseScale);
    mesh.position.copy(position);
    this.scene.add(mesh);

    this.particles.push({
      mesh,
      velocity,
      gravity,
      spin,
      life,
      fadeTime,
      baseScale,
    });
  }

  // --- 再利用可能な一時 Vector3 (spawn メソッド内のループで使用) ---
  _spawnPos = new THREE.Vector3();

  /**
   * コインパーティクル — 販売時に金色キューブが噴出
   */
  spawnCoinBurst(position, count = 12) {
    const geo = this.geometries.box;
    for (let i = 0; i < count; i++) {
      const size = 0.15 + Math.random() * 0.15;
      const hue = 0.12 + Math.random() * 0.05;
      const mat = this._getMaterial(
        new THREE.Color().setHSL(hue, 0.9, 0.55 + Math.random() * 0.15),
        { metalness: 0.8, roughness: 0.2 }
      );

      this._spawnPos.copy(position);
      this._spawnPos.x += (Math.random() - 0.5);
      this._spawnPos.z += (Math.random() - 0.5);

      this._addParticle(
        geo, mat, this._spawnPos,
        new THREE.Vector3((Math.random() - 0.5) * 6, 3 + Math.random() * 4, (Math.random() - 0.5) * 6),
        12,
        new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8),
        1.2 + Math.random() * 0.8, 0.6, size
      );
    }
    this._enforceLimit();
  }

  /**
   * スターパーティクル — 調合成功時にキラキラ上昇
   */
  spawnCraftStars(position, count = 10, qualityTier = 'q-common') {
    const colorMap = {
      'q-poor': 0x888888, 'q-common': 0xd4c4a0, 'q-fine': 0x7daa68,
      'q-excellent': 0x7ab0c4, 'q-legendary': 0xe8b84b,
    };
    const baseColor = colorMap[qualityTier] || 0xffffff;
    const geo = this.geometries.octahedron;

    for (let i = 0; i < count; i++) {
      const size = 0.08 + Math.random() * 0.12;
      const mat = this._getMaterial(baseColor, { emissive: baseColor, emissiveIntensity: 0.5 });

      this._spawnPos.copy(position);
      this._spawnPos.x += (Math.random() - 0.5) * 2;
      this._spawnPos.z += (Math.random() - 0.5) * 2;

      this._addParticle(
        geo, mat, this._spawnPos,
        new THREE.Vector3((Math.random() - 0.5) * 2, 2 + Math.random() * 3, (Math.random() - 0.5) * 2),
        -0.5,
        new THREE.Vector3(Math.random() * 4, Math.random() * 4, Math.random() * 4),
        1.5 + Math.random(), 0.8, size
      );
    }
    this._enforceLimit();
  }

  /**
   * 紙吹雪パーティクル — ランクアップ時に上空から降る
   */
  spawnConfetti(count = 40) {
    const colors = [0xe8b84b, 0x7daa68, 0xc47a5a, 0x7ab0c4, 0xf5e6c8, 0xff9955];
    const geo = this.geometries.plane;

    for (let i = 0; i < count; i++) {
      const w = 0.15 + Math.random() * 0.15;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const mat = this._getMaterial(color, { doubleSide: true });

      this._spawnPos.set(
        (Math.random() - 0.5) * 30,
        15 + Math.random() * 10,
        (Math.random() - 0.5) * 30,
      );

      this._addParticle(
        geo, mat, this._spawnPos,
        new THREE.Vector3((Math.random() - 0.5) * 3, -(1 + Math.random() * 2), (Math.random() - 0.5) * 3),
        1.5,
        new THREE.Vector3((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6),
        4 + Math.random() * 3, 2, w
      );
    }
    this._enforceLimit();
  }

  /**
   * 環境パーティクル — 時間帯に応じた色でゆっくり浮遊
   */
  spawnAmbientParticle(dayProgress = 0.5) {
    let color;
    if (dayProgress < 0.15) color = 0xffe8c0;
    else if (dayProgress < 0.5) color = 0xfff8e8;
    else if (dayProgress < 0.75) color = 0xff9955;
    else color = 0x6688bb;

    const size = 0.04 + Math.random() * 0.06;
    const mat = this._getMaterial(color, {
      emissive: color,
      emissiveIntensity: dayProgress > 0.75 ? 1.0 : 0.3,
    });

    this._spawnPos.set(
      (Math.random() - 0.5) * 40,
      Math.random() * 2,
      (Math.random() - 0.5) * 40,
    );

    this._addParticle(
      this.geometries.sphere, mat, this._spawnPos,
      new THREE.Vector3((Math.random() - 0.5) * 0.3, 0.2 + Math.random() * 0.4, (Math.random() - 0.5) * 0.3),
      -0.05,
      new THREE.Vector3(0, Math.random() * 2, 0),
      8 + Math.random() * 6, 3, size
    );
    this._enforceLimit();
  }

  dispose() {
    for (const p of this.particles) {
      this.scene.remove(p.mesh);
      p.mesh.material.dispose();
    }
    this.particles.length = 0;

    // プール内のMaterialも破棄
    for (const mat of this._materialPool) {
      mat.dispose();
    }
    this._materialPool.length = 0;

    Object.values(this.geometries).forEach(g => g.dispose());
  }
}
