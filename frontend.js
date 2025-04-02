const express = require('express')
const cors = require('cors')

const app = express();
const PORT = 7777;

const promotions = [{}] // сюда акції які можна генерувати



app.get('/promotions', (req, res) => {
    res.json(promotions);
});

app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
}); // bind

function fetchPromotions() {
    fetch('http://localhost:3000/promotions')
        .then(response => response.json())
        .then(promotions => {
            const promotionsContainer = document.getElementById('promotionsContainer');
            promotionsContainer.innerHTML = '';

            promotions.forEach(promotion => {
                const promotionElement = document.createElement('div');
                promotionElement.textContent = promotion.description;
                promotionsContainer.appendChild(promotionElement);
            });
        })
        .catch(error => {
            console.error('Помилка при отриманні акцій:', error);
        });
}