#!/usr/bin/env node
/**
 * ボス用ボクセルモデル生成スクリプト
 * 5体のボスモデルを /public/presets/Bosses/ に出力
 */
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'presets', 'Bosses');

// ── ヘルパー ──

/** 箱状にボクセルを敷き詰める */
function box(x0,y0,z0, x1,y1,z1, c) {
  const v = [];
  for (let x=x0;x<=x1;x++) for (let y=y0;y<=y1;y++) for (let z=z0;z<=z1;z++) v.push([x,y,z,c]);
  return v;
}

/** 楕円断面の柱（Y軸方向に積む） */
function ellipsoidColumn(cx,cz, rx,rz, yMin,yMax, c) {
  const v = [];
  for (let y=yMin;y<=yMax;y++) {
    for (let x=cx-rx;x<=cx+rx;x++) {
      for (let z=cz-rz;z<=cz+rz;z++) {
        const dx=(x-cx)/rx, dz=(z-cz)/rz;
        if (dx*dx+dz*dz<=1.05) v.push([x,y,z,c]);
      }
    }
  }
  return v;
}

/** 球状のボクセル */
function sphere(cx,cy,cz, r, c) {
  const v = [];
  for (let x=cx-r;x<=cx+r;x++) {
    for (let y=cy-r;y<=cy+r;y++) {
      for (let z=cz-r;z<=cz+r;z++) {
        const dx=x-cx, dy=y-cy, dz=z-cz;
        if (dx*dx+dy*dy+dz*dz <= r*r+0.5) v.push([x,y,z,c]);
      }
    }
  }
  return v;
}

/** 円柱 (Y軸) */
function cylinder(cx,cz, r, yMin,yMax, c) {
  const v = [];
  for (let y=yMin;y<=yMax;y++) {
    for (let x=cx-r;x<=cx+r;x++) {
      for (let z=cz-r;z<=cz+r;z++) {
        if ((x-cx)*(x-cx)+(z-cz)*(z-cz) <= r*r+0.5) v.push([x,y,z,c]);
      }
    }
  }
  return v;
}

function writeModel(name, data) {
  const path = join(OUT, `${name}.json`);
  writeFileSync(path, JSON.stringify(data, null, 2));
  console.log(`  ✓ ${name}.json (${data.parts.reduce((s,p)=>s+p.voxels.length,0)} voxels)`);
}

