/* ==========================================================================
   ABBENDHA'S CAFÉ — JAVASCRIPT CORE APPLICATION
   Brand: ABBENDHA'S CAFÉ
   Tagline: "Where Every Cup Creates a Beautiful Memory."
   Mobile: 7993062038 | Kamkole, opposite Woxsen Food
   ========================================================================== */

// ========== MENU DATA (INDIAN RUPEES ₹) ==========
const menuData = [
  // COFFEE
  { id: 1, name: 'Espresso', desc: 'Concentrated full-bodied shot extracted under 9 bars with thick golden crema.', price: 99, category: 'coffee', veg: true, image: 'cafe-photos/menu/coffee/espresso.webp' },
  { id: 2, name: 'Cappuccino', desc: 'Espresso blended with steamed milk and a dense, velvety microfoam with latte art.', price: 149, category: 'coffee', veg: true, image: 'cafe-photos/menu/coffee/cappuccino.webp' },
  { id: 3, name: 'Café Latte', desc: 'Smooth espresso poured through textured micro-foam milk with beautiful tulip art.', price: 169, category: 'coffee', veg: true, image: 'cafe-photos/menu/coffee/cafe-latte.webp' },
  { id: 4, name: 'Americano', desc: 'Signature espresso pulled directly over hot mineral water for a clean aromatic profile.', price: 119, category: 'coffee', veg: true, image: 'cafe-photos/menu/coffee/americano.webp' },
  { id: 5, name: 'Mocha', desc: 'Rich espresso blended with melted European dark cocoa and silky textured milk.', price: 179, category: 'coffee', veg: true, image: 'cafe-photos/menu/coffee/mocha.webp' },
  { id: 6, name: 'Caramel Macchiato', desc: 'Steamed vanilla milk marked with rich bold espresso and buttery salted caramel drizzle.', price: 199, category: 'coffee', veg: true, image: 'cafe-photos/menu/coffee/caramel-macchiato.webp' },
  { id: 7, name: 'Cold Coffee', desc: 'Freshly extracted espresso poured over crystal ice blocks with chilled whole milk.', price: 179, category: 'coffee', veg: true, image: 'cafe-photos/menu/coffee/cold-coffee.webp' },

  // ITALIAN
  { id: 8, name: 'Margherita Pizza', desc: 'Classic Italian pizza with San Marzano tomatoes, fresh mozzarella, and sweet basil.', price: 249, category: 'italian', veg: true, image: 'cafe-photos/menu/italian/margherita-pizza.webp' },
  { id: 9, name: 'Four Cheese Pizza', desc: 'A rich four-cheese medley featuring mozzarella, cheddar, gouda, and parmesan.', price: 329, category: 'italian', veg: true, image: 'cafe-photos/menu/italian/four-cheese-pizza.webp' },
  { id: 10, name: 'Alfredo Pasta', desc: 'Fettuccine in velvety rich parmesan cream sauce with garlic and aromatic herbs.', price: 279, category: 'italian', veg: true, image: 'cafe-photos/menu/italian/alfredo-pasta.webp' },
  { id: 11, name: 'Arrabbiata Pasta', desc: 'Penne tossed in fiery sun-ripened tomato sauce, garlic, and fresh basil.', price: 249, category: 'italian', veg: true, image: 'cafe-photos/menu/italian/arrabbiata-pasta.webp' },
  { id: 12, name: 'Pesto Pasta', desc: 'Fragrant Genovese basil pesto with toasted pine nuts, parmesan, and extra virgin olive oil.', price: 299, category: 'italian', veg: true, image: 'cafe-photos/menu/italian/pesto-pasta.webp' },
  { id: 13, name: 'Garlic Cheese Bread', desc: 'Artisanal baguette brushed with roasted garlic herb butter and bubbling mozzarella.', price: 149, category: 'italian', veg: true, image: 'cafe-photos/menu/italian/garlic-cheese-bread.webp' },

  // AMERICAN
  { id: 14, name: 'Veggie Burger', desc: 'Crispy garden herb patty with crisp lettuce, heirloom tomato, and mustard mayo.', price: 179, category: 'american', veg: true, image: 'cafe-photos/menu/american/veggie-burger.webp' },
  { id: 15, name: 'Chicken Burger', desc: 'Handcrafted crispy golden chicken fillet on toasted brioche with house relish.', price: 249, category: 'american', veg: false, image: 'cafe-photos/menu/american/chicken-burger.webp' },
  { id: 16, name: 'Loaded Fries', desc: 'Crispy skin-on french fries smothered in warm cheddar cheese sauce and jalapeños.', price: 199, category: 'american', veg: true, image: 'cafe-photos/menu/american/loaded-fries.webp' },
  { id: 17, name: 'Club Sandwich', desc: 'Triple-layer toasted sandwich with crisp greens, sliced tomato, cheese, and herb dressing.', price: 199, category: 'american', veg: true, image: 'cafe-photos/menu/american/club-sandwich.webp' },
  { id: 18, name: 'Chicken Strips', desc: 'Golden buttermilk battered tender strips served with house honey mustard sauce.', price: 229, category: 'american', veg: false, image: 'cafe-photos/menu/american/chicken-strips.webp' },

  // MEXICAN
  { id: 19, name: 'Tacos', desc: 'Crisp corn shells filled with seasoned beans, guacamole, and fire-roasted salsa.', price: 199, category: 'mexican', veg: true, image: 'cafe-photos/menu/mexican/tacos.webp' },
  { id: 20, name: 'Quesadillas', desc: 'Toasted flour tortilla stuffed with melted Monterrey Jack cheese, peppers, and sweet corn.', price: 229, category: 'mexican', veg: true, image: 'cafe-photos/menu/mexican/quesadillas.webp' },
  { id: 21, name: 'Burrito Bowl', desc: 'Cilantro lime rice with seasoned black beans, sweet corn, salsa roja, and creamy guacamole.', price: 279, category: 'mexican', veg: true, image: 'cafe-photos/menu/mexican/burrito-bowl.webp' },
  { id: 22, name: 'Loaded Nachos', desc: 'Stone-ground tortilla chips piled high with warm queso, pico de gallo, and pickled jalapeños.', price: 199, category: 'mexican', veg: true, image: 'cafe-photos/menu/mexican/loaded-nachos.webp' },

  // JAPANESE-INSPIRED
  { id: 23, name: 'Vegetable Sushi Roll', desc: 'Hand-rolled sushi with crisp cucumber, avocado, and pickled daikon with wasabi.', price: 249, category: 'japanese', veg: true, image: 'cafe-photos/menu/japanese/veg-sushi.webp' },
  { id: 24, name: 'Chicken Sushi Roll', desc: 'Rolled sushi with teriyaki glazed chicken, sesame seeds, and Japanese mayo.', price: 299, category: 'japanese', veg: false, image: 'cafe-photos/menu/japanese/chicken-sushi.webp' },
  { id: 25, name: 'Ramen Bowl', desc: 'Springy ramen noodles in slow-simmered rich umami broth with nori and seasonal mushrooms.', price: 279, category: 'japanese', veg: true, image: 'cafe-photos/menu/japanese/ramen-bowl.webp' },
  { id: 26, name: 'Tempura Vegetables', desc: 'Feather-light golden battered seasonal vegetables served with savory tentsuyu dip.', price: 229, category: 'japanese', veg: true, image: 'cafe-photos/menu/japanese/tempura.webp' },

  // DESSERTS
  { id: 27, name: 'Cheesecake', desc: 'Velvety smooth baked New York cream cheese on a buttery graham crust with berry compote.', price: 199, category: 'desserts', veg: true, image: 'cafe-photos/menu/desserts/cheesecake.webp' },
  { id: 28, name: 'Tiramisu', desc: 'Espresso-dipped savoiardi biscuits layered with rich mascarpone and cocoa powder.', price: 229, category: 'desserts', veg: true, image: 'cafe-photos/menu/desserts/tiramisu.webp' },
  { id: 29, name: 'Chocolate Lava Cake', desc: 'Warm dark chocolate sponge cake with a molten flowing ganache center.', price: 179, category: 'desserts', veg: true, image: 'cafe-photos/menu/desserts/lava-cake.webp' },
  { id: 30, name: 'Brownie', desc: 'Warm fudge chocolate brownie crowned with artisanal vanilla bean gelato.', price: 199, category: 'desserts', veg: true, image: 'cafe-photos/menu/desserts/brownie.webp' },
  { id: 31, name: 'Waffles', desc: 'Golden crispy malted Belgian waffle drizzled with warm chocolate and maple syrup.', price: 199, category: 'desserts', veg: true, image: 'cafe-photos/menu/desserts/waffles.webp' },
  { id: 32, name: 'Pancakes', desc: 'Fluffy golden buttermilk pancakes stacked with fresh strawberries and sweet cream.', price: 229, category: 'desserts', veg: true, image: 'cafe-photos/menu/desserts/pancakes.webp' },

  // MOCKTAILS
  { id: 33, name: 'Blue Lagoon', desc: 'Vibrant blue curaçao citrus essence with fizzy soda and fresh lemon zest.', price: 149, category: 'mocktails', veg: true, image: 'cafe-photos/menu/mocktails/blue-lagoon.webp' },
  { id: 34, name: 'Virgin Mojito', desc: 'Classic Cuban cooler with freshly crushed garden mint, key lime juice, and cane sugar.', price: 129, category: 'mocktails', veg: true, image: 'cafe-photos/menu/mocktails/virgin-mojito.webp' },
  { id: 35, name: 'Strawberry Mojito', desc: 'Muddled fresh strawberries, garden mint leaves, and lime with sparkling soda.', price: 159, category: 'mocktails', veg: true, image: 'cafe-photos/menu/mocktails/strawberry-mojito.webp' },
  { id: 36, name: 'Peach Iced Tea', desc: 'Slow-brewed Nilgiri black tea infused with fragrant ripe white peach puree.', price: 129, category: 'mocktails', veg: true, image: 'cafe-photos/menu/mocktails/peach-iced-tea.webp' },
  { id: 37, name: 'Fruit Cooler', desc: 'Refreshing tropical fruit blend with crushed ice, basil seeds, and sparkling tonic.', price: 169, category: 'mocktails', veg: true, image: 'cafe-photos/menu/mocktails/fruit-cooler.webp' }
];

