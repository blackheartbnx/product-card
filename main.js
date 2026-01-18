import "./homework-4.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import { Modal } from "./homework-10/Modal.js";
import { Form } from "./homework-10/Form.js";
import { Car, DieselCar } from "./homework-10/Car.js";

// Покраска всех карточек

const productCards = document.querySelectorAll(".card-container");
const AllCardsColorChangeButton = document.querySelector(
  "#change-color-all-cards",
);
const greenColorHash = "#00FF00";
const blueColorHash = "#0000FF";

AllCardsColorChangeButton.addEventListener("click", () => {
  productCards.forEach((card) => (card.style.backgroundColor = greenColorHash));
});

// Покраска первой карточки

const firstProductCard = document.querySelector(".card-container");
const changeColorFirstCardButton = document.querySelector(
  "#change-color-first-cards",
);

changeColorFirstCardButton.addEventListener("click", () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

// Открыть google

const googleOpenButton = document.querySelector("#open-google");

googleOpenButton.addEventListener("click", openGoogle);

function openGoogle() {
  if (confirm("Вы действительно хотите открыть Google?")) {
    window.open("https://google.com");
  }
}

// Вывод консоль лог

const outputLogButton = document.querySelector("#output-console-log");

outputLogButton.addEventListener("click", () => outputLog("ДЗ №4"));

function outputLog(message) {
  alert(message);
  console.log(message);
}
// ДЗ 10

let user = null;

function initializeAuthModal() {
  const authModal = new Modal("modal");
  const modalElements = {
    openButton: document.querySelector("#openModalBtn"),
    checkButton: document.querySelector("#checkModalBtn"),
    closeButton: document.querySelector("#closeModalBtn")
  };
  
  modalElements.openButton.addEventListener("click", () => authModal.open());
  modalElements.checkButton.addEventListener("click", () => {
    console.log("Модальное окно открыто:", authModal.isOpen());
  });
  modalElements.closeButton.addEventListener("click", () => authModal.close());
  
  return { modal: authModal, elements: modalElements };
}

const { modal: authModal } = initializeAuthModal();

function initializeRegistrationForm(modal) {
  const regForm = new Form("regForm");
  
  regForm.form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!regForm.isValid()) return;
    
    const formData = regForm.getValues();
    if (formData.password !== formData.confirmPassword) {
      console.log("Регистрация отклонена!");
      return;
    }

    user = formData;
    user.createdOn = new Date();
    console.log("Пользователь зарегистрирован:", user);

    regForm.reset();
    const closeModalBtn = document.querySelector("#closeModalBtn");
    closeModalBtn.addEventListener("click", () => modal.close());
  });
  
  return regForm;
}
const regForm = initializeRegistrationForm(authModal);

const loginForm = new Form("loginForm");
const messageEl = document.getElementById("message");

function initializeLoginForm() {
  loginForm.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!loginForm.isValid()) return;
    const { login, password } = loginForm.getValues();
    if (user && login === user.login && password === user.password) {
      user.lastLogin = new Date();
      messageEl.style.color = "green";
      messageEl.textContent = "Успешный вход!";
    } else {
      messageEl.style.color = "red";
      messageEl.textContent = "Неверный логин или пароль";
    }
  });
  
  return loginForm;
}

const initializedLoginForm = initializeLoginForm();

const audi = new Car("audi", "2018", "70000");
audi.buy();

const bmw = new DieselCar("bmw", "2020", "50000", "дизелем");
bmw.buy();
bmw.refuel();
