// script.js

// Sample product data (can later come from server)
const products = [
    { id: 1, name: "Fairy Theme Dress", price: 50, img: "./images/products/clothes2.jpg" },
    { id: 2, name: "Wide Leg Jeans", price: 49, img: "./images/products/jeans1.jpg" },
    { id: 3, name: "Coral Necklace", price: 35, img: "./images/products/jewel1.jpg" },
    { id: 4, name: "Butterfly Heels", price: 50, img: "./images/products/heels1.jpg" }
];

// Function to display products dynamically
function renderProducts() {
    const productContainer = document.querySelector('.row');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'col-4';
        productDiv.innerHTML = `
            <img src="${product.img}">
            <h4>${product.name}</h4>
            <div class="rating">
                &#9733;&#9733;&#9733;&#9733;&#9734;
            </div>
            <p>$${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

// Cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart function
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
// Update cart item count from localStorage
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = `(${cart.length})`; // Display the number of items in the cart
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', updateCartCount);
console.log(localStorage.getItem('cart'));
// Function to apply a promo code


// Display the order summary on the confirmation page
function displayOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsDiv = document.getElementById('order-items');
    const orderTotalDiv = document.getElementById('order-total');
    let total = 0;

    orderItemsDiv.innerHTML = cart.map(item => `
        <div class="order-item">
            <p>${item.name} - $${item.price}</p>
        </div>
    `).join('');

    total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    orderTotalDiv.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
}

document.addEventListener('DOMContentLoaded', displayOrderSummary);
window.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginLogoutLink = document.getElementById('login-logout-link');
    const accountLink = document.getElementById('account-link');

    if (user) {
        loginLogoutLink.textContent = 'Logout';
        loginLogoutLink.onclick = function() {
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        };
        accountLink.href = 'profile.html'; // Link to profile page if logged in
    } else {
        loginLogoutLink.textContent = 'Login';
        loginLogoutLink.href = 'login.html';
        accountLink.href = 'login.html'; // Redirect to login page if not logged in
    }
});




