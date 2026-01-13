let user = undefined

// Уровень 1
/* 4. К Форме, которая прикреплена в футере - добавить логику: email должен соответствовать стандартам(добавить валидацию), 
если он не заполнен - форма не отправляется.Кнопка "Подписаться" и есть "отправкой формы", 
при нажатии на которую мы будем выводить консоль лог в виде объекта: { email: 'введенная почта' } */

const emailForm = document.querySelector('#email-form')
emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries());
    console.log(data)
})

/* 5. Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed". 
Логика такая: при нажатии на кнопку у нас открывается модальное окно путем добавления modal-showed к div с классом modal.
Не забываем добавить кнопку для закрытия модалки (крестик в углу).  
Важные правила создания модалки:
1) Задний фон должен быть затемнён, но не полностью черный (Создаем класс overlay, который будет затемнять всю страницу)
2) Модальное окно находиться ровно по центру страницы, независимо от масштаба

6. Создать форму для регистрации внутри модального окна.
Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля. Используйте <label> для того,
что бы указать пользователю, какое поле за что отвечает. Также важно использовать placeholder
(обо всем этом можно будет почитать в документации в конце поста) Разрешается добавить поля на ваше усмотрение. 
Все поля должны иметь валидацию. 
Если пользователь ввел два разных пароля или форма невалидна (используем метод checkValidity()) - мы должны предупредить его о том,
что регистрация отклонена. Если регистрация успешна - выводим значения формы в лог, как в задании №4.
Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()).
Также создайте внешнюю переменную user и присвойте ей этот объект. После успешной регистрации - модалка должны закрыться. 

7. Добавить к пулл-реквесту видео с работой форм, модального окна и сверстанного футера. */

const registrationForm = document.querySelector('#regForm')
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
        registrationForm.innerHTML = 'Регистрация отклонена! Форма заполнена некорректно.';
        return;
    }
    const formData = new FormData(form);
    const formValue = Object.fromEntries(formData.entries());
    if (formValue.password !== formValue.confirmPassword) {
        registrationForm.innerHTML = 'Регистрация отклонена! Пароли не совпадают.';
        return;
    }
    user = formValue;
    user.createdOn = new Date()
    console.log(user)
})

const authBtn = document.querySelector('.auth-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const loginForm = document.getElementById('loginForm');
const messageEl = document.getElementById('message');

authBtn.addEventListener('click', () => {
    modal.classList.add('modal-showed');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal-showed');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    if (login === user.login && password === user.password) {
        const currentUser = user;
        currentUser.lastLogin = new Date()
        messageEl.style.color = 'green';
        messageEl.textContent = 'Успешный вход!';
    } else {
        messageEl.style.color = 'red';
        messageEl.textContent = 'Неверный логин или пароль';
    }
});