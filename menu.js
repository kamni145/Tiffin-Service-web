document.getElementById('searchButton').addEventListener('click', function() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card'); // Assuming your dish cards have a class of 'card'

    let found = false;

    cards.forEach(card => {
        const dishName = card.querySelector('.dish-name').innerText.toLowerCase(); // Assuming the dish name is in an element with class 'dish-name'
        
        if (dishName.includes(searchQuery)) {
            card.scrollIntoView({ behavior: 'smooth' });
            card.style.border = '2px solid #ff9800'; // Highlight the card (optional)
            setTimeout(() => {
                card.style.border = ''; // Remove highlight after a short period (optional)
            }, 2000);
            found = true;
            return;
        }
    });

    if (!found) {
        alert('Dish not found!');
    }
});