// ════════════════════════════════════════
//  1. 岩窟ゴーレム (Golem)
//  ずんぐりした岩の巨人
// ════════════════════════════════════════
function createGolem() {
  // palette: 0=stone gray, 1=dark gray, 2=moss green, 3=glowing eye yellow
  const palette = ['#8D8D8D', '#4A4A4A', '#5D7A3A', '#FFD54F'];

  // 胴体 - 幅広い岩の塊 (8x7x6)
  const bodyVoxels = [
    ...box(1,0,1, 6,6,5, 0),  // 石灰岩ベース
    ...box(0,1,2, 0,5,4, 0),  // 左肩の出っ張り
    ...box(7,1,2, 7,5,4, 0),  // 右肩の出っ張り
    // 暗い岩の模様
    ...box(2,1,1, 2,3,1, 1),
    ...box(5,2,1, 5,4,1, 1),
    ...box(3,4,1, 4,5,1, 1),
    // 苔
    ...box(1,6,2, 3,6,4, 2),
    ...box(5,6,3, 6,6,5, 2),
  ];

  // 頭部 - 角ばった岩塊 (6x4x5)
  const headVoxels = [
    ...box(1,0,0, 4,3,4, 0),
    ...box(0,0,1, 0,2,3, 0),
    ...box(5,0,1, 5,2,3, 0),
    // 目 (光る)
    [1, 2, 0, 3],
    [4, 2, 0, 3],
    // 苔
    ...box(1,3,1, 3,3,3, 2),
  ];

  // 左腕 (3x6x3)
  const armLVoxels = [
    ...box(0,0,0, 2,5,2, 0),
    ...box(0,0,0, 2,0,2, 1),  // 拳は暗い
    [1,5,0, 1],
  ];

  // 右腕 (3x6x3)
  const armRVoxels = [
    ...box(0,0,0, 2,5,2, 0),
    ...box(0,0,0, 2,0,2, 1),
    [1,5,0, 1],
  ];

  // 左脚 (3x4x3)
  const legLVoxels = [
    ...box(0,0,0, 2,3,2, 1),
    ...box(0,3,0, 2,3,2, 0),
  ];

  // 右脚 (3x4x3)
  const legRVoxels = [
    ...box(0,0,0, 2,3,2, 1),
    ...box(0,3,0, 2,3,2, 0),
  ];

  return {
    name: 'Golem',
    type: 'humanoid',
    voxelSize: 1,
    palette,
    parts: [
      { name: 'body', parent: null, position: [0,8,0], center: [4,3,3], voxels: bodyVoxels },
      { name: 'head', parent: 'body', position: [0,4.5,0], center: [3,0,2], voxels: headVoxels },
      { name: 'armL', parent: 'body', position: [-4,3,0], center: [1,5,1], voxels: armLVoxels },
      { name: 'armR', parent: 'body', position: [4,3,0], center: [1,5,1], voxels: armRVoxels },
      { name: 'legL', parent: 'body', position: [-1.5,-4,0], center: [1,3,1], voxels: legLVoxels },
      { name: 'legR', parent: 'body', position: [1.5,-4,0], center: [1,3,1], voxels: legRVoxels },
    ],
    animations: {
      idle: {
        duration: 3,
        loop: true,
        keyframes: [
          { time: 0, parts: { body: { position: [0,0,0] }, armL: { rotation: [0,0,0] }, armR: { rotation: [0,0,0] } } },
          { time: 1.5, parts: { body: { position: [0,-0.3,0] }, armL: { rotation: [0.05,0,0] }, armR: { rotation: [-0.05,0,0] } } },
          { time: 3, parts: { body: { position: [0,0,0] }, armL: { rotation: [0,0,0] }, armR: { rotation: [0,0,0] } } },
        ],
      },
    },
  };
}

// ════════════════════════════════════════
//  2. 森の番人ツリーアント (Treant)
//  大きな木の精霊。幹が胴体、枝が腕
// ════════════════════════════════════════
function createTreant() {
  // palette: 0=bark brown, 1=dark bark, 2=leaf green, 3=light green, 4=eye amber
  const palette = ['#6D4C2C', '#3E2723', '#2E7D32', '#81C784', '#FF8F00'];

  // 幹（胴体）- 太い木の幹
  const bodyVoxels = [
    ...cylinder(3, 3, 3, 0, 9, 0),  // メイン幹
    // 根っこの広がり
    ...box(0,0,0, 6,1,6, 1),
    // 幹の節目
    [1,4,1, 1], [5,6,4, 1], [2,7,5, 1],
  ];

  // 樹冠（頭）- 葉っぱの塊
  const headVoxels = [
    ...sphere(3,2,3, 3, 2),
    // 明るい葉
    ...sphere(3,3,3, 2, 3),
    // 幹の上端
    ...cylinder(3,3, 1, 0,0, 0),
    // 目
    [1, 1, 0, 4],
    [5, 1, 0, 4],
  ];

  // 枝腕（左）
  const armLVoxels = [
    ...box(0,0,0, 0,4,0, 0),  // 枝幹
    ...box(0,1,0, 0,3,0, 1),
    // 葉
    ...box(-1,3,-1, 1,5,1, 2),
    [0,5,0, 3], [-1,4,0, 3],
  ];

  // 枝腕（右）
  const armRVoxels = [
    ...box(0,0,0, 0,4,0, 0),
    ...box(0,1,0, 0,3,0, 1),
    ...box(-1,3,-1, 1,5,1, 2),
    [0,5,0, 3], [1,4,0, 3],
  ];

  return {
    name: 'Treant',
    type: 'humanoid',
    voxelSize: 1,
    palette,
    parts: [
      { name: 'body', parent: null, position: [0,0,0], center: [3,0,3], voxels: bodyVoxels },
      { name: 'head', parent: 'body', position: [0,10,0], center: [3,0,3], voxels: headVoxels },
      { name: 'armL', parent: 'body', position: [-4,6,0], center: [0,4,0], voxels: armLVoxels },
      { name: 'armR', parent: 'body', position: [4,6,0], center: [0,4,0], voxels: armRVoxels },
    ],
    animations: {
      idle: {
        duration: 4,
        loop: true,
        keyframes: [
          { time: 0, parts: { head: { rotation: [0,0,0] }, armL: { rotation: [0,0,0.1] }, armR: { rotation: [0,0,-0.1] } } },
          { time: 2, parts: { head: { rotation: [0,0.05,0] }, armL: { rotation: [0.1,0,-0.1] }, armR: { rotation: [-0.1,0,0.1] } } },
          { time: 4, parts: { head: { rotation: [0,0,0] }, armL: { rotation: [0,0,0.1] }, armR: { rotation: [0,0,-0.1] } } },
        ],
      },
    },
  };
}

