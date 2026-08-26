import os
from PIL import Image, ImageDraw, ImageFont

# Ensure directory exists
output_dir = os.path.join("public", "wedding_invitation_photo_placeholders")
os.makedirs(output_dir, exist_ok=True)

# Helper function to create an ornate Indian wedding image placeholder
def create_placeholder(filename, width, height, bg_type="dark", title="PHOTO PLACEHOLDER", subtitle="Keerthi & Poornima"):
    # Base background colors
    if bg_type == "hero":
        # Deep burgundy gradient simulation
        base_color = (88, 17, 26)  # Deep wine #58111A
        accent_color = (197, 160, 89)  # Gold #C5A059
        border_color = (212, 175, 55)  # Metallic Gold
    elif bg_type == "welcome":
        base_color = (250, 246, 238)  # Warm ivory #FAF6EE
        accent_color = (107, 29, 47)  # Deep burgundy #6B1D2F
        border_color = (197, 160, 89)
    elif bg_type == "groom":
        base_color = (44, 34, 30)  # Dark charcoal brown
        accent_color = (212, 175, 55)
        border_color = (197, 160, 89)
    elif bg_type == "bride":
        base_color = (74, 21, 35)  # Warm dark ruby
        accent_color = (244, 232, 209)
        border_color = (212, 175, 55)
    elif bg_type == "venue":
        base_color = (55, 40, 30)  # Antique warm brown
        accent_color = (243, 229, 200)
        border_color = (197, 160, 89)
    else:  # gallery / final
        base_color = (65, 20, 30)
        accent_color = (230, 210, 170)
        border_color = (197, 160, 89)

    img = Image.new("RGB", (width, height), color=base_color)
    draw = ImageDraw.Draw(img)

    # Draw double decorative border frame
    inset1 = 20
    inset2 = 28
    draw.rectangle([inset1, inset1, width - inset1, height - inset1], outline=border_color, width=3)
    draw.rectangle([inset2, inset2, width - inset2, height - inset2], outline=border_color, width=1)

    # Draw corner ornaments (small gold diamonds)
    corner_size = 12
    corners = [
        (inset1, inset1),
        (width - inset1, inset1),
        (width - inset1, height - inset1),
        (inset1, height - inset1)
    ]
    for cx, cy in corners:
        draw.polygon([
            (cx, cy - corner_size),
            (cx + corner_size, cy),
            (cx, cy + corner_size),
            (cx - corner_size, cy)
        ], fill=border_color)

    # Center Mandala / Floral Circles Motif
    cx, cy = width // 2, height // 2 - 20
    radius = min(width, height) // 5
    for r in range(radius, radius // 2, -15):
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=accent_color, width=1)

    # Draw center heart / floral icon
    draw.ellipse([cx - 30, cy - 30, cx + 30, cy + 30], fill=accent_color)
    
    # Try loading default font or PIL basic font
    try:
        font_large = ImageFont.truetype("arial.ttf", 36)
        font_small = ImageFont.truetype("arial.ttf", 20)
    except Exception:
        font_large = ImageFont.load_default()
        font_small = ImageFont.load_default()

    # Draw text
    # Subtitle
    draw.text((cx, cy + radius + 30), subtitle, fill=accent_color, anchor="mm", font=font_small)
    # Title
    draw.text((cx, cy + radius + 70), title, fill=border_color, anchor="mm", font=font_large)

    # Save
    path = os.path.join(output_dir, filename)
    img.save(path, format="PNG")
    print(f"Generated: {path} ({width}x{height})")

# Image specs matching requirement aspect ratios:
# Portraits: aspect 3:4 (e.g. 900x1200)
# Hero / Final: aspect 9:16 (e.g. 900x1600)
# Gallery: mixture of 4:3, 3:4, 16:9

placeholders = [
    ("01_hero_background.png", 1080, 1920, "hero", "HERO BACKGROUND PHOTO", "Chi. Ry. Keerthi. R  ♥  Chi. Sou. Poornima. M"),
    ("02_welcome_photo.png", 900, 1200, "welcome", "WELCOME PHOTO", "With the Blessings of Our Families"),
    ("03_groom_portrait.png", 900, 1200, "groom", "GROOM PORTRAIT", "Chi. Ry. Keerthi. R"),
    ("04_bride_portrait.png", 900, 1200, "bride", "BRIDE PORTRAIT", "Chi. Sou. Poornima. M"),
    ("05_venue_background.png", 1200, 900, "venue", "VENUE BACKGROUND", "Kanaka Bhavana, Hosakote"),
    ("06_gallery_01.png", 1200, 900, "hero", "PRE-WEDDING MOMENT I", "Keerthi & Poornima"),
    ("07_gallery_02.png", 900, 1200, "welcome", "PRE-WEDDING MOMENT II", "Keerthi & Poornima"),
    ("08_gallery_03.png", 900, 1200, "groom", "PRE-WEDDING MOMENT III", "Keerthi & Poornima"),
    ("09_gallery_04.png", 1200, 800, "bride", "PRE-WEDDING MOMENT IV", "Keerthi & Poornima"),
    ("10_final_background.png", 1080, 1920, "hero", "FINAL CINEMATIC FRAME", "Hearty Welcome To You All")
]

for filename, w, h, bg_type, title, subtitle in placeholders:
    create_placeholder(filename, w, h, bg_type, title, subtitle)

print("All 10 placeholder images generated successfully!")
