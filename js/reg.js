document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращает отправку формы

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "";

    // Проверка на совпадение паролей
    if (password !== confirmPassword) {
        errorMessage.textContent = "Пароли не совпадают.";
        return;
    }

    // Проверка длины пароля
    if (password.length < 6) {
        errorMessage.textContent = "Пароль должен быть не менее 6 символов.";
        return;
    }

    // Сообщение об успешной регистрации
    alert(`Регистрация успешна!\nИмя пользователя: ${username}\nЭлектронная почта: ${email}`);
    
    // Перенаправление на update.html
    window.location.href = "update.html";
});
