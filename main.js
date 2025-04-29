// Example to fetch products from the backend
fetch('http://localhost:5000/api/products')  // URL to the backend API that returns products
  .then(response => response.json())        // Parse the response as JSON
  .then(data => {
    // Use the fetched data to populate your product page
    console.log(data); // Logs the fetched products
    // You can update the DOM to display the products here
  })
  .catch(error => console.error('Error fetching products:', error));
