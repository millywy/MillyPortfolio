#!/usr/bin/env python3
"""
Create placeholder images for projects that don't have photos yet.
This creates simple colored rectangles with project names.
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Create the projects directory
os.makedirs('client/public/images/projects', exist_ok=True)

# Project placeholders to create
placeholders = [
    # TEDx (we have the main one, need 2 more)
    ('tedx-stage.jpg', 'TEDx Stage Setup', (255, 100, 100)),
    ('tedx-audience.jpg', 'TEDx Audience', (255, 150, 150)),
    
    # CS107E Piano Tiles
    ('piano-tiles-setup.jpg', 'Piano Tiles Setup', (100, 255, 100)),
    ('piano-tiles-game.jpg', 'Piano Tiles Game', (150, 255, 150)),
    ('piano-tiles-demo.jpg', 'Piano Tiles Demo', (200, 255, 200)),
    
    # HKPC (we have ID card, need 2 more)
    ('tram-maintenance.jpg', 'Tram Maintenance', (100, 100, 255)),
    ('hkpc-award.jpg', 'HKPC Award', (150, 150, 255)),
    
    # Wearable Ultrasound
    ('ultrasound-poster.jpg', 'Ultrasound Poster', (255, 255, 100)),
    ('ultrasound-presentation.jpg', 'Ultrasound Presentation', (255, 255, 150)),
    ('ultrasound-team.jpg', 'Ultrasound Team', (255, 255, 200)),
    
    # Stanford CubeSat
    ('cubesat-pcb.jpg', 'CubeSat PCB', (255, 100, 255)),
    ('soldering-work.jpg', 'Soldering Work', (255, 150, 255)),
    ('satellites-team.jpg', 'Satellites Team', (255, 200, 255)),
    
    # EESW Severn Tunnel
    ('eew-award-ceremony.jpg', 'EESW Award Ceremony', (100, 255, 255)),
    ('tunnel-inspection.jpg', 'Tunnel Inspection', (150, 255, 255)),
    ('eew-certificate.jpg', 'EESW Certificate', (200, 255, 255)),
]

def create_placeholder(filename, title, color):
    """Create a placeholder image with the given title and color."""
    # Create image (4:3 aspect ratio for most, 16:9 for wide ones)
    if 'results' in filename or 'demo' in filename or 'audience' in filename:
        width, height = 800, 450  # 16:9 for wide images
    else:
        width, height = 600, 450  # 4:3 for regular images
    
    # Create image with background color
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a nice font, fallback to default
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 24)
        small_font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", 16)
    except:
        font = ImageFont.load_default()
        small_font = ImageFont.load_default()
    
    # Add title text
    text_bbox = draw.textbbox((0, 0), title, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2 - 20
    
    # Draw text with outline for better visibility
    draw.text((x-1, y-1), title, font=font, fill=(0, 0, 0))
    draw.text((x+1, y+1), title, font=font, fill=(0, 0, 0))
    draw.text((x, y), title, font=font, fill=(255, 255, 255))
    
    # Add "Coming Soon" text
    coming_soon = "Coming Soon"
    coming_bbox = draw.textbbox((0, 0), coming_soon, font=small_font)
    coming_width = coming_bbox[2] - coming_bbox[0]
    coming_x = (width - coming_width) // 2
    coming_y = y + text_height + 10
    
    draw.text((coming_x-1, coming_y-1), coming_soon, font=small_font, fill=(0, 0, 0))
    draw.text((coming_x+1, coming_y+1), coming_soon, font=small_font, fill=(0, 0, 0))
    draw.text((coming_x, coming_y), coming_soon, font=small_font, fill=(200, 200, 200))
    
    # Save image
    img.save(f'client/public/images/projects/{filename}')
    print(f"✅ Created placeholder: {filename}")

if __name__ == "__main__":
    print("🎨 Creating placeholder images...")
    for filename, title, color in placeholders:
        create_placeholder(filename, title, color)
    print(f"\n🎯 Created {len(placeholders)} placeholder images!")
    print("📁 All images saved to: client/public/images/projects/")
