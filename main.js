import "./homework-4.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import { Modal } from "./homework-10/Modal.js";
import { Form } from "./homework-10/Form.js";
import { Car, GybridCar } from "./homework-10/Cars.js";

// Покраска всех карточек

const productCards = document.querySelectorAll(".card-container");
const changeColorAllCardButton = document.querySelector(
  "#change-color-all-card",
);
const greenColorHash = "#00FF00";
const blueColorHash = "#0000FF";

changeColorAllCardButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = greenColorHash));
});

// Покраска первой карточки

const firstProductCard = document.querySelector(".card-container");
const changeColorFirstCardButton = document.querySelector(
  "#change-color-first-card",
);

changeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

// Открыть google

const openGoogleButton = document.querySelector("#open-google");

openGoogleButton.addEventListener("click", openGoogle);

function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open("https://google.com");
  } else {
    return;
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputLog("ДЗ №4"));

function outputLog(message) {
  alert(message);
  console.log(message);
}

// 10 ДЗ. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами).

const audi = new Car("audi", "2025", "120000");
audi.buy();

const bmw = new DieselCar("bmw", "2018", "75000", "дизелем");
bmw.buy();
bmw.refuel();