// ════════════════════════════════════════
//  3. 炎帝イフリート (Ifrit)
//  炎の魔人。燃え盛る体
// ════════════════════════════════════════
function createIfrit() {
  // palette: 0=dark red body, 1=orange flame, 2=yellow flame, 3=dark core, 4=white hot
  const palette = ['#B71C1C', '#FF6D00', '#FFD600', '#3E0000', '#FFFFFF'];

  // 胴体 - 人型上半身、逆三角形
  const bodyVoxels = [
    ...box(1,0,1, 6,5,5, 0),  // コア
    ...box(0,2,2, 0,5,4, 0),  // 左肩幅
    ...box(7,2,2, 7,5,4, 0),  // 右肩幅
    // 暗いコア模様
    ...box(3,1,1, 4,3,1, 3),
    // 炎エフェクト
    [1,5,1, 1], [2,6,2, 1], [5,6,3, 1], [6,5,5, 1],
    [3,6,1, 2], [4,6,4, 2],
  ];

  // 頭部 - 角のある頭
  const headVoxels = [
    ...box(1,0,1, 4,3,4, 0),  // 頭部本体
    // 角（左右）
    [0,3,2, 3], [0,4,2, 3], [0,5,2, 1],
    [5,3,2, 3], [5,4,2, 3], [5,5,2, 1],
    // 目
    [1,2,1, 2], [4,2,1, 2],
    // 口の光
    [2,1,1, 1], [3,1,1, 1],
    // 炎の髪
    [1,4,2, 1], [2,4,3, 2], [3,4,2, 1], [4,4,3, 2],
    [2,5,2, 2], [3,5,3, 2],
  ];

  // 左腕 - 炎で形成
  const armLVoxels = [
    ...box(0,0,0, 1,5,1, 0),
    [0,0,0, 1], [1,0,1, 1],  // 拳部分は炎色
    [0,5,0, 1], [1,5,1, 2],  // 肩接続部も炎
    // 炎フレア
    [-1,1,0, 1], [2,3,1, 2],
  ];

  // 右腕
  const armRVoxels = [
    ...box(0,0,0, 1,5,1, 0),
    [0,0,0, 1], [1,0,1, 1],
    [0,5,0, 1], [1,5,1, 2],
    [2,1,0, 1], [-1,3,1, 2],
  ];

  // 下半身は煙/炎の渦巻き（脚なし）
  const tailVoxels = [
    ...cylinder(2,2, 2, 0,3, 0),
    ...cylinder(2,2, 3, 0,1, 1),
    // 炎の先端
    [2,0,0, 2], [0,0,2, 2], [4,0,2, 2],
    [1,0,1, 2], [3,0,3, 2],
  ];

  return {
    name: 'Ifrit',
    type: 'humanoid',
    voxelSize: 1,
    palette,
    parts: [
      { name: 'body', parent: null, position: [0,6,0], center: [4,3,3], voxels: bodyVoxels },
      { name: 'head', parent: 'body', position: [0,4.5,0], center: [3,0,2], voxels: headVoxels },
      { name: 'armL', parent: 'body', position: [-4.5,2,1], center: [1,5,1], voxels: armLVoxels },
      { name: 'armR', parent: 'body', position: [4.5,2,1], center: [1,5,1], voxels: armRVoxels },
      { name: 'tail', parent: 'body', position: [0,-5,0], center: [2,3,2], voxels: tailVoxels },
    ],
    animations: {
      idle: {
        duration: 2.5,
        loop: true,
        keyframes: [
          { time: 0, parts: { body: { position: [0,0,0] }, armL: { rotation: [0.1,0,0.15] }, armR: { rotation: [-0.1,0,-0.15] }, tail: { rotation: [0,0,0] } } },
          { time: 0.6, parts: { body: { position: [0,0.4,0] }, armL: { rotation: [-0.15,0,0.05] }, armR: { rotation: [0.15,0,-0.05] }, tail: { rotation: [0.05,0.1,0] } } },
          { time: 1.3, parts: { body: { position: [0,0.1,0] }, armL: { rotation: [0.05,0,-0.1] }, armR: { rotation: [-0.05,0,0.1] }, tail: { rotation: [-0.05,-0.1,0] } } },
          { time: 2.5, parts: { body: { position: [0,0,0] }, armL: { rotation: [0.1,0,0.15] }, armR: { rotation: [-0.1,0,-0.15] }, tail: { rotation: [0,0,0] } } },
        ],
      },
    },
  };
}

