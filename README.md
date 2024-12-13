# E-Commerce Shopping Cart

## Overview
This project is an e-commerce website with a shopping cart feature. Users can browse products fetched from the Fake Store API, add them to their cart, and see the cart contents persist across different pages and sessions using `localStorage`. The cart count is dynamically updated based on the number of items added.

## Features
- **Product Display:** Products are fetched dynamically from the Fake Store API and displayed with their name, price, and image.
- **Add to Cart:** Users can add products to the cart. The quantity of products in the cart is updated each time an item is added.
- **Persistent Cart:** The cart is saved in the browser's `localStorage`, ensuring that the cart persists even after the page is reloaded or revisited.
- **Dynamic Cart Count:** The cart count in the navigation bar is updated dynamically as products are added.
- **Snackbar Notifications**: When a product is added to the cart, a snackbar notification will appear, confirming the action in a visually appealing way.

## Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/Nyamori2024/Nyamori2024-Nyamori2024-Nyamori2024-Brainwave_Matrix_Intern_E-commerce_Website.git
    ```

2. Open `index.html` in your browser to view the e-commerce site.

## Usage

1. **Browsing Products:**
   - The homepage displays a list of products fetched dynamically from the Fake Store API with their name, price, and image.
   - Each product has an "Add to Cart" button. Click on the button to add a product to your cart.

2. **Viewing Cart:**
   - The cart icon in the navigation bar will show the number of items in the cart. The cart count updates each time an item is added.
   
3. **Persistent Cart:**
   - Even after refreshing the page or reopening the website, the cart's contents will remain as long as the `localStorage` is not cleared.

4. **Snackbar Notifications

    -After adding a product to the cart, a vibrant snackbar notification will appear at the bottom of the screen. This gives users feedback that the product has been 
     successfully added to the cart.
     

## Technologies Used
- **HTML:** Structure of the website.
- **CSS:** Styling the website (tailored using Tailwind CSS, if applicable).
- **JavaScript:** Managing product listings, cart functionality, and localStorage for persistence.
- **Fake Store API:** A public API used to fetch product data dynamically.

## Files Structure
- `index.html`: The main homepage of the e-commerce website.
- `checkout.html`: The checkout page where users can review their cart and proceed to checkout.
- `script.js`: JavaScript file that handles product display, adding items to the cart, and updating the cart.
- `style.css`: (Optional) Custom styles for the website (if not using Tailwind CSS).

## LocalStorage Details
- The cart is saved in the browser's `localStorage`, meaning it will persist across page refreshes and browser sessions.
- Cart data includes the product's name, price, image, and quantity.

## Future Enhancements
- Implement checkout functionality where users can view cart details and proceed to payment.
- Add user authentication (e.g., login and register) to allow users to have personalized carts.
- Integrate more APIs for a wider range of products.
- Add more cart functionalities like removing products or changing the product quantity from the cart.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
