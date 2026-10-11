import os
import urllib.request
from PIL import Image

BRAIN_DIR = r"C:\Users\dell\.gemini\antigravity-ide\brain\4c55e843-9b4f-40a3-b4d9-de2da678ec3c"

def convert_to_webp(src_path, dest_path, max_size=(1600, 1000), quality=85):
    try:
        with Image.open(src_path) as img:
            img = img.convert("RGB")
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            os.makedirs(os.path.dirname(dest_path), exist_ok=True)
            img.save(dest_path, "WEBP", quality=quality)
            print(f"Saved {dest_path}")
    except Exception as e:
        print(f"Error converting {src_path} -> {dest_path}: {e}")

# 1. Convert our generated hero and interior images
hero_gen = os.path.join(BRAIN_DIR, "open_air_hero_1791712429714.jpg")
evening_gen = os.path.join(BRAIN_DIR, "evening_hero_1791712455967.jpg")
marble_gen = os.path.join(BRAIN_DIR, "white_marble_interior_1791712484262.jpg")

if os.path.exists(hero_gen):
    convert_to_webp(hero_gen, "cafe-photos/hero/abbendhas-open-air-hero.webp", quality=90)
if os.path.exists(evening_gen):
    convert_to_webp(evening_gen, "cafe-photos/hero/abbendhas-evening-hero.webp", quality=90)
if os.path.exists(marble_gen):
    convert_to_webp(marble_gen, "cafe-photos/interiors/white-marble-interior.webp", quality=90)

# Unsplash verified high-quality direct photo IDs for luxury cafe aesthetic
PHOTO_URLS = {
    # Interiors
    "interiors/beige-lounge-seating.webp": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    "interiors/white-sofa-corner.webp": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    "interiors/luxury-cafe-counter.webp": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    "interiors/natural-light-interior.webp": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
    "interiors/champagne-gold-details.webp": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    
    # Outdoor
    "outdoor/open-air-terrace.webp": "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    "outdoor/garden-cafe-seating.webp": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=80",
    "outdoor/pergola-dining.webp": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "outdoor/outdoor-coffee-corner.webp": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    "outdoor/evening-cafe-lighting.webp": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",

    # Coffee
    "coffee/cappuccino.webp": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80",
    "coffee/latte-art.webp": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    "coffee/iced-coffee.webp": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
    "coffee/caramel-macchiato.webp": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80",

    # Italian
    "italian/margherita-pizza.webp": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    "italian/alfredo-pasta.webp": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    "italian/garlic-cheese-bread.webp": "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80",

    # American
    "american/gourmet-burger.webp": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "american/loaded-fries.webp": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    "american/club-sandwich.webp": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",

    # Desserts
    "desserts/cheesecake.webp": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
    "desserts/chocolate-brownie.webp": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    "desserts/waffle-dessert.webp": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80",

    # Beverages
    "beverages/blue-lagoon.webp": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "beverages/strawberry-mojito.webp": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    "beverages/iced-tea.webp": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",

    # Gallery
    "gallery/open-air-cafe.webp": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "gallery/elegant-white-furniture.webp": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    "gallery/beige-lounge.webp": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    "gallery/garden-seating.webp": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1200&q=80",
    "gallery/luxury-coffee-presentation.webp": "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=80",
    "gallery/beautiful-cafe-counter.webp": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    "gallery/friends-at-cafe.webp": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    "gallery/warm-evening-ambience.webp": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80"
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for target_rel, url in PHOTO_URLS.items():
    dest = os.path.join("cafe-photos", target_rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    temp_file = dest + ".tmp"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(temp_file, "wb") as f:
                f.write(data)
        convert_to_webp(temp_file, dest)
        if os.path.exists(temp_file):
            os.remove(temp_file)
    except Exception as e:
        print(f"Failed to fetch {target_rel}: {e}")

print("Photo sync complete!")
