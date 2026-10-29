/* =========================================
   ADDIES BAKERY — PRODUCT MENU AND CART
========================================= */

const WHATSAPP_NUMBER = '233202990798';

const products = [
  // RAW CAKES
  {
    id: 'raw-vanilla',
    name: 'Vanilla Cake',
    category: 'Raw Cakes',
    description: 'Classic vanilla cake, baked fresh to order.',
    image: 'images/vanilla-cake.jpeg',
    options: [
      { label: '5 inches', price: 60 },
      { label: '6 inches', price: 100 },
      { label: '8 inches', price: 160 },
      { label: '10 inches', price: 190 },
      { label: '12 inches', price: 250 }
    ]
  },
  {
    id: 'raw-red-velvet',
    name: 'Red Velvet Cake',
    category: 'Raw Cakes',
    description: 'Soft red velvet cake, made to order.',
    image: 'images/red-velvet-cake.jpeg',
    options: [
      { label: '5 inches', price: 60 },
      { label: '6 inches', price: 100 },
      { label: '8 inches', price: 160 },
      { label: '10 inches', price: 190 },
      { label: '12 inches', price: 250 }
    ]
  },
  {
    id: 'raw-chocolate',
    name: 'Chocolate Cake',
    category: 'Raw Cakes',
    description: 'A rich chocolate cake for chocolate lovers.',
    image: 'images/chocolate-cake.jpeg',
    options: [
      { label: '5 inches', price: 75 },
      { label: '6 inches', price: 115 },
      { label: '8 inches', price: 160 },
      { label: '10 inches', price: 225 },
      { label: '12 inches', price: 300 }
    ]
  },
  {
    id: 'raw-fruit',
    name: 'Fruit Loaf Cake',
    category: 'Raw Cakes',
    description: 'Fruit cake prepared fresh to order.',
    image: 'images/fruit-loaf-cake.jpeg',
    options: [
      { label: '5 inches', price: 75 },
      { label: '6 inches', price: 115 },
      { label: '8 inches', price: 160 },
      { label: '10 inches', price: 225 },
      { label: '12 inches', price: 300 }
    ]
  },
  {
    id: 'raw-carrot',
    name: 'Carrot Cake',
    category: 'Raw Cakes',
    description: 'A delicious carrot cake for your enjoyment.',
    image: 'images/carrot-cake.jpeg',
    options: [
      { label: '5 inches', price: 80 },
      { label: '6 inches', price: 100 },
      { label: '8 inches', price: 180 },
      { label: '10 inches', price: 190 },
      { label: '12 inches', price: 250 }
    ]
  },
  {
    id: 'raw-strawberry',
    name: 'Strawberry Cake',
    category: 'Raw Cakes',
    description: 'Strawberry-flavoured cake made to order.',
    image: 'images/strawberry-cake.jpeg',
    options: [
      { label: '5 inches', price: 75 },
      { label: '6 inches', price: 115 },
      { label: '8 inches', price: 180 },
      { label: '10 inches', price: 225 },
      { label: '12 inches', price: 300 }
    ]
  },
  {
    id: 'raw-orange',
    name: 'Orange Cake',
    category: 'Raw Cakes',
    description: 'A lovely orange-flavoured cake.',
    image: 'images/orange-cake.jpeg',
    options: [
      { label: '5 inches', price: 60 },
      { label: '6 inches', price: 100 },
      { label: '8 inches', price: 150 },
      { label: '10 inches', price: 190 },
      { label: '12 inches', price: 250 }
    ]
  },
  {
    id: 'raw-cookies-cream',
    name: 'Cookies & Cream Cake',
    category: 'Raw Cakes',
    description: 'A cookies-and-cream flavoured cake.',
    image: 'images/cookies-cream-cake.jpeg',
    options: [
      { label: '5 inches', price: 75 },
      { label: '6 inches', price: 115 },
      { label: '8 inches', price: 160 },
      { label: '10 inches', price: 225 },
      { label: '12 inches', price: 300 }
    ]
  },
  {
    id: 'raw-biscoff',
    name: 'Biscoff Cake',
    category: 'Raw Cakes',
    description: 'A special Biscoff cake made to order.',
    image: 'images/biscoff-cake.jpeg',
    options: [
      { label: '5 inches', price: 100 },
      { label: '6 inches', price: 170 },
      { label: '8 inches', price: 250 },
      { label: '10 inches', price: 300 },
      { label: '12 inches', price: 450 }
    ]
  },

  // DECORATED CAKES
  {
    id: 'decorated-4',
    name: 'Decorated Cake — 4 inches',
    category: 'Decorated Cakes',
    description: 'Choose your preferred number of cake layers.',
    image: 'images/decorated-cake-4.jpeg',
    options: [
      { label: '2 layers', price: 200 },
      { label: '3 layers', price: 270 },
      { label: '4 layers', price: 320 },
      { label: '5 layers', price: 370 },
      { label: '6 layers', price: 420 },
      { label: '7 layers', price: 470 },
      { label: '8 layers', price: 520 }
    ]
  },
  {
    id: 'decorated-5',
    name: 'Decorated Cake — 5 inches',
    category: 'Decorated Cakes',
    description: 'Choose your preferred number of cake layers.',
    image: 'images/decorated-cake-5.jpeg',
    options: [
      { label: '2 layers', price: 295 },
      { label: '3 layers', price: 400 },
      { label: '4 layers', price: 520 },
      { label: '5 layers', price: 630 },
      { label: '6 layers', price: 730 },
      { label: '7 layers', price: 870 },
      { label: '8 layers', price: 980 }
    ]
  },
  {
    id: 'decorated-6',
    name: 'Decorated Cake — 6 inches',
    category: 'Decorated Cakes',
    description: 'Choose your preferred number of cake layers.',
    image: 'images/decorated-cake-6.jpeg',
    options: [
      { label: '2 layers', price: 350 },
      { label: '3 layers', price: 500 },
      { label: '4 layers', price: 650 },
      { label: '5 layers', price: 800 },
      { label: '6 layers', price: 950 },
      { label: '7 layers', price: 1100 },
      { label: '8 layers', price: 1250 }
    ]
  },
  {
    id: 'decorated-8',
    name: 'Decorated Cake — 8 inches',
    category: 'Decorated Cakes',
    description: 'Choose your preferred number of cake layers.',
    image: 'images/decorated-cake-8.jpeg',
    options: [
      { label: '2 layers', price: 400 },
      { label: '3 layers', price: 550 },
      { label: '4 layers', price: 700 },
      { label: '5 layers', price: 850 }
    ]
  },
  {
    id: 'decorated-10',
    name: 'Decorated Cake — 10 inches',
    category: 'Decorated Cakes',
    description: 'Choose your preferred number of cake layers.',
    image: 'images/decorated-cake-10.jpeg',
    options: [
      { label: '2 layers', price: 500 },
      { label: '3 layers', price: 650 },
      { label: '4 layers', price: 800 },
      { label: '5 layers', price: 950 },
      { label: '6 layers', price: 1100 }
    ]
  },
  {
    id: 'decorated-12',
    name: 'Decorated Cake — 12 inches',
    category: 'Decorated Cakes',
    description: 'Choose an available layer option.',
    image: 'images/decorated-cake-12.jpeg',
    options: [
      { label: '2 layers', price: 650 },
      { label: '3 layers', price: 800 }
    ]
  },

  // WEDDING CAKES
  {
    id: 'wedding-2-tier',
    name: 'Two-Tiered Wedding Cake',
    category: 'Wedding Cakes',
    description: 'Elegant two-tier cake for your special day.',
    image: 'images/wedding-cake-2.jpeg',
    options: [
      { label: '12 + 8 inches', price: 2200 },
      { label: '10 + 6 inches', price: 1800 },
      { label: '8 + 5 inches', price: 1500 },
      { label: '6 + 4 inches', price: 1000 },
      { label: '5 + 3 inches', price: 850 }
    ]
  },
  {
    id: 'wedding-3-tier',
    name: 'Three-Tiered Wedding Cake',
    category: 'Wedding Cakes',
    description: 'A beautiful three-tier cake for your celebration.',
    image: 'images/wedding-cake.jpeg',
    options: [
      { label: '12 + 10 + 8 inches', price: 2800 },
      { label: '10 + 6 + 4 inches', price: 2000 },
      { label: '8 + 5 + 3 inches', price: 1480 }
    ]
  },

  // CUPCAKES AND COMBOS
  {
    id: 'themed-cupcakes',
    name: 'Themed Cupcakes',
    category: 'Cupcakes & Combos',
    description: 'Decorated cupcakes for birthdays and celebrations.',
    image: 'images/cupcakes.jpeg',
    options: [
      { label: '4 cupcakes', price: 100 },
      { label: '6 cupcakes', price: 150 },
      { label: '8 cupcakes', price: 200 },
      { label: '12 cupcakes', price: 350 },
      { label: '16 cupcakes', price: 450 }
    ]
  },
  {
    id: 'bento-combo',
    name: 'Bento Cake & Cupcakes Combo',
    category: 'Cupcakes & Combos',
    description: 'A bento cake paired with your favourite cupcake pack.',
    image: 'images/bento-combo.jpeg',
    options: [
      { label: '1 bento cake + 2 cupcakes', price: 250 },
      { label: '1 bento cake + 5 cupcakes', price: 350 },
      { label: '1 bento cake + 8 cupcakes', price: 450 }
    ]
  },

  // SPECIAL TREATS
  {
    id: 'heart-cake',
    name: 'Heart-Shaped Cake',
    category: 'Special Treats',
    description: 'A heart-shaped cake for someone special.',
    image: 'images/heart-cake.jpeg',
    options: [
      { label: 'Heart-shaped cake', price: 350 }
    ]
  },
  {
    id: 'loaf-vanilla',
    name: 'Vanilla Loaf Cake',
    category: 'Loaf Cakes',
    description: 'A classic vanilla loaf cake.',
    image: 'images/vanilla-loaf-cake.jpeg',
    options: [{ label: 'Standard loaf', price: 30 }]
  },
  {
    id: 'loaf-red-velvet',
    name: 'Red Velvet Loaf Cake',
    category: 'Loaf Cakes',
    description: 'A red velvet loaf cake.',
    image: 'images/loaf-cake-red-velvet.jpeg',
    options: [{ label: 'Standard loaf', price: 30 }]
  },
  {
    id: 'loaf-strawberry',
    name: 'Strawberry Loaf Cake',
    category: 'Loaf Cakes',
    description: 'A strawberry-flavoured loaf cake.',
    image: 'images/loaf-cake-strawberry.jpeg',
    options: [{ label: 'Standard loaf', price: 30 }]
  },
  {
    id: 'loaf-chocolate',
    name: 'Chocolate Loaf Cake',
    category: 'Loaf Cakes',
    description: 'A chocolate loaf cake.',
    image: 'images/loaf-cake-chocolate.jpeg',
    options: [{ label: 'Standard loaf', price: 35 }]
  },
  {
    id: 'cake-parfait',
    name: 'Cake Parfait',
    category: 'Special Treats',
    description: 'Cake parfait served in a 350 ml cup.',
    image: 'images/cake-parfait.jpeg',
    options: [{ label: '350 ml', price: 65 }]
  }
];