// ========== GALLERY COLLECTIONS (STEP INTO OUR LITTLE WORLD) ==========
// Two-Floor Architecture, Ground Floor, Open-Air Terrace, Student Community, Artisan Craft
const galleryData = [
  // 1. TWO-FLOOR ARCHITECTURE & FACADE
  {
    id: 'g1',
    category: 'building',
    categoryLabel: 'Two-Floor Architecture',
    caption: "ABBENDHA'S CAFÉ — Two-Floor Flagship in Kamkole",
    image: 'cafe-photos/gallery/building/two-floor-facade.webp',
    featured: 'wide'
  },

  // 2. GROUND FLOOR: ESPRESSO HALL & MARBLE LOUNGE
  {
    id: 'g2',
    category: 'ground',
    categoryLabel: 'Ground Floor Espresso Hall',
    caption: 'Calacatta Marble Counter & Artisan Barista Station',
    image: 'cafe-photos/gallery/ground-floor/marble-espresso-hall.webp',
    featured: 'tall'
  },
  {
    id: 'g3',
    category: 'ground',
    categoryLabel: 'Ground Floor Espresso Hall',
    caption: 'Beige Velvet Curved Banquettes & Warm Alcoves',
    image: 'cafe-photos/gallery/ground-floor/beige-lounge-alcove.webp',
    featured: 'normal'
  },
  {
    id: 'g4',
    category: 'ground',
    categoryLabel: 'Ground Floor Espresso Hall',
    caption: 'Sunlit Window Dining with Floor-to-Ceiling Glass',
    image: 'cafe-photos/gallery/ground-floor/sunlit-window-seating.webp',
    featured: 'normal'
  },
  {
    id: 'g5',
    category: 'ground',
    categoryLabel: 'Ground Floor Espresso Hall',
    caption: 'White Marble Counter & Signature Pastry Showcase',
    image: 'cafe-photos/gallery/ground-floor/white-marble-counter.webp',
    featured: 'normal'
  },
  {
    id: 'g6',
    category: 'ground',
    categoryLabel: 'Ground Floor Espresso Hall',
    caption: 'Paved Courtyard Garden Entrance with Potted Greenery',
    image: 'cafe-photos/gallery/ground-floor/courtyard-garden-patio.webp',
    featured: 'normal'
  },

  // 3. FIRST FLOOR: OPEN-AIR TERRACE & BREEZY DECK
  {
    id: 'g7',
    category: 'terrace',
    categoryLabel: 'First Floor Open-Air Terrace',
    caption: 'Open-Air Terrace & Sunset Pergola Deck at Dusk',
    image: 'cafe-photos/gallery/first-floor/terrace-evening-lounge.webp',
    featured: 'wide'
  },
  {
    id: 'g8',
    category: 'terrace',
    categoryLabel: 'First Floor Open-Air Terrace',
    caption: 'Golden Hour Sunset Lounge with Panoramic Countryside View',
    image: 'cafe-photos/gallery/first-floor/sunset-pergola-deck.webp',
    featured: 'normal'
  },
  {
    id: 'g9',
    category: 'terrace',
    categoryLabel: 'First Floor Open-Air Terrace',
    caption: 'Quiet Library Corner & Bouclé Reading Sanctuary',
    image: 'cafe-photos/gallery/first-floor/library-reading-nook.webp',
    featured: 'tall'
  },
  {
    id: 'g10',
    category: 'terrace',
    categoryLabel: 'First Floor Open-Air Terrace',
    caption: 'Pergola Cabana Dining Under Festive Warm Lighting',
    image: 'cafe-photos/gallery/first-floor/pergola-cabana-dining.webp',
    featured: 'normal'
  },
  {
    id: 'g11',
    category: 'terrace',
    categoryLabel: 'First Floor Open-Air Terrace',
    caption: 'Ambient Twilight Fairy Lights & Evening Breeze',
    image: 'cafe-photos/gallery/first-floor/terrace-ambient-night.webp',
    featured: 'normal'
  },

  // 4. STUDENT CULTURE & CO-WORKING
  {
    id: 'g12',
    category: 'students',
    categoryLabel: 'Student Community & Co-Working',
    caption: 'Woxsen Campus Study Table with High-Speed WiFi & Outlets',
    image: 'cafe-photos/gallery/students/woxsen-study-lounge.webp',
    featured: 'wide'
  },
  {
    id: 'g13',
    category: 'students',
    categoryLabel: 'Student Community & Co-Working',
    caption: 'Friends Sharing Coffee, Creative Ideas & Laughter',
    image: 'cafe-photos/gallery/students/creative-campus-collaboration.webp',
    featured: 'normal'
  },

  // 5. ARTISAN CRAFT & LUXURY DETAILS
  {
    id: 'g14',
    category: 'craft',
    categoryLabel: 'Artisan Coffee & Craft',
    caption: "Barista Swan Latte Art in ABBENDHA'S Branded Ceramic Cup",
    image: 'cafe-photos/gallery/details/artisan-swan-latte.webp',
    featured: 'tall'
  },
  {
    id: 'g15',
    category: 'craft',
    categoryLabel: 'Artisan Coffee & Craft',
    caption: 'Commercial La Marzocco Dual-Boiler Espresso Bar',
    image: 'cafe-photos/gallery/details/la-marzocco-espresso.webp',
    featured: 'normal'
  },
  {
    id: 'g16',
    category: 'craft',
    categoryLabel: 'Artisan Coffee & Craft',
    caption: 'Specialty V60 Single-Origin Pour-Over Ceremony',
    image: 'cafe-photos/gallery/details/specialty-v60-pour-over.webp',
    featured: 'normal'
  },
  {
    id: 'g17',
    category: 'craft',
    categoryLabel: 'Artisan Coffee & Craft',
    caption: 'Champagne-Gold Fixtures & Architectural Arches',
    image: 'cafe-photos/gallery/details/brass-architectural-accents.webp',
    featured: 'normal'
  }
];

