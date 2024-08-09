

document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            // Perform login logic here (e.g., authentication against a database)
            alert(`Logged in with email: ${email}`);
            // Redirect to menu page or dashboard after successful login
        });
    }

    
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            // Perform signup logic here (e.g., saving user details in a database)
            alert(`Signed up with email: ${email}`);
            // Redirect to login page or directly log the user in after successful signup
        });
    }

    
    const dishes = document.querySelectorAll('.dish button');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
    };

    dishes.forEach(button => {
        button.addEventListener('click', () => {
            const dishId = button.parentElement.id;
            const dishName = button.parentElement.querySelector('h3').innerText;
            const dishPrice = button.parentElement.querySelector('h5').innerText;

            // Add dish to cart
            const dish = { id: dishId, name: dishName, price: dishPrice };
            cart.push(dish);
            updateCart();
        });
    });
});
