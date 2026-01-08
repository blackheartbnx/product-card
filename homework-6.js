// Домашнее задание № 6

// 3. Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее.
// Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной.

const personalData = {
    name: "Адам",
    lastname: "Исаев",
    work: "Программист",
    email: "nagibator228@yandex.ru",
    age: 24,
    country: "Россия",
    city: "Санкт-Петербург",
    relationshipStatus: "Холост"
}

// 4. Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). 
// Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. 
// Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const carData = {
    Make: "Audi",
    model: "A8",
    yearOfManufacture: "2018",
    color: "Чёрный",
    boxType: "Автомат"
}

carData.owner = personalData

// 5. Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. 
// Она проверяет, есть ли в объекте свойство "максимальная скорость", 
// если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)


function availabilityOfMaxSpeed(obj) {
    if (!Object.hasOwn(obj, "maxSpeed")) {
        obj.maxSpeed = 250
    }
}

availabilityOfMaxSpeed(carData)

// 6. Написать функцию, которая получает первым аргументом  — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function outputObjKeyValue(obj, key) {
    if (Object.hasOwn(obj, key)) {
        console.log(obj[key])
    } else {
        console.log("Такого свойства нет")
    }
}

outputObjKeyValue(carData, "color")

// 7. Создать массив, который содержит названия продуктов (просто строки)

const products = ["апельсины", "бананы", "яблоки", "персики"]

// 8. Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг).
// После, используя известный нам метод массив, добавить еще одну книгу в конец списка.
// Можете заменить книги на фильмы, или другую сущность, идею вы поняли.

const gameList = [
    {
        name: "Tekken 6",
        author: "Harada",
        releaseDate: 2007,
        genre: "fighting"
    },
    {
        name: "Tekken 7",
        author: "Harada",
        releaseDate: 2017,
        genre: "fighting"
    },
    {
        name: "Tekken 8",
        author: "Harada",
        releaseDate: 2024,
        genre: "fighting"
    }
];

gameList.push({
    name: "Mortal Kombat Komplete Edition",
    author: "Ed Boon",
    releaseDate: 2011,
    genre: "fighting"
});

// 9. Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее).
// (Если используете другую, свою сущность - импровизируйте). 
// С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один.

const mortalKombatCollection = [
    {
        name: "Mortal Kombat X",
        author: "Ed Boon",
        releaseDate: 2015,
        genre: "fighting"
    },
    {
        name: "Mortal Kombat 11",
        author: "Ed Boon",
        releaseDate: 2019,
        genre: "fighting"
    },
    {
        name: "Mortal Kombat 1",
        author: "Ed Boon",
        releaseDate: 2023,
        genre: "fighting"
    }
];

const fullList = [...gameList, ...mortalKombatCollection]

// 10. Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. 
// Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), 
// устанавливаем true или false. 
// Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).

function addRareProperty(array) {
    array.map((item) => {
        item.releaseDate > 2000 ? item.isRare = true : item.isRare = false
    }
}

addRareProperty(fullList)

console.log(fullList)