// ════════════════════════════════════════
//  4. 深海の悪魔クラーケン (Kraken)
//  巨大なタコ/イカの怪物
// ════════════════════════════════════════
function createKraken() {
  // palette: 0=deep purple, 1=dark blue, 2=eye red, 3=sucker yellow, 4=tentacle highlight
  const palette = ['#4A148C', '#1A237E', '#F44336', '#FFE082', '#7C4DFF'];

  // 頭部（マントル）- 大きな丸い頭
  const bodyVoxels = [
    ...sphere(4,4,4, 4, 0),
    // 暗い模様
    ...box(2,6,2, 6,7,6, 1),
    // 目
    [1,3,2, 2], [7,3,2, 2],
    [1,3,3, 3], [7,3,3, 3], // 瞳の横
    // 口
    ...box(3,1,1, 5,2,1, 1),
  ];

  // 触手1（前左）
  const tent1 = [
    ...box(0,0,0, 1,0,1, 0),
    ...box(0,1,0, 1,1,1, 4),
    ...box(0,2,0, 0,2,0, 0),
    ...box(0,3,0, 0,5,0, 0),
    [0,3,0, 3], [0,5,0, 3],  // 吸盤
  ];

  // 触手2（前右）
  const tent2 = [...tent1.map(v => [...v])];

  // 触手3（後左）
  const tent3 = [
    ...box(0,0,0, 1,0,1, 0),
    ...box(0,1,0, 1,1,1, 4),
    ...box(0,2,0, 0,4,0, 0),
    [0,2,0, 3], [0,4,0, 3],
  ];

  // 触手4（後右）
  const tent4 = [...tent3.map(v => [...v])];

  return {
    name: 'Kraken',
    type: 'static',
    voxelSize: 1,
    palette,
    parts: [
      { name: 'body', parent: null, position: [0,6,0], center: [4,4,4], voxels: bodyVoxels },
      { name: 'tentL1', parent: 'body', position: [-2,-4,-2], center: [1,0,1], voxels: tent1 },
      { name: 'tentR1', parent: 'body', position: [2,-4,-2], center: [1,0,1], voxels: tent2 },
      { name: 'tentL2', parent: 'body', position: [-3,-4,1], center: [1,0,1], voxels: tent3 },
      { name: 'tentR2', parent: 'body', position: [3,-4,1], center: [1,0,1], voxels: tent4 },
    ],
    animations: {
      idle: {
        duration: 3,
        loop: true,
        keyframes: [
          { time: 0, parts: {
            body: { position: [0,0,0] },
            tentL1: { rotation: [0.2,0,0.1] }, tentR1: { rotation: [0.2,0,-0.1] },
            tentL2: { rotation: [-0.1,0,0.15] }, tentR2: { rotation: [-0.1,0,-0.15] },
          }},
          { time: 1, parts: {
            body: { position: [0,0.3,0] },
            tentL1: { rotation: [-0.15,0.1,-0.1] }, tentR1: { rotation: [-0.15,-0.1,0.1] },
            tentL2: { rotation: [0.15,-0.1,-0.1] }, tentR2: { rotation: [0.15,0.1,0.1] },
          }},
          { time: 2, parts: {
            body: { position: [0,-0.2,0] },
            tentL1: { rotation: [0.1,-0.1,0.15] }, tentR1: { rotation: [0.1,0.1,-0.15] },
            tentL2: { rotation: [-0.15,0.1,0.1] }, tentR2: { rotation: [-0.15,-0.1,-0.1] },
          }},
          { time: 3, parts: {
            body: { position: [0,0,0] },
            tentL1: { rotation: [0.2,0,0.1] }, tentR1: { rotation: [0.2,0,-0.1] },
            tentL2: { rotation: [-0.1,0,0.15] }, tentR2: { rotation: [-0.1,0,-0.15] },
          }},
        ],
      },
    },
  };
}