// ========== UTILITY: CURRENCY FORMATTER (INR ₹) ==========
function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// ========== TOAST NOTIFICATION ==========
function showNotification(message) {
  const container = document.getElementById('notificationContainer');
  if (!container) return;
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = message;
  container.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('removing');
    setTimeout(() => notification.remove(), 300);
  }, 2800);
}

// ========== 3. HOMEPAGE OPENING TRANSITION (300-600ms) ==========
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    // Graceful 450ms reveal duration, sub-second initial accessibility
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 450);
  }
});

// ========== NAVBAR & SCROLL BEHAVIOR ==========
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (backToTop) {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  }

  updateActiveNav();
});

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    if (navOverlay) navOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
}

if (navOverlay) {
  navOverlay.addEventListener('click', closeNav);
}

function closeNav() {
  if (hamburger) hamburger.classList.remove('active');
  if (navLinks) navLinks.classList.remove('open');
  if (navOverlay) navOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeNav();
  });
});

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 160;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${id}`) {
          a.classList.add('active');
        }
      });
    }
  });
}

// Parallax for hero
window.addEventListener('scroll', () => {
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    const scrolled = window.scrollY;
    heroBg.style.transform = `scale(1.08) translateY(${scrolled * 0.25}px)`;
  }
});

// Scroll Reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ========== 8 & 9. MENU SYSTEM & CATEGORY FILTERING ==========
const menuGrid = document.getElementById('menuGrid');
const menuSearch = document.getElementById('menuSearch');
const menuFilters = document.getElementById('menuFilters');
let currentMenuCategory = 'all';
let currentMenuSearch = '';

function renderMenu() {
  if (!menuGrid) return;

  const filtered = menuData.filter(item => {
    const matchCategory = currentMenuCategory === 'all' || item.category === currentMenuCategory;
    const q = currentMenuSearch.toLowerCase().trim();
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div class="no-results">
        <span class="icon">☕</span>
        <h3>No Menu Items Found</h3>
        <p>Try searching for another dish or selecting a different cuisine tab.</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map(item => `
    <div class="menu-card" data-category="${item.category}">
      <div class="menu-card-image">
        <img
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
          width="600"
          height="450"
          class="menu-card-img"
          onerror="this.onerror=null; this.src='cafe-photos/hero/abbendhas-open-air-hero.webp'; console.warn('Failed to load menu image: ' + '${item.image}');"
        >
        <span class="menu-card-category">${getCategoryLabel(item.category)}</span>
        <span class="veg-indicator ${item.veg ? 'veg' : 'nonveg'}" title="${item.veg ? 'Vegetarian' : 'Non-Vegetarian'}"></span>
      </div>
      <div class="menu-card-body">
        <h3 class="item-name">${item.name}</h3>
        <p class="item-desc">${item.desc}</p>
        <div class="menu-card-badges">
          <span class="badge-fresh">${item.veg ? '🌱 100% Vegetarian' : '🍗 Non-Vegetarian'}</span>
          <span class="badge-fresh">✨ Artisanal Prep</span>
        </div>
        <div class="menu-card-footer">
          <span class="item-price menu-card-price" data-price="${item.price}">${formatPrice(item.price)}</span>
          <button class="add-to-cart add-to-cart-btn" type="button" onclick="addToCart(${item.id})" id="addBtn${item.id}">
            <span>🛒</span> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function getCategoryLabel(cat) {
  const labels = {
    coffee: '☕ Coffee',
    italian: '🍕 Italian',
    american: '🍔 American',
    mexican: '🌮 Mexican',
    japanese: '🍱 Japanese-Inspired',
    desserts: '🍰 Desserts',
    mocktails: '🍹 Mocktails'
  };
  return labels[cat] || cat;
}

