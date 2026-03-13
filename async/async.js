const userCardTemplate = document.getElementById("user-card-template");
const userList = document.getElementById("user-list");
const stat = document.getElementById("status");
const getAllCardBtn = document.getElementById("get-all-card-btn");
const deleteAllCardBtn = document.getElementById("delete-all-card-btn");

async function fetchUsers() {
  try {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      return JSON.parse(storedUsers);
    }

    stat.textContent = "Загрузка данных...";
    const response = await fetch("users.json");

    if (!response.ok) {
      throw new Error("Не удалось загрузить файл users.json");
    }

    const data = await response.json();
    setTimeout(() => {
      localStorage.setItem("users", JSON.stringify(data.users));
      return data.users;
    }, 2000);
  } catch (error) {
    stat.textContent = `Ошибка: ${error.message}`;
    console.error("Ошибка загрузки данных:", error);
    return null;
  }
}

async function initUsers() {
  const users = await fetchUsers();
  if (users) {
    renderUsers(users);
  }
}

function renderUsers(users) {
  userList.innerHTML = "";
  if (users.length === 0) {
    userList.innerHTML = "<p>Нет пользователей</p>";
    return;
  }
  users.forEach((user) => {
    const userClone = userCardTemplate.content.cloneNode(true);
    userClone.querySelector(".user-img").src = `/images/${user.img}.png`;
    userClone.querySelector(".user-id").textContent = `ID: ${user.id}`;
    userClone.querySelector(".user-name").textContent = `Имя: ${user.name}`;
    userClone.querySelector(".user-surname").textContent = `Фамилия: ${user.surname}`;
    userClone.querySelector(".user-email").textContent = `Почта: ${user.email}`;
    userClone.querySelector(".user-age").textContent = `Возраст: ${user.age} лет`;
    const deleteBtn = userClone.querySelector(".delete-one-card-btn");
    deleteBtn.dataset.userId = user.id;
    deleteBtn.addEventListener("click", handleDeleteUser);
    userList.appendChild(userClone);
  });
}

function handleDeleteUser(event) {
  const userId = parseInt(event.target.dataset.userId);
  const storedUsers = JSON.parse(localStorage.getItem("users"));
  const updatedUsers = storedUsers.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
  renderUsers(updatedUsers);
}

function handleDeleteAllUsers() {
  localStorage.removeItem("users");
  renderUsers([]);
}

async function handleGetAllUsers() {
  stat.textContent = "Перезагрузка данных...";
  const users = await fetchUsers();

  if (users) {
    renderUsers(users);
    alert("Все пользователи уже отображены!");
  }
}

getAllCardBtn.addEventListener("click", handleGetAllUsers);
deleteAllCardBtn.addEventListener("click", handleDeleteAllUsers);

initUsers();