#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the projects directory
const projectsDir = 'client/public/images/projects';
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Project placeholders to create
const placeholders = [
  // TEDx (we have the main one, need 2 more)
  { filename: 'tedx-stage.jpg', title: 'TEDx Stage Setup', color: '#ff6464' },
  { filename: 'tedx-audience.jpg', title: 'TEDx Audience', color: '#ff9696' },
  
  // CS107E Piano Tiles
  { filename: 'piano-tiles-setup.jpg', title: 'Piano Tiles Setup', color: '#64ff64' },
  { filename: 'piano-tiles-game.jpg', title: 'Piano Tiles Game', color: '#96ff96' },
  { filename: 'piano-tiles-demo.jpg', title: 'Piano Tiles Demo', color: '#c8ffc8' },
  
  // HKPC (we have ID card, need 2 more)
  { filename: 'tram-maintenance.jpg', title: 'Tram Maintenance', color: '#6464ff' },
  { filename: 'hkpc-award.jpg', title: 'HKPC Award', color: '#9696ff' },
  
  // Wearable Ultrasound
  { filename: 'ultrasound-poster.jpg', title: 'Ultrasound Poster', color: '#ffff64' },
  { filename: 'ultrasound-presentation.jpg', title: 'Ultrasound Presentation', color: '#ffff96' },
  { filename: 'ultrasound-team.jpg', title: 'Ultrasound Team', color: '#ffffc8' },
  
  // Stanford CubeSat
  { filename: 'cubesat-pcb.jpg', title: 'CubeSat PCB', color: '#ff64ff' },
  { filename: 'soldering-work.jpg', title: 'Soldering Work', color: '#ff96ff' },
  { filename: 'satellites-team.jpg', title: 'Satellites Team', color: '#ffc8ff' },
  
  // EESW Severn Tunnel
  { filename: 'eew-award-ceremony.jpg', title: 'EESW Award Ceremony', color: '#64ffff' },
  { filename: 'tunnel-inspection.jpg', title: 'Tunnel Inspection', color: '#96ffff' },
  { filename: 'eew-certificate.jpg', title: 'EESW Certificate', color: '#c8ffff' },
];

function createSVGPlaceholder(filename, title, color) {
  // Create image dimensions (4:3 aspect ratio for most, 16:9 for wide ones)
  let width, height;
  if (filename.includes('results') || filename.includes('demo') || filename.includes('audience')) {
    width = 800; height = 450; // 16:9 for wide images
  } else {
    width = 600; height = 450; // 4:3 for regular images
  }
  
  const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}"/>
  <text x="50%" y="45%" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" stroke="black" stroke-width="1">
    ${title}
  </text>
  <text x="50%" y="60%" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="#cccccc" stroke="black" stroke-width="0.5">
    Coming Soon
  </text>
</svg>`;
  
  // Save as SVG (browsers can display SVG images)
  const svgPath = path.join(projectsDir, filename.replace('.jpg', '.svg'));
  fs.writeFileSync(svgPath, svg);
  
  // Also create a simple HTML file that can be converted to image
  const htmlPath = path.join(projectsDir, filename.replace('.jpg', '.html'));
  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; }
    .placeholder {
      width: ${width}px;
      height: ${height}px;
      background-color: ${color};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .title { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
    .subtitle { font-size: 16px; color: #cccccc; }
  </style>
</head>
<body>
  <div class="placeholder">
    <div class="title">${title}</div>
    <div class="subtitle">Coming Soon</div>
  </div>
</body>
</html>`;
  
  fs.writeFileSync(htmlPath, html);
  
  console.log(`✅ Created placeholder: ${filename}`);
}

console.log('🎨 Creating placeholder images...');
placeholders.forEach(({ filename, title, color }) => {
  createSVGPlaceholder(filename, title, color);
});

console.log(`\n🎯 Created ${placeholders.length} placeholder images!`);
console.log('📁 All images saved to: client/public/images/projects/');
console.log('\n💡 Note: These are SVG placeholders. You can replace them with actual photos later.');