if (menuFilters) {
  menuFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (btn) {
      document.querySelectorAll('#menuFilters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMenuCategory = btn.dataset.category || 'all';
      renderMenu();
    }
  });
}

function filterMenu(category) {
  currentMenuCategory = category;
  document.querySelectorAll('#menuFilters .filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.category === category) btn.classList.add('active');
  });
  renderMenu();
  const menuSec = document.getElementById('menu');
  if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
}

if (menuSearch) {
  menuSearch.addEventListener('input', (e) => {
    currentMenuSearch = e.target.value;
    renderMenu();
  });
}

// Initial Menu Render
renderMenu();

// ========== CART SYSTEM (LOCALSTORAGEabbendha_cart) ==========
let cart = JSON.parse(localStorage.getItem('abbendha_cart')) || [];

function saveCart() {
  localStorage.setItem('abbendha_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    countEl.textContent = count;
    if (count > 0) {
      countEl.classList.add('show');
    } else {
      countEl.classList.remove('show');
    }
  }
}

function addToCart(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, qty: 1, image: item.image });
  }
  saveCart();

  // Button animation
  const btn = document.getElementById(`addBtn${id}`);
  if (btn) {
    btn.classList.add('added');
    btn.innerHTML = '<span>✓</span> Added';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<span>🛒</span> Add to Cart';
    }, 1200);
  }

  showNotification(`☕ ${item.name} added to your cart`);
}

