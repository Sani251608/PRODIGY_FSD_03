// cart.js

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<h3>Your cart is empty!</h3>';
        cartTotalContainer.innerHTML = '';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'col-4';
        itemDiv.innerHTML = `
            <img src="${item.img}">
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <button class="btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
    });

    cartTotalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    renderCart();
}

// When page loads
document.addEventListener('DOMContentLoaded', renderCart);
function applyPromoCode() {
    const promoCode = document.getElementById('promo-code').value;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let discount = 0;

    if (promoCode === 'DISCOUNT10') {
        discount = 0.1; // 10% discount
    }

    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    const discountedTotal = total - (total * discount);
    document.getElementById('total-price').innerHTML = `<p>Total after discount: $${discountedTotal.toFixed(2)}</p>`;
}
// Add item to the cart
function addToCart(productId, quantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { productId, quantity }; // Sample product, you can expand with actual data
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    updateCartCount();
}

// Update cart count in the header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.querySelector('.cart-count').textContent = cart.length;
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
// Function to add item to cart
function addToCart(productId, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex > -1) {
        // Update quantity if product already exists
        cart[productIndex].quantity += quantity;
    } else {
        // Add new product to the cart
        cart.push({ productId, quantity });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(cart);  // Log cart to see if products are added correctly
}