/* =========================================
   SHARED VARIABLES AND PRICE HELPERS
========================================= */

let cart = [];

const $ = selector => document.querySelector(selector);

const productGrid = $('#product-grid');
const cartSidebar = $('#cartSidebar');
const cartItems = $('#cartItems');
const cartFooter = $('.cart-footer');

let originalCartFooter = '';

const money = amount =>
  'GH₵ ' + Number(amount).toLocaleString('en-GH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

const totalPrice = () =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

/* =========================================
   PRODUCT MENU AND CATEGORY FILTERS
   Show 4 products first, then View All
========================================= */

let activeCategory = 'All';
let showAllProducts = false;

const PRODUCTS_PER_PAGE = 4;

function displayProducts() {
  if (!productGrid) return;

  const categories = [
    'All',
    ...new Set(products.map(product => product.category))
  ];

  // Create the category filter buttons
  let filterBar = $('#product-filters');

  if (!filterBar) {
    filterBar = document.createElement('div');
    filterBar.id = 'product-filters';
    filterBar.className = 'filters';
    filterBar.setAttribute(
      'aria-label',
      'Filter products by category'
    );

    productGrid.before(filterBar);
  }

  filterBar.innerHTML = categories.map(category => `
    <button
      type="button"
      class="filter-btn ${
        category === activeCategory ? 'active' : ''
      }"
      data-category="${category}"
      aria-pressed="${category === activeCategory}"
    >${category}</button>
  `).join('');

  // Get products for the selected category
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(
        product => product.category === activeCategory
      );

  // Show only 4 products unless View All has been clicked
  const visibleProducts = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, PRODUCTS_PER_PAGE);

  // Render the product cards
  productGrid.innerHTML = visibleProducts.map(product => {
    const startingPrice = Math.min(
      ...product.options.map(option => option.price)
    );

    return `
      <article class="product-card">

        <button
          type="button"
          class="product-image-button"
          data-view-product="${product.id}"
          aria-label="View ${product.name}"
        >
          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy"
          >
          <span class="view-photo-label">View Cake</span>
        </button>

        <div class="product-info">
          <small>${product.category}</small>

          <h3>
            <button
              type="button"
              class="product-title-button"
              data-view-product="${product.id}"
            >${product.name}</button>
          </h3>

          <p>${product.description}</p>

          <p class="price">
            From ${money(startingPrice)}
          </p>

          <button
            type="button"
            class="add-btn"
            data-view-product="${product.id}"
          >View Cake & Options</button>
        </div>

      </article>
    `;
  }).join('');

  // Create the View All / Show Less button
  let viewAllButton = $('#viewAllProductsButton');

  if (!viewAllButton) {
    viewAllButton = document.createElement('button');
    viewAllButton.id = 'viewAllProductsButton';
    viewAllButton.type = 'button';
    viewAllButton.className = 'view-all-products-btn';

    productGrid.insertAdjacentElement(
      'afterend',
      viewAllButton
    );
  }

  // Only show this button when the category has more than 4 products
  viewAllButton.hidden =
    filteredProducts.length <= PRODUCTS_PER_PAGE;

  if (!viewAllButton.hidden) {
    if (showAllProducts) {
      viewAllButton.textContent = 'Show Less ↑';
      viewAllButton.setAttribute(
        'aria-expanded',
        'true'
      );
    } else {
      const categoryName = activeCategory === 'All'
        ? 'Products'
        : activeCategory;

      viewAllButton.textContent =
        `View All ${categoryName} ↓`;

      viewAllButton.setAttribute(
        'aria-expanded',
        'false'
      );
    }
  }
}

