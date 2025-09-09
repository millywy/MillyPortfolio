#!/bin/bash

# Image Organization Script
# This script helps organize your project images

echo "🖼️  Image Organization Helper"
echo "=============================="
echo ""

# Create the projects directory if it doesn't exist
mkdir -p client/public/images/projects

echo "📁 Created directory: client/public/images/projects/"
echo ""

echo "📋 Here's what we need to do:"
echo ""
echo "1. Copy your images from attached_assets/ to client/public/images/projects/"
echo "2. Rename them with the correct filenames"
echo ""

echo "🔍 Current images in attached_assets/:"
ls -la attached_assets/*.png 2>/dev/null || echo "No PNG files found"
ls -la attached_assets/*.jpg 2>/dev/null || echo "No JPG files found"
echo ""

echo "📝 Required filenames for your projects:"
echo ""
echo "TEDx Biomimicry Talk:"
echo "  - tedx-presentation.jpg"
echo "  - tedx-stage.jpg" 
echo "  - tedx-audience.jpg"
echo ""
echo "CS107E Piano Tiles:"
echo "  - piano-tiles-setup.jpg"
echo "  - piano-tiles-game.jpg"
echo "  - piano-tiles-demo.jpg"
echo ""
echo "HK Productivity Council:"
echo "  - hkpc-id-card.jpg"
echo "  - tram-maintenance.jpg"
echo "  - hkpc-award.jpg"
echo ""
echo "Wearable Ultrasound:"
echo "  - ultrasound-poster.jpg"
echo "  - ultrasound-presentation.jpg"
echo "  - ultrasound-team.jpg"
echo ""
echo "Stanford CubeSat:"
echo "  - cubesat-pcb.jpg"
echo "  - soldering-work.jpg"
echo "  - satellites-team.jpg"
echo ""
echo "EESW Severn Tunnel:"
echo "  - eew-award-ceremony.jpg"
echo "  - tunnel-inspection.jpg"
echo "  - eew-certificate.jpg"
echo ""

echo "💡 Next steps:"
echo "1. Identify which of your images match which projects"
echo "2. Copy and rename them using the commands below"
echo "3. Or use the interactive helper script"
echo ""

echo "📋 Example commands (replace SOURCE with your actual image):"
echo "cp attached_assets/your_image.png client/public/images/projects/tedx-presentation.jpg"
echo "cp attached_assets/your_image.png client/public/images/projects/piano-tiles-setup.jpg"
echo ""

echo "✅ Ready to help you organize your images!"
