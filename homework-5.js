// Домашнее задание № 5

function outputConsole(city, temp) {
    console.log(`Сейчас в ${city} температура  — ${temp} градусов по Цельсию`)
}

outputConsole("Москве", 10)

const speed_of_light = 1079252848.8
function checkSpeed(speed) {
    if (speed > speed_of_light) {
        console.log("Сверхсветовая скорость")

    } else if (speed < speed_of_light) {
        console.log("Субсветовая  скорость")

    } else {
        console.log("Скорость света")
    }
}
checkSpeed(2079252848)
checkSpeed(100071488)
checkSpeed(1079252848.8)

let product = "Боксерские перчатки"
let price = 20
function purchaseProduct(budget) {
    if (budget > price) {
        console.log("Боксёрские перчатки приобретены. Спасибо за покупку!")
    } else if (budget < price) {
        const diff = price - budget
        console.log(`Вам не хватает ${diff}$, пополните баланс`)
    }
}
purchaseProduct(21)
purchaseProduct(19)

function checkAge(age) { }
const character = "Jack"
const power = "fire"
const gender = "male"