/* Handle category and View All button clicks */
productGrid?.parentElement?.addEventListener(
  'click',
  event => {
    // Category filter clicked
    const categoryButton = event.target.closest(
      '#product-filters [data-category]'
    );

    if (categoryButton) {
      activeCategory = categoryButton.dataset.category;

      // Start the new category from the first 4 products
      showAllProducts = false;

      displayProducts();
      return;
    }

    // View All / Show Less clicked
    const viewAllButton = event.target.closest(
      '#viewAllProductsButton'
    );

    if (viewAllButton) {
      showAllProducts = !showAllProducts;
      displayProducts();

      if (showAllProducts) {
        viewAllButton.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }
);

/* Category filter clicks */
productGrid?.parentElement?.addEventListener('click', event => {
  const button = event.target.closest('#product-filters [data-category]');
  if (!button) return;

  activeCategory = button.dataset.category;
  displayProducts();
});

/* =========================================
   PRODUCT DETAILS POPUP
========================================= */

let selectedProduct = null;

function createProductModal() {
  if ($('#productModal')) return;

  const modal = document.createElement('div');

  modal.id = 'productModal';
  modal.className = 'product-modal';
  modal.hidden = true;

  modal.innerHTML = `
    <div class="product-modal-backdrop" data-close-product></div>

    <section
      class="product-modal-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalProductName"
    >
      <button
        type="button"
        class="product-modal-close"
        data-close-product
        aria-label="Close product details"
      >&times;</button>

      <div class="product-modal-content">

        <div class="product-modal-image-wrap">
          <img id="modalProductImage" src="" alt="">
        </div>

        <div class="product-modal-details">
          <small id="modalProductCategory"></small>
          <h2 id="modalProductName"></h2>
          <p id="modalProductDescription"></p>

          <label for="modalProductOption">
            Choose size or option
          </label>
          <select id="modalProductOption"></select>

          <p class="product-modal-price" id="modalProductPrice"></p>

          <label for="modalProductQuantity">Quantity</label>
          <input
            id="modalProductQuantity"
            type="number"
            min="1"
            max="99"
            value="1"
            required
          >

          <button
            type="button"
            id="modalAddToCart"
            class="add-btn"
          >Add to Cart</button>

          <p class="product-modal-note">
            The bakery will confirm availability and final order details.
          </p>
        </div>
      </div>
    </section>
  `;

  document.body.appendChild(modal);
}

function updateModalPrice() {
  if (!selectedProduct) return;

  const optionIndex = Number($('#modalProductOption').value);
  const option = selectedProduct.options[optionIndex];

  if (option) {
    $('#modalProductPrice').textContent = money(option.price);
  }
}

function openProductModal(productId) {
  const product = products.find(item => item.id === productId);

  if (!product) return;

  createProductModal();
  selectedProduct = product;

  const modal = $('#productModal');
  const image = $('#modalProductImage');
  const optionSelect = $('#modalProductOption');

  $('#modalProductCategory').textContent = product.category;
  $('#modalProductName').textContent = product.name;
  $('#modalProductDescription').textContent = product.description;

  image.onerror = () => {
    image.onerror = null;
    image.alt = `Photo unavailable for ${product.name}`;
  };

  image.src = product.image;
  image.alt = product.name;

  optionSelect.innerHTML = product.options.map((option, index) => `
    <option value="${index}">
      ${option.label} — ${money(option.price)}
    </option>
  `).join('');

  $('#modalProductQuantity').value = 1;

  updateModalPrice();

  modal.hidden = false;
  document.body.classList.add('product-modal-open');

  $('#modalAddToCart').focus();
}

function closeProductModal() {
  const modal = $('#productModal');

  if (!modal) return;

  modal.hidden = true;
  document.body.classList.remove('product-modal-open');
  selectedProduct = null;
}

/* Open the product popup when a cake is clicked */
productGrid?.addEventListener('click', event => {
  const button = event.target.closest('[data-view-product]');

  if (!button) return;

  openProductModal(button.dataset.viewProduct);
});

/* Update the price when the customer changes the option */
document.addEventListener('change', event => {
  if (event.target.id === 'modalProductOption') {
    updateModalPrice();
  }
});

/* Add the selected cake and quantity to the cart */
document.addEventListener('click', event => {
  if (event.target.closest('[data-close-product]')) {
    closeProductModal();
    return;
  }

  if (!event.target.closest('#modalAddToCart')) return;

  if (!selectedProduct) return;

  const optionIndex = Number($('#modalProductOption').value);
  const option = selectedProduct.options[optionIndex];
  const quantityInput = $('#modalProductQuantity');
  const quantity = Number(quantityInput.value);

  if (
    !option ||
    !Number.isInteger(quantity) ||
    quantity < 1 ||
    quantity > 99
  ) {
    quantityInput.setCustomValidity(
      'Choose a quantity from 1 to 99.'
    );
    quantityInput.reportValidity();
    quantityInput.setCustomValidity('');
    return;
  }

  const cartId = `${selectedProduct.id}-${optionIndex}`;

  const existing = cart.find(item => item.cartId === cartId);

  if (existing) {
    if (existing.quantity + quantity > 99) {
      alert('You can add up to 99 of the same option.');
      return;
    }

    existing.quantity += quantity;
  } else {
    cart.push({
      cartId,
      id: selectedProduct.id,
      name: selectedProduct.name,
      image: selectedProduct.image,
      optionLabel: option.label,
      price: option.price,
      quantity
    });
  }

  renderCart();
  closeProductModal();
  openCart();
});

/* Escape closes the product popup */
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeProductModal();
    closeCart();
  }
});

