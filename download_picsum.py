import os
import urllib.request
import urllib.error
import time

base_dir = "cafe-photos"
directories = [
    "italian", "american", "mexican", "japanese", 
    "desserts", "coffee", "mocktails", "signatures", "interiors"
]
for d in directories:
    os.makedirs(os.path.join(base_dir, d), exist_ok=True)

images_to_download = [
    "interiors/hero-interior.webp",
    "interiors/luxury-interior-01.webp",
    "interiors/luxury-interior-02.webp",
    "interiors/white-furniture.webp",
    "interiors/cafe-exterior.webp",
    "interiors/hygienic-kitchen.webp",
    "interiors/coffee-machine.webp",
    "interiors/elegant-table.webp",
    "interiors/cafe-counter.webp",
    "interiors/cafe-seating.webp",
    "interiors/cafe-plants.webp",
    "interiors/cafe-lighting.webp",
    "interiors/friends-at-cafe.webp",
    "interiors/cafe-gallery-01.webp",
    "italian/margherita-pizza.webp",
    "italian/four-cheese-pizza.webp",
    "italian/alfredo-pasta.webp",
    "italian/arrabbiata-pasta.webp",
    "italian/pesto-pasta.webp",
    "italian/garlic-bread.webp",
    "italian/truffle-fries.webp",
    "american/classic-burger.webp",
    "american/chicken-burger.webp",
    "american/chicken-strips.webp",
    "american/loaded-fries.webp",
    "american/club-sandwich.webp",
    "american/chicken-wings.webp",
    "mexican/veg-tacos.webp",
    "mexican/chicken-tacos.webp",
    "mexican/quesadilla.webp",
    "mexican/burrito-bowl.webp",
    "mexican/loaded-nachos.webp",
    "japanese/veg-sushi.webp",
    "japanese/chicken-sushi.webp",
    "japanese/ramen-bowl.webp",
    "japanese/tempura.webp",
    "desserts/cheesecake.webp",
    "desserts/tiramisu.webp",
    "desserts/lava-cake.webp",
    "desserts/waffle.webp",
    "desserts/crepes.webp",
    "desserts/brownie.webp",
    "desserts/pancakes.webp",
    "coffee/espresso.webp",
    "coffee/americano.webp",
    "coffee/cappuccino.webp",
    "coffee/latte.webp",
    "coffee/mocha.webp",
    "coffee/macchiato.webp",
    "coffee/spanish-latte.webp",
    "coffee/iced-caramel.webp",
    "coffee/frappe.webp",
    "mocktails/blue-lagoon.webp",
    "mocktails/virgin-mojito.webp",
    "mocktails/strawberry-mojito.webp",
    "mocktails/peach-tea.webp",
    "mocktails/passion-fruit.webp",
    "mocktails/watermelon-cooler.webp",
    "signatures/golden-cappuccino.webp",
    "signatures/ivory-mocha.webp",
    "signatures/cream-waffle.webp",
    "signatures/midnight-brownie.webp",
    "signatures/golden-burger.webp",
    "signatures/royale-pasta.webp",
    "signatures/velvet-cheesecake.webp",
    "signatures/sunset-cooler.webp"
]

for idx, path in enumerate(images_to_download):
    full_path = os.path.join(base_dir, path)
    if not os.path.exists(full_path):
        url = f"https://picsum.photos/seed/{idx}/600/450"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response:
                with open(full_path, 'wb') as out_file:
                    out_file.write(response.read())
        except Exception as e:
            print(f"Failed {path}: {e}")

import shutil
brain_dir = r"C:\Users\dell\.gemini\antigravity-ide\brain\6e2ea98a-54ec-46db-9579-c4d01478e5f5"
files_to_copy = [
    ("hero_interior_1791654728871.jpg", "interiors/hero-interior.webp"),
    ("luxury_interior_01_1791654741369.jpg", "interiors/luxury-interior-01.webp"),
    ("hygienic_kitchen_1791654753608.jpg", "interiors/hygienic-kitchen.webp")
]
for src, dst in files_to_copy:
    src_path = os.path.join(brain_dir, src)
    if os.path.exists(src_path):
        shutil.copy2(src_path, os.path.join(base_dir, dst))

print("All images updated.")
