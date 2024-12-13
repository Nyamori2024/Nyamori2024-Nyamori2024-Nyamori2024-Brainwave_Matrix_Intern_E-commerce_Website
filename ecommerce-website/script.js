let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fetch products from the Fake Store API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display products on the page
function displayProducts(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="buy-btn" data-name="${product.title}" data-price="${product.price}" data-image="${product.image}">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });

    // Add event listeners to the newly created buttons
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-name');
            const productPrice = parseFloat(e.target.getAttribute('data-price'));
            const productImage = e.target.getAttribute('data-image');

            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.qty += 1; // Increment quantity
            } else {
                cart.push({ name: productName, price: productPrice, image: productImage, qty: 1 });
            }
            showSnackbar(`${productName} has been added to your cart!`);
            updateCartCount();

            // Store cart in local storage
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
}

// Update cart count in the navigation
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.qty, 0);
}

// Display cart items in the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = ''; // Clear the cart items container
    let totalPrice = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.qty}</p>
                <p>Total: $${(item.price * item.qty).toFixed(2)}</p>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        totalPrice += item.price * item.qty;
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

// Dark Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.product-card').forEach(card => {
        card.classList.toggle('dark-mode');
    });
    document.querySelector('footer').classList.toggle('dark-mode');
});

// Menu toggle for mobile view
const menuToggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Show Snackbar
function showSnackbar(message) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.className = 'show';
    // After 3 seconds, remove the "show" class
    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000);
}

// Fetch products on page load
window.onload = fetchProducts;

// Display cart items on the cart page load
if (window.location.pathname.includes('checkout.html')) {
    displayCartItems();
}