createProductModal();

/* =========================================
   OPEN AND CLOSE CART
========================================= */

function openCart() {
  if (!cartSidebar) return;

  cartSidebar.classList.add('open');
  cartSidebar.setAttribute('aria-hidden', 'false');

  $('#cartOverlay')?.classList.add('visible');
  document.body.classList.add('cart-open');
}

function closeCart() {
  if (!cartSidebar) return;

  cartSidebar.classList.remove('open');
  cartSidebar.setAttribute('aria-hidden', 'true');

  $('#cartOverlay')?.classList.remove('visible');
  document.body.classList.remove('cart-open');
}

/* =========================================
   RENDER CART
========================================= */

function renderCart() {
  if (!cartItems) return;

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const countElement = $('#cartCount');
  const totalElement = $('#cartTotal');

  if (countElement) countElement.textContent = count;

  if (totalElement) {
    totalElement.textContent = totalPrice().toFixed(2);
  }

  if (cart.length) {
    cartItems.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      const image = item.image || product?.image || '';

      return `
        <div class="cart-item">

          <img
            class="cart-item-image"
            src="${image}"
            alt="${item.name}"
            loading="lazy"
          >

          <h3>${item.name}</h3>
          <p>${item.optionLabel}</p>
          <p>${money(item.price)} each</p>

          <div class="cart-controls">
            <button
              type="button"
              data-action="decrease"
              data-id="${item.cartId}"
              aria-label="Decrease quantity"
            >−</button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-action="increase"
              data-id="${item.cartId}"
              aria-label="Increase quantity"
            >+</button>

            <button
              type="button"
              data-action="remove"
              data-id="${item.cartId}"
            >Remove</button>
          </div>

          <p>
            Subtotal:
            <strong>${money(item.price * item.quantity)}</strong>
          </p>
        </div>
        <hr>
      `;
    }).join('');
  } else {
    cartItems.innerHTML = `
      <p class="cart-empty">
        Your cart is empty. Add something delicious!
      </p>
    `;
  }

  const checkout = $('#checkoutBtn');

  if (checkout) {
    checkout.disabled = cart.length === 0;
    checkout.textContent = cart.length
      ? 'Order via WhatsApp'
      : 'Your Cart Is Empty';
  }
}

