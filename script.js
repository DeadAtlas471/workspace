// JavaScript for Bookstore

// Function to handle adding books to cart
function addToCart(event) {
    const button = event.target;
    const bookCard = button.closest('.book-card');
    const bookTitle = bookCard.querySelector('.book-title').textContent;
    const bookPrice = bookCard.querySelector('.book-price').textContent;

    // Simple alert for now, can be expanded to actual cart functionality
    alert(`Added "${bookTitle}" to cart for ${bookPrice}!`);
}

// Add event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-book-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
});