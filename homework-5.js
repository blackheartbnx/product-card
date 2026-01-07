// Домашнее задание № 5

function outputCityTemperature(city, temp) {
    console.log(`Сейчас в ${city} температура  — ${temp} градусов по Цельсию`)
}

outputCityTemperature("Москве", 10)

const SPEEDOFLIGHT = 1079252848.8
function compareLightSpeed(speed) {
    if (speed > SPEEDOFLIGHT) {
        console.log("Сверхсветовая скорость")

    } else if (speed < SPEEDOFLIGHT) {
        console.log("Субсветовая  скорость")

    } else {
        console.log("Скорость света")
    }
}
compareLightSpeed(2079252848)
compareLightSpeed(100071488)
compareLightSpeed(1079252848.8)

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