/* =========================================
   CHANGE CART QUANTITY OR REMOVE ITEMS
========================================= */

cartItems?.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');

  if (!button) return;

  const item = cart.find(
    product => product.cartId === button.dataset.id
  );

  if (!item) return;

  if (button.dataset.action === 'increase') {
    if (item.quantity >= 99) {
      alert('You can add up to 99 of the same option.');
      return;
    }

    item.quantity++;
  }

  if (button.dataset.action === 'decrease') {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter(product => product.cartId !== item.cartId);
    }
  }

  if (button.dataset.action === 'remove') {
    cart = cart.filter(product => product.cartId !== item.cartId);
  }

  renderCart();
});

/* =========================================
   CART BUTTONS
========================================= */

/* =========================================
   CART BUTTONS
========================================= */

$('#cartButton')?.addEventListener('click', openCart);
$('#closeCartBtn')?.addEventListener('click', closeCart);
$('#continueShoppingBtn')?.addEventListener('click', closeCart);
$('#cartOverlay')?.addEventListener('click', closeCart);
/* =========================================
   WHATSAPP CHECKOUT
========================================= */

function showOrderForm() {
  if (!cartFooter || !cart.length) return;

  if (!originalCartFooter) {
    originalCartFooter = cartFooter.innerHTML;
  }

  cartFooter.innerHTML = `
    <h3>Complete Your Order</h3>
    <p>Please provide your details so the baker can respond.</p>

    <form id="orderForm">
      <label for="customerName">Full name *</label>
      <input
        id="customerName"
        name="customerName"
        required
        maxlength="100"
        autocomplete="name"
      >

      <label for="customerPhone">Your phone number *</label>
      <input
        id="customerPhone"
        name="customerPhone"
        type="tel"
        required
        maxlength="25"
        autocomplete="tel"
        placeholder="e.g. 0241234567"
      >

      <label for="deliveryLocation">Delivery location *</label>
      <input
        id="deliveryLocation"
        name="deliveryLocation"
        required
        maxlength="200"
        placeholder="Town, area or address"
      >

      <label for="requestedDate">Requested date *</label>
      <input
        id="requestedDate"
        name="requestedDate"
        type="date"
        required
      >

      <label for="orderNotes">Special instructions (optional)</label>
      <textarea
        id="orderNotes"
        name="orderNotes"
        rows="3"
        maxlength="500"
      ></textarea>

      <p><strong>Estimated total: ${money(totalPrice())}</strong></p>

      <p class="order-notice">
        The baker must confirm availability and the final price.
        Payment details will be sent after confirmation.
      </p>

      <button type="submit" class="btn">
        Send Order on WhatsApp
      </button>

      <button type="button" id="backToCart" class="add-btn">
        Back to Cart
      </button>
    </form>
  `;

  const dateInput = $('#requestedDate');
  const now = new Date();

  dateInput.min = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0')
  ].join('-');

  $('#backToCart')?.addEventListener('click', restoreCartFooter);

  $('#orderForm')?.addEventListener('submit', event => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) return;

    const data = new FormData(event.currentTarget);

    const lines = cart.map(item =>
      `- ${item.name} (${item.optionLabel}) x ${item.quantity} = ${money(item.price * item.quantity)}`
    );

    const message = [
      'Hello Addies Bakery! I would like to make an enquiry about placing an order.',
      '',
      'MY ORDER',
      ...lines,
      '',
      `Estimated total: ${money(totalPrice())}`,
      '',
      'CUSTOMER DETAILS',
      `Name: ${String(data.get('customerName')).trim()}`,
      `Phone: ${String(data.get('customerPhone')).trim()}`,
      `Delivery location: ${String(data.get('deliveryLocation')).trim()}`,
      `Requested date: ${data.get('requestedDate')}`,
      `Special instructions: ${String(data.get('orderNotes')).trim() || 'None'}`,
      '',
      'Please confirm availability, delivery arrangements and final price before payment.',
      'I understand this order is not confirmed until you reply.'
    ].join('\n');

    window.location.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}