function addSpecialToCart(name, price) {
  const existing = cart.find(c => c.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: 'special_' + name.replace(/\s+/g, '_'), name, price, qty: 1, image: 'cafe-photos/hero/abbendhas-open-air-hero.webp' });
  }
  saveCart();
  showNotification(`🎉 ${name} combo added to your cart`);
}

updateCartCount();

// ========== 7. CAFÉ GALLERY & LIGHTBOX SYSTEM ==========
const galleryGrid = document.getElementById('galleryGrid');
const galleryTabs = document.getElementById('galleryTabs');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCategory = document.getElementById('lightboxCategory');

let currentGalleryCategory = 'all';
let filteredGallery = [...galleryData];
let currentLightboxIndex = 0;

function renderGallery() {
  if (!galleryGrid) return;

  filteredGallery = galleryData.filter(item => {
    return currentGalleryCategory === 'all' || item.category === currentGalleryCategory;
  });

  galleryGrid.innerHTML = filteredGallery.map((item, index) => {
    const featuredClass = item.featured === 'wide' ? 'featured-wide' : (item.featured === 'tall' ? 'featured-tall' : '');
    return `
      <div class="gallery-card ${featuredClass}" onclick="openLightbox(${index})" data-index="${index}">
        <img src="${item.image}" alt="${item.caption}" loading="lazy" onerror="this.onerror=null; this.src='cafe-photos/hero/abbendhas-open-air-hero.webp';">
        <div class="gallery-card-overlay">
          <div class="gallery-card-caption">${item.caption}</div>
          <div class="gallery-card-category">${item.categoryLabel}</div>
        </div>
        <div class="gallery-zoom-icon">🔍</div>
      </div>
    `;
  }).join('');
}

