// Example of sending a POST request for checkout
const checkout = (cartItems) => {
    const orderData = {
      cartItems: cartItems,   // Send the cart items
      totalPrice: calculateTotal(cartItems) // Calculate total order price
    };
  
    fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData) // Send the order data as JSON
    })
      .then(response => response.json())
      .then(data => {
        console.log('Order placed:', data);
        // Handle successful checkout (e.g., show confirmation, clear cart, etc.)
      })
      .catch(error => console.error('Error during checkout:', error));
  };
  