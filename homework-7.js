import { commentsInSocialNetworks } from "./comments.js";

// Домашнее задание № 7

// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNumbers = nums.filter(num => num >= 5);
console.log(filteredNumbers)

/* Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), 
проверить, есть ли в массиве какая-то определенная сущность */

const movies = [
    "Мстители",
    "Мстители: Эра Альтрона",
    "Мстители: Война Бесконечности",
    "Мстители: Финал",
    "Мстители: Секретные войны"
];

function isEntityInArray(array, anyEntity) {
    return array.includes(anyEntity);
}
console.log(isEntityInArray(movies, "Мстители"))

/* Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать").
Два вышеуказанных массива с помощью этой функции перевернуть */

function reverseArray(array) {
    return array.reverse()
}
console.log(reverseArray(movies))
console.log(reverseArray(nums))


/* 6. Сделать константу экспортируемой, добавив перед "const" ключевое слово "export".
Таким образом мы сможем внедрить переменную из comments.js в homework-7.js и работать с ней.
Когда мы введем название переменной, нам предложит импортировать ее - так и делаем. */

// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

function getCommentsWithComEmail(commentsArray) {
    return commentsArray.filter(comment => comment.email.includes('.com'));
}
console.log(getCommentsWithComEmail(commentsInSocialNetworks))

/* 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, 
имели postId: 1 */

function getCommentsWithUpdatedPostId(commentsArray) {
    return commentsArray.map(comment => ({
        ...comment,
        postId: comment.id <= 5 ? 2 : 1
    }));
}
console.log(getCommentsWithUpdatedPostId(commentsInSocialNetworks));

// 9. Перебрать массив, что бы объекты состояли только из айди и имени

function getIdNameArray(commentsArray) {
    return commentsArray.map(({ id, name }) => ({ id, name }));
}

console.log(getIdNameArray(commentsInSocialNetworks));

/* 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false. */

function checkCommentsAndReturnArray(commentsArray) {
    return commentsArray.map(comment => ({
        ...comment,
        isInvalid: comment.body.length > 180
    }));
}

console.log(checkCommentsAndReturnArray(commentsInSocialNetworks));

// Уровень 3:

// 11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map

function outputEmailsArray(commentsArray) {
    return commentsArray.reduce((emails, comment) => [...emails, comment.email], []);
}
console.log(outputEmailsArray(commentsInSocialNetworks));

function outputEmailsArray(commentsArray) {
    return commentsArray.map(comment => comment.email);
}

console.log(outputEmailsArray(commentsInSocialNetworks));

// 12. Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

// toString()

function convertEmailsToStringAndReturnArray(commentsArray) {
    return commentsArray.map(comment => comment.email).toString();
}

console.log(convertEmailsToStringAndReturnArray(commentsInSocialNetworks));

// join()

function convertEmailsToStringWithJoinAndReturnArray(commentsArray) {
    return commentsArray.map(comment => comment.email).join(', ');
}

console.log(convertEmailsToStringWithJoinAndReturnArray(commentsInSocialNetworks));