if (galleryTabs) {
  galleryTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.gallery-tab');
    if (tab) {
      document.querySelectorAll('#galleryTabs .gallery-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentGalleryCategory = tab.dataset.category || 'all';
      renderGallery();
    }
  });
}

function openLightbox(index) {
  if (!lightbox || !filteredGallery[index]) return;
  currentLightboxIndex = index;
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightboxContent() {
  const item = filteredGallery[currentLightboxIndex];
  if (!item) return;
  lightboxImg.src = item.image;
  if (lightboxCaption) lightboxCaption.textContent = item.caption;
  if (lightboxCategory) lightboxCategory.textContent = `${item.categoryLabel} (${currentLightboxIndex + 1} of ${filteredGallery.length})`;
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

if (lightboxPrev) {
  lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
    updateLightboxContent();
  });
}

if (lightboxNext) {
  lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredGallery.length;
    updateLightboxContent();
  });
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
  if (!lightbox || !lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
  if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
});

// Initial Gallery Render
renderGallery();

// ========== REVIEWS CAROUSEL ==========
const reviewsTrack = document.getElementById('reviewsTrack');
const reviewsDots = document.getElementById('reviewsDots');
let currentReview = 0;
let reviewAutoplay;
let totalReviews = 0;

function initReviews() {
  if (!reviewsTrack || !reviewsDots) return;
  const cards = reviewsTrack.querySelectorAll('.review-card');
  totalReviews = cards.length;
  if (totalReviews === 0) return;

  reviewsDots.innerHTML = '';
  for (let i = 0; i < totalReviews; i++) {
    const dot = document.createElement('span');
    dot.className = `dot ${i === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToReview(i));
    reviewsDots.appendChild(dot);
  }

  startReviewAutoplay();
}

function goToReview(index) {
  currentReview = index;
  if (reviewsTrack) reviewsTrack.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  if (!reviewsDots) return;
  const dots = reviewsDots.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentReview);
  });
}

function nextReview() {
  currentReview = (currentReview + 1) % totalReviews;
  goToReview(currentReview);
}

function startReviewAutoplay() {
  reviewAutoplay = setInterval(nextReview, 5000);
}

function stopReviewAutoplay() {
  clearInterval(reviewAutoplay);
}

const reviewsCarousel = document.getElementById('reviewsCarousel');
if (reviewsCarousel) {
  reviewsCarousel.addEventListener('mouseenter', stopReviewAutoplay);
  reviewsCarousel.addEventListener('mouseleave', startReviewAutoplay);
}

initReviews();

// ========== CONTACT FORM ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formSuccess = document.getElementById('formSuccess');
    if (formSuccess) formSuccess.classList.add('show');
    showNotification('✓ Thank you! Your message has reached ABBENDHA\'S CAFÉ.');

    setTimeout(() => {
      contactForm.reset();
      if (formSuccess) formSuccess.classList.remove('show');
    }, 4000);
  });
}

// ========== BACK TO TOP ==========
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========== SMOOTH SCROLL ANCHORS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '#!') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