function restoreCartFooter() {
  if (!cartFooter || !originalCartFooter) return;

  cartFooter.innerHTML = originalCartFooter;
  originalCartFooter = '';

  renderCart();

  $('#checkoutBtn')?.addEventListener('click', showOrderForm);
}

$('#checkoutBtn')?.addEventListener('click', showOrderForm);

/* =========================================
   CUSTOM CAKE REQUEST FORM
========================================= */

const customCakeForm = $('#customCakeForm');

if (customCakeForm) {
  const category = $('#cakeCategory');
  const priceDisplay = $('#customCakePrice');

  const rawFields = $('#rawCakeFields');
  const decoratedFields = $('#decoratedCakeFields');
  const weddingFields = $('#weddingCakeFields');
  const otherFields = $('#otherCakeFields');

  const rawFlavour = $('#cakeFlavour');
  const rawSize = $('#rawCakeSize');
  const decoratedSize = $('#decoratedCakeSize');
  const layers = $('#cakeLayers');
  const weddingTiers = $('#weddingTierChoice');
  const weddingSize = $('#weddingTierSize');

  const rawPrices = {
    'Vanilla': { 5: 60, 6: 100, 8: 160, 10: 190, 12: 250 },
    'Red Velvet': { 5: 60, 6: 100, 8: 160, 10: 190, 12: 250 },
    'Chocolate': { 5: 75, 6: 115, 8: 160, 10: 225, 12: 300 },
    'Fruit': { 5: 75, 6: 115, 8: 160, 10: 225, 12: 300 },
    'Carrot': { 5: 80, 6: 100, 8: 180, 10: 190, 12: 250 },
    'Strawberry': { 5: 75, 6: 115, 8: 180, 10: 225, 12: 300 },
    'Orange': { 5: 60, 6: 100, 8: 150, 10: 190, 12: 250 },
    'Cookies & Cream': { 5: 75, 6: 115, 8: 160, 10: 225, 12: 300 },
    'Biscoff': { 5: 100, 6: 170, 8: 250, 10: 300, 12: 450 }
  };

  const decoratedPrices = {
    4: { 2: 200, 3: 270, 4: 320, 5: 370, 6: 420, 7: 470, 8: 520 },
    5: { 2: 295, 3: 400, 4: 520, 5: 630, 6: 730, 7: 870, 8: 980 },
    6: { 2: 350, 3: 500, 4: 650, 5: 800, 6: 950, 7: 1100, 8: 1250 },
    8: { 2: 400, 3: 550, 4: 700, 5: 850 },
    10: { 2: 500, 3: 650, 4: 800, 5: 950, 6: 1100 },
    12: { 2: 650, 3: 800 }
  };

  const weddingPrices = {
    two: {
      '12 + 8 inches': 2200,
      '10 + 6 inches': 1800,
      '8 + 5 inches': 1500,
      '6 + 4 inches': 1000,
      '5 + 3 inches': 850
    },
    three: {
      '12 + 10 + 8 inches': 2800,
      '10 + 6 + 4 inches': 2000,
      '8 + 5 + 3 inches': 1480
    }
  };

  function setRequired(container, enabled) {
    if (!container) return;

    container.querySelectorAll('select, input, textarea').forEach(field => {
      field.required = enabled;
    });
  }

  function updateCategoryFields() {
    const selected = category.value;

    [
      [rawFields, 'raw'],
      [decoratedFields, 'decorated'],
      [weddingFields, 'wedding'],
      [otherFields, 'other']
    ].forEach(([container, type]) => {
      if (!container) return;

      const active = selected === type;

      container.hidden = !active;
      setRequired(container, active);
    });

    updatePrice();
  }

  function updateWeddingSizes() {
    const tierType = weddingTiers.value;
    const options = weddingPrices[tierType] || {};

    weddingSize.innerHTML =
      '<option value="">Choose size combination</option>';

    Object.entries(options).forEach(([size, price]) => {
      const option = document.createElement('option');

      option.value = size;
      option.textContent = `${size} — GH₵ ${price.toLocaleString()}`;

      weddingSize.appendChild(option);
    });

    updatePrice();
  }

  function updatePrice() {
    let price;
    const type = category.value;

    if (type === 'raw') {
      price = rawPrices[rawFlavour.value]?.[rawSize.value];
    } else if (type === 'decorated') {
      price = decoratedPrices[decoratedSize.value]?.[layers.value];
    } else if (type === 'wedding') {
      price = weddingPrices[weddingTiers.value]?.[weddingSize.value];
    }

    if (Number.isFinite(price)) {
      priceDisplay.textContent =
        `Listed price: GH₵ ${price.toLocaleString()}. Final details must be confirmed by the bakery.`;
    } else if (type === 'other') {
      priceDisplay.textContent = 'Price to be confirmed by the bakery.';
    } else if (type) {
      priceDisplay.textContent =
        'Choose all the required options to check the listed price.';
    } else {
      priceDisplay.textContent =
        'Select a cake type to see available pricing.';
    }
  }

  const dateInput = $('#cakeDate');

  if (dateInput) {
    const today = new Date();

    dateInput.min = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, '0'),
      String(today.getDate()).padStart(2, '0')
    ].join('-');
  }

  category.addEventListener('change', updateCategoryFields);
  rawFlavour.addEventListener('change', updatePrice);
  rawSize.addEventListener('change', updatePrice);
  decoratedSize.addEventListener('change', updatePrice);
  layers.addEventListener('change', updatePrice);
  weddingTiers.addEventListener('change', updateWeddingSizes);
  weddingSize.addEventListener('change', updatePrice);

  updateCategoryFields();

  customCakeForm.addEventListener('submit', event => {
    event.preventDefault();

    if (!customCakeForm.reportValidity()) return;

    const value = selector =>
      $(selector)?.value?.trim() || '';

    const type = value('#cakeCategory');

    let cakeDetails = [];
    let listedPrice = 'Price to be confirmed';

    if (type === 'raw') {
      const price =
        rawPrices[value('#cakeFlavour')]?.[value('#rawCakeSize')];

      cakeDetails = [
        `FLAVOUR: ${value('#cakeFlavour')}`,
        `SIZE: ${value('#rawCakeSize')} inches`
      ];

      if (Number.isFinite(price)) {
        listedPrice = `GH₵ ${price.toLocaleString()}`;
      }
    } else if (type === 'decorated') {
      const price =
        decoratedPrices[value('#decoratedCakeSize')]?.[value('#cakeLayers')];

      cakeDetails = [
        `SIZE: ${value('#decoratedCakeSize')} inches`,
        `LAYERS: ${value('#cakeLayers')}`
      ];

      if (Number.isFinite(price)) {
        listedPrice = `GH₵ ${price.toLocaleString()}`;
      }
    } else if (type === 'wedding') {
      const price =
        weddingPrices[value('#weddingTierChoice')]?.[value('#weddingTierSize')];

      cakeDetails = [
        `TIERS: ${value('#weddingTierChoice') === 'two' ? 'Two-tier' : 'Three-tier'}`,
        `TIER SIZES: ${value('#weddingTierSize')}`
      ];

      if (Number.isFinite(price)) {
        listedPrice = `GH₵ ${price.toLocaleString()}`;
      }
    } else {
      cakeDetails = ['Cake details: Special design — please advise'];
    }

    const message = [
      'Hello Addies Bakery! I would like to request a custom cake.',
      '',
      `OCCASION: ${value('#cakeOccasion')}`,
      `CAKE TYPE: ${type}`,
      ...cakeDetails,
      `LISTED PRICE: ${listedPrice}`,
      `DESIGN: ${value('#cakeDesign')}`,
      `WORDS ON CAKE: ${value('#cakeMessage') || 'Not specified'}`,
      `DATE NEEDED: ${value('#cakeDate')}`,
      `BUDGET: ${value('#cakeBudget') ? 'GH₵ ' + value('#cakeBudget') : 'Please advise'}`,
      '',
      `CUSTOMER NAME: ${value('#cakeCustomerName')}`,
      `PHONE: ${value('#cakeCustomerPhone')}`,
      '',
      'Please confirm availability and the final price before payment. Thank you!'
    ].join('\n');

    window.location.href =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}

/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = $('#menuToggle');
const navLinks = $('#navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');

    menuToggle.textContent = open ? '✕' : '☰';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    });
  });
}

