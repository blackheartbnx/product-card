// Домашнее задание № 5

function consoleOutput(city, temp) {
    console.log(`Сейчас в ${city} температура  — ${temp} градусов по Цельсию`)
}

consoleOutput("Москве", 10)

const speedOfLight = 1079252848.8
function speedChecker(speed) {
    if (speed > speedOfLight) {
        console.log("Сверхсветовая скорость")

    } else if (speed < speedOfLight) {
        console.log("Субсветовая  скорость")

    } else {
        console.log("Скорость света")
    }
}
speedChecker(2079252848)
speedChecker(100071488)
speedChecker(1079252848.8)

let product = "Боксерские перчатки"
let price = 20
function buyProduct(budget) {
    if (budget > price) {
        console.log("Боксёрские перчатки приобретены. Спасибо за покупку!")
    } else if (budget < price) {
        const diff = price - budget
        console.log(`Вам не хватает ${diff}$, пополните баланс`)
    }
}
buyProduct(21)
buyProduct(19)

function checkAge(age) { }
const character = "Jack"
const power = "fire"
const gender = "male"