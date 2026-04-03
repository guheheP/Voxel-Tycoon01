const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/styles.css');
const outDir = path.join(__dirname, '../src/styles');

const cssContent = fs.readFileSync(srcFile, 'utf8');
const lines = cssContent.split('\n');

const files = {
  '_tokens.css': [],
  '_layout.css': [],
  '_components.css': [],
  '_status-bar.css': [],
  '_sidebar.css': [],
  '_items.css': [],
  '_tabs.css': [],
  '_overlays.css': [],
  '_title.css': [],
  '_puzzle.css': [],
  '_misc.css': [],
};

let currentFile = '_tokens.css'; // initial

// Configuration: which header goes to which file
const routeMap = [
  { p: /Design Tokens|Base/, f: '_tokens.css' },
  { p: /Canvas|UI Overlay|Panel —|Game UI Layout|Main Content Area/, f: '_layout.css' },
  { p: /Buttons|Progress Bar/, f: '_components.css' },
  { p: /Status Bar(?! Info)|Status Bar Info|Reputation Display/, f: '_status-bar.css' },
  { p: /Sidebar|Content Panel|Section Titles/, f: '_sidebar.css' },
  { p: /Item Cards|Item Grid|Inventory Toolbar|Shop Inventory Filters/, f: '_items.css' },
  { p: /Crafting Tab|Shop Tab|Dispatch Tab|Stats Dashboard|Shop empty message|Dispatch list|Dispatch description/, f: '_tabs.css' },
  { p: /Toast Notifications|Game Over|Customer Cards|Area Selection|Adventurer Level/, f: '_overlays.css' },
  { p: /Splash Screen|Title Screen/, f: '_title.css' },
  { p: /Crafting Puzzle|Puzzle Result|Crafting Buttons/, f: '_puzzle.css' },
  // Default for anything else falling through, or explicitly misc:
  { p: /Event Banner|Tutorial|Sound Toggle|Responsive tweaks|Utility Text Classes|Craft Flash Effect|Decorative|Empty state styling|Crafting value preview/, f: '_misc.css' }
];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this line is a section header like /* ===== Something ===== */
  const match = line.match(/^\/\*\s*=====\s*(.+?)\s*=====\s*\*\//);
  if (match) {
    const title = match[1];
    let found = false;
    for (const route of routeMap) {
      if (route.p.test(title)) {
        currentFile = route.f;
        found = true;
        break;
      }
    }
  }
  
  files[currentFile].push(line);
}

// Write the child CSS files
for (const [filename, content] of Object.entries(files)) {
  if (content.length > 0) {
    fs.writeFileSync(path.join(outDir, filename), content.join('\n'), 'utf8');
    console.log(`Created ${filename} (${content.length} lines)`);
  }
}

// Rewrite styles.css
const importLines = [
  '/* ========================================================',
  '   Voxel Shop Tycoon — Stylesheet Entry Point',
  '   ======================================================== */',
  '',
  "@import './styles/_tokens.css';",
  "@import './styles/_layout.css';",
  "@import './styles/_components.css';",
  "@import './styles/_status-bar.css';",
  "@import './styles/_sidebar.css';",
  "@import './styles/_items.css';",
  "@import './styles/_tabs.css';",
  "@import './styles/_overlays.css';",
  "@import './styles/_title.css';",
  "@import './styles/_puzzle.css';",
  "@import './styles/_misc.css';"
];

fs.writeFileSync(srcFile, importLines.join('\n'), 'utf8');
console.log('Rewrote styles.css');