/* =========================================
   LOOPING CUSTOMER REVIEWS
========================================= */

const reviewsTrack = $('#reviewsTrack');

if (reviewsTrack && !reviewsTrack.dataset.loopReady) {
  reviewsTrack.innerHTML += reviewsTrack.innerHTML;
  reviewsTrack.dataset.loopReady = 'true';
  reviewsTrack.classList.add('looping');
}

/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */

const year = $('#currentYear');

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =========================================
   START WEBSITE
========================================= */

displayProducts();
renderCart();

/* =========================================
   SCROLL REVEAL ANIMATIONS
========================================= */

function initialiseScrollReveal() {
  const sections = document.querySelectorAll(
    '#products, #about, #reviews, #contact'
  );

  sections.forEach(section => section.classList.add('reveal'));

  const grid = $('#product-grid');

  function prepareProductCards() {
    if (!grid) return;

    grid.querySelectorAll('.product-card').forEach((card, index) => {
      card.classList.add('reveal');
      card.style.transitionDelay = `${(index % 4) * 100}ms`;
    });
  }

  prepareProductCards();

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
  });

  if (grid) {
    const productObserver = new MutationObserver(() => {
      prepareProductCards();

      grid.querySelectorAll('.reveal:not(.visible)').forEach(card => {
        observer.observe(card);
      });
    });

    productObserver.observe(grid, {
      childList: true
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseScrollReveal);
} else {
  initialiseScrollReveal();
}