// ════════════════════════════════════════
//  5. 古竜ヴェルムドラゴ (Dragon)
//  西洋ドラゴン。翼・長い首・尾
// ════════════════════════════════════════
function createDragon() {
  // palette: 0=green scale, 1=dark scale, 2=belly yellow, 3=wing membrane, 4=eye red, 5=horn
  const palette = ['#1B5E20', '#0D3311', '#FDD835', '#4CAF50', '#F44336', '#795548'];

  // 胴体 - 太い爬虫類の体
  const bodyVoxels = [
    ...box(1,1,0, 5,4,7, 0),  // メインボディ
    ...box(2,0,1, 4,0,6, 2),  // 腹部（黄色）
    // 暗い鱗模様
    [1,4,2, 1], [3,4,4, 1], [5,4,6, 1],
    [1,3,1, 1], [5,3,3, 1], [3,3,5, 1],
    // 背びれ
    [3,5,2, 1], [3,5,4, 1], [3,5,6, 1],
  ];

  // 頭部 - ドラゴンの顔
  const headVoxels = [
    ...box(1,1,0, 4,3,4, 0),  // 頭
    ...box(1,0,0, 4,0,2, 0),  // 口先
    ...box(2,0,0, 3,0,1, 2),  // 口内（黄色）
    // 角
    [0,3,2, 5], [0,4,2, 5],
    [5,3,2, 5], [5,4,2, 5],
    // 目
    [1,2,1, 4],
    [4,2,1, 4],
    // 鼻の穴
    [2,1,0, 1], [3,1,0, 1],
  ];

  // 首（体と頭の間）
  const neckVoxels = [
    ...box(1,0,0, 4,0,2, 0),
    ...box(2,0,0, 3,0,2, 0),
    ...box(1,1,0, 4,1,1, 0),
    ...box(2,1,0, 3,1,1, 2),  // 首下の黄色
  ];

  // 左翼
  const wingLVoxels = [
    // 翼骨
    ...box(0,0,0, 0,0,4, 1),
    ...box(0,1,0, 0,1,3, 1),
    // 膜
    ...box(-1,0,0, -1,0,3, 3),
    ...box(-2,0,0, -2,0,2, 3),
    ...box(-3,0,0, -3,0,1, 3),
  ];

  // 右翼
  const wingRVoxels = [
    ...box(0,0,0, 0,0,4, 1),
    ...box(0,1,0, 0,1,3, 1),
    ...box(1,0,0, 1,0,3, 3),
    ...box(2,0,0, 2,0,2, 3),
    ...box(3,0,0, 3,0,1, 3),
  ];

  // 尾
  const tailVoxels = [
    ...box(1,1,0, 3,2,2, 0),
    ...box(1,1,3, 3,2,4, 0),
    ...box(2,1,5, 2,2,6, 0),
    ...box(2,1,7, 2,2,7, 1),
    // 尾先の棘
    [1,2,7, 1], [3,2,7, 1], [2,3,7, 1],
  ];

  // 左前脚
  const legFLVoxels = [
    ...box(0,0,0, 1,3,1, 0),
    ...box(0,0,0, 1,0,1, 1), // 爪
  ];
  // 右前脚
  const legFRVoxels = [...legFLVoxels.map(v=>[...v])];
  // 左後脚
  const legBLVoxels = [
    ...box(0,0,0, 1,3,1, 0),
    ...box(0,0,0, 2,0,1, 1),
  ];
  // 右後脚
  const legBRVoxels = [...legBLVoxels.map(v=>[...v])];

  return {
    name: 'Dragon',
    type: 'quadruped',
    voxelSize: 1,
    palette,
    parts: [
      { name: 'body', parent: null, position: [0,5,0], center: [3,2,4], voxels: bodyVoxels },
      { name: 'neck', parent: 'body', position: [0,2,-3], center: [2,0,1], voxels: neckVoxels },
      { name: 'head', parent: 'neck', position: [0,1,-3], center: [2,2,2], voxels: headVoxels },
      { name: 'wingL', parent: 'body', position: [-3,3,1], center: [0,0,2], voxels: wingLVoxels },
      { name: 'wingR', parent: 'body', position: [3,3,1], center: [0,0,2], voxels: wingRVoxels },
      { name: 'tail', parent: 'body', position: [0,0,6], center: [2,1,0], voxels: tailVoxels },
      { name: 'legFL', parent: 'body', position: [-2,-3,-1], center: [1,3,1], voxels: legFLVoxels },
      { name: 'legFR', parent: 'body', position: [2,-3,-1], center: [1,3,1], voxels: legFRVoxels },
      { name: 'legBL', parent: 'body', position: [-2,-3,4], center: [1,3,1], voxels: legBLVoxels },
      { name: 'legBR', parent: 'body', position: [2,-3,4], center: [1,3,1], voxels: legBRVoxels },
    ],
    animations: {
      idle: {
        duration: 3.5,
        loop: true,
        keyframes: [
          { time: 0, parts: {
            body: { position: [0,0,0] },
            head: { rotation: [0,0,0] },
            wingL: { rotation: [0,0,0.2] },
            wingR: { rotation: [0,0,-0.2] },
            tail: { rotation: [0,0.05,0] },
          }},
          { time: 1.2, parts: {
            body: { position: [0,0.2,0] },
            head: { rotation: [0.05,0.08,0] },
            wingL: { rotation: [0,0,-0.15] },
            wingR: { rotation: [0,0,0.15] },
            tail: { rotation: [0,-0.08,0] },
          }},
          { time: 2.4, parts: {
            body: { position: [0,-0.1,0] },
            head: { rotation: [-0.05,-0.05,0] },
            wingL: { rotation: [0,0,0.1] },
            wingR: { rotation: [0,0,-0.1] },
            tail: { rotation: [0,0.06,0] },
          }},
          { time: 3.5, parts: {
            body: { position: [0,0,0] },
            head: { rotation: [0,0,0] },
            wingL: { rotation: [0,0,0.2] },
            wingR: { rotation: [0,0,-0.2] },
            tail: { rotation: [0,0.05,0] },
          }},
        ],
      },
    },
  };
}

// ── メイン ──
console.log('ボスモデルを生成中...');
writeModel('Golem', createGolem());
writeModel('Treant', createTreant());
writeModel('Ifrit', createIfrit());
writeModel('Kraken', createKraken());
writeModel('Dragon', createDragon());
console.log('完了！');
