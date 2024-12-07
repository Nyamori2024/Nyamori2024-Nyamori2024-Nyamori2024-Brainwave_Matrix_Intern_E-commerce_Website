let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalCountElement = document.getElementById('total-count');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsContainer.innerHTML = ''; // Clear previous items
    let totalCount = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x <span class="qty">${item.qty}</span></p>
                <button class="increment-btn" data-name="${item.name}">+</button>
                <button class="decrement-btn" data-name="${item.name}">-</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);

        totalCount += item.qty;
        totalPrice += item.price * item.qty;
    });

    totalCountElement.textContent = totalCount;
    totalPriceElement.textContent = totalPrice.toFixed(2);

    // Add event listeners for increment and decrement buttons
    const incrementButtons = document.querySelectorAll('.increment-btn');
    incrementButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-name');
            const product = cart.find(item => item.name === productName);
            if (product) {
                product.qty += 1; // Increment quantity
                localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
                displayCartItems(); // Refresh cart display
            }
        });
    });

    const decrementButtons = document.querySelectorAll('.decrement-btn');
    decrementButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productName = e.target.getAttribute('data-name');
            const product = cart.find(item => item.name === productName);
            if (product) {
                if (product.qty > 1) {
                    product.qty -= 1; // Decrement quantity
                } else {
                    cart = cart.filter(item => item.name !== productName); // Remove item if qty is 0
                }
                localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
                displayCartItems(); // Refresh cart display
            }
        });
    });
}

// Display cart items on page load
window.onload = displayCartItems;