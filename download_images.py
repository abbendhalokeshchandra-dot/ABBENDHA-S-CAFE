import os
import urllib.request
import time

base_dir = "cafe-photos"

directories = [
    "italian", "american", "mexican", "japanese", 
    "desserts", "coffee", "mocktails", "signatures", "interiors"
]

images_to_download = {
    # Interiors
    "interiors/hero-interior.webp": "luxurious cream and white cafe interior with white sofas, elegant lighting, flowers, premium coffee setup",
    "interiors/luxury-interior-01.webp": "white marble tables in a luxury cafe, bright warm lighting, elegant",
    "interiors/luxury-interior-02.webp": "cream upholstered sofas in a minimal white cafe interior",
    "interiors/white-furniture.webp": "elegant white chairs and tables in a luxury cafe",
    "interiors/cafe-exterior.webp": "beautiful bright cafe exterior entrance with plants",
    "interiors/hygienic-kitchen.webp": "clean hygienic professional cafe kitchen counter",
    "interiors/coffee-machine.webp": "premium espresso machine on a white cafe counter",
    "interiors/elegant-table.webp": "elegant cafe dining table setup with white tableware",
    "interiors/cafe-counter.webp": "luxury cafe counter with dessert display",
    "interiors/cafe-seating.webp": "comfortable seating for students in a bright cafe",
    "interiors/cafe-plants.webp": "fresh indoor plants in a white modern cafe",
    "interiors/cafe-lighting.webp": "warm pendant lights in a cream colored cafe",
    "interiors/friends-at-cafe.webp": "friends enjoying coffee at a bright white luxury cafe",
    "interiors/cafe-gallery-01.webp": "beautiful coffee presentation on a white table",
    
    # Italian
    "italian/margherita-pizza.webp": "classic margherita pizza fresh from oven",
    "italian/four-cheese-pizza.webp": "four cheese pizza with melted cheese",
    "italian/alfredo-pasta.webp": "creamy alfredo pasta in a white bowl",
    "italian/arrabbiata-pasta.webp": "spicy red arrabbiata pasta",
    "italian/pesto-pasta.webp": "green pesto penne pasta with basil",
    "italian/garlic-bread.webp": "toasted garlic cheese bread slices",
    "italian/truffle-fries.webp": "truffle mushroom french fries",
    
    # American
    "american/classic-burger.webp": "classic veggie burger with lettuce and tomato",
    "american/chicken-burger.webp": "gourmet crispy chicken burger",
    "american/chicken-strips.webp": "crispy fried chicken strips with dip",
    "american/loaded-fries.webp": "french fries loaded with melted cheese",
    "american/club-sandwich.webp": "grilled club sandwich cut in half",
    "american/chicken-wings.webp": "bbq chicken wings on a plate",
    
    # Mexican
    "mexican/veg-tacos.webp": "mexican vegetable tacos with salsa",
    "mexican/chicken-tacos.webp": "chicken tacos with fresh garnish",
    "mexican/quesadilla.webp": "cheese quesadilla slices with dip",
    "mexican/burrito-bowl.webp": "mexican burrito bowl with rice and beans",
    "mexican/loaded-nachos.webp": "nachos loaded with cheese and jalapenos",
    
    # Japanese
    "japanese/veg-sushi.webp": "vegetable sushi roll on a plate",
    "japanese/chicken-sushi.webp": "chicken sushi roll neatly arranged",
    "japanese/ramen-bowl.webp": "vegetable ramen bowl with broth",
    "japanese/tempura.webp": "crispy tempura vegetables",
    
    # Desserts
    "desserts/cheesecake.webp": "slice of new york cheesecake",
    "desserts/tiramisu.webp": "italian tiramisu dessert portion",
    "desserts/lava-cake.webp": "chocolate lava cake with oozing center",
    "desserts/waffle.webp": "belgian chocolate waffle with toppings",
    "desserts/crepes.webp": "classic french crepes folded on a plate",
    "desserts/brownie.webp": "chocolate brownie with vanilla ice cream",
    "desserts/pancakes.webp": "stack of strawberry pancakes with syrup",
    
    # Coffee
    "coffee/espresso.webp": "shot of dark espresso with crema",
    "coffee/americano.webp": "black americano coffee in a mug",
    "coffee/cappuccino.webp": "cappuccino with beautiful latte art",
    "coffee/latte.webp": "cafe latte in a tall glass",
    "coffee/mocha.webp": "cafe mocha with chocolate drizzle",
    "coffee/macchiato.webp": "caramel macchiato with caramel syrup",
    "coffee/spanish-latte.webp": "spanish style latte with condensed milk",
    "coffee/iced-caramel.webp": "iced caramel coffee refreshment",
    "coffee/frappe.webp": "chocolate frappe topped with whipped cream",
    
    # Mocktails
    "mocktails/blue-lagoon.webp": "blue lagoon mocktail with ice and lemon",
    "mocktails/virgin-mojito.webp": "virgin mojito with fresh mint and lime",
    "mocktails/strawberry-mojito.webp": "strawberry mojito red drink with mint",
    "mocktails/peach-tea.webp": "peach iced tea in a tall glass",
    "mocktails/passion-fruit.webp": "passion fruit cooler drink with ice",
    "mocktails/watermelon-cooler.webp": "watermelon mint cooler red mocktail",
    
    # Signatures
    "signatures/golden-cappuccino.webp": "golden cloud cappuccino premium drink",
    "signatures/ivory-mocha.webp": "ivory white chocolate mocha drink",
    "signatures/cream-waffle.webp": "cream dream waffle premium dessert",
    "signatures/midnight-brownie.webp": "midnight chocolate brownie dessert",
    "signatures/golden-burger.webp": "golden crunch premium burger",
    "signatures/royale-pasta.webp": "cafe royale premium creamy pasta",
    "signatures/velvet-cheesecake.webp": "strawberry velvet cheesecake slice",
    "signatures/sunset-cooler.webp": "signature sunset cooler gradient drink"
}

os.makedirs(base_dir, exist_ok=True)
for d in directories:
    os.makedirs(os.path.join(base_dir, d), exist_ok=True)

def download_image(path, prompt):
    full_path = os.path.join(base_dir, path)
    if os.path.exists(full_path):
        return
    # Use pollinations.ai for image generation
    encoded_prompt = urllib.parse.quote(prompt + ", realistic, professional food photography, high quality")
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=600&height=450&nologo=true"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(full_path, 'wb') as out_file:
                out_file.write(response.read())
        print(f"Downloaded: {path}")
        time.sleep(0.5) # small delay to be polite
    except Exception as e:
        print(f"Failed to download {path}: {e}")

for path, prompt in images_to_download.items():
    download_image(path, prompt)

print("Image download complete.")
