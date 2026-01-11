import { productCards } from "./product-cards.js"

// 3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.  (Посмотрите сразу задание 5)

const cardContainers = document.querySelectorAll('.card-container');

const displaySelectedProductCards = (productCards) => {
    cardContainers.forEach((card, index) => {
        if (index < productCards.length) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
// 4. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productCardsNameList = productCards.reduce((sum, productCard) => [...sum, productCard.name], [])

const productCardNames = productCardsNameList.join(';')

console.log(productCardNames)

// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const array = productCards.reduce((result, productCard) => [...result, { [productCard.name]: productCard.description }], [])

console.log(array)

// 6. Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)
const askCardsCount = () => {
    const input = prompt('Сколько карточек отобразить? От 1 до 5');
    const count = Number(input);
    if (count >= 1 && count <= 5) {
        const selectedProductCards = productCards.slice(0, count);
        displaySelectedProductCards(selectedProductCards)
    }
}

askCardsCount()