// Массив с имитационными комментариями
const commentsData = [
    {
        avatar: "icons/images (1).jpg",
        username: "John Titor",
        comment: "УРА!!! ОБНОВЛЕНИЕ!!!!",
        likes: 39,
        dislikes: 3
    },
    {
        avatar: "img-PCjqfmmFTDgRBWUf9uI2y.jpeg",
        username: "rekuiemuu",
        comment: "Рада, что вам нравится!",
        likes: 179,
        dislikes: 5
    },
    {
        avatar: "icons/Безымяннвый.png",
        username: "митч",
        comment: "обновления игры про Мирэа выходят чаще чем обновления тф2. игра года, безусловно ",
        likes: 112,
        dislikes: 0
    },
    {
        avatar: "icons/photo_2024-11-16_08-54-32.jpg",
        username: "b7bl1k4t",
        comment: "Возможно, игра — это the friends we made along the way...",
        likes: 10,
        dislikes: 0
    },
    {
        avatar: "icons/photo_2024-11-16_08-54-36.jpg", // Используйте относительные пути
        username: "wallrat1",
        comment: "Я исчадие, что породила бездна абсурда...Мяумяумяу",
        likes: 5,
        dislikes: 24
    },
    {
        avatar: "icons/1.jpg", // Используйте относительные пути
        username: "mimim",
        comment: "а будет на TEMPLE OS?",
        likes: 50,
        dislikes: 22
    },

];

function displayComments(commentListId, commentsData) {
    const commentList = document.getElementById(commentListId);
    commentList.innerHTML = ''; // Очистим список комментариев перед добавлением новых

    commentsData.forEach((comment, index) => {
        const li = document.createElement('li');
        li.classList.add('comment-item');

        li.innerHTML = `
        <div class="comment-avatar-wrapper">
            <div class="comment-avatar">
                <img src="${comment.avatar}" alt="${comment.username}" />
            </div>
            <div class="username">${comment.username}</div>
        </div>
        <div class="comment-content">
            <div class="comment-body">
                ${comment.comment}
            </div>
            <div class="comment-actions">
                <button class="like-btn" onclick="toggleLike(${index})">❤️ ${comment.likes}</button>
                <button class="dislike-btn" onclick="toggleDislike(${index})">👎 ${comment.dislikes}</button>
                <button class="share-btn" onclick="shareComment(${index})">📤 Поделиться</button>
                <button class="report-btn" onclick="reportComment(${index})">🚩 Пожаловаться</button>
            </div>
        </div>
    `;

        commentList.appendChild(li);
    });
}

// Функция для переключения видимости комментариев
function toggleComments(toggleId, commentsId, commentListId, commentsData) {
    const toggleCommentsLink = document.getElementById(toggleId);
    const commentsSection = document.getElementById(commentsId);
    const addCommentForm = document.getElementById('add-comment'); // Форма добавления комментария

    toggleCommentsLink.addEventListener('click', function () {
        if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
            commentsSection.style.display = 'block'; // Показываем комментарии
            addCommentForm.style.display = 'block'; // Показываем форму добавления комментария
            displayComments(commentListId, commentsData); // Отображаем комментарии
            toggleCommentsLink.textContent = 'Скрыть комментарии »';
        } else {
            commentsSection.style.display = 'none'; // Скрываем комментарии
            addCommentForm.style.display = 'none'; // Скрываем форму добавления комментария
            toggleCommentsLink.textContent = 'Комментарии »';
        }
    });
}

// Функции для действий с комментариями
function toggleLike(index) {
    commentsData[index].likes += 1;
    displayComments('comment-list-1', commentsData); // Обновляем список
}

function toggleDislike(index) {
    commentsData[index].dislikes += 1;
    displayComments('comment-list-1', commentsData); // Обновляем список
}

function shareComment(index) {
    alert(`Ссылка на комментарий ${index + 1} скопирована в буфер обмена!`);
}

function reportComment(index) {
    alert(`Комментарий ${index + 1} отмечен как жалоба.`);
}

// Функция для добавления нового комментария
function addComment(commentListId) {
    const usernameInput = document.getElementById('username-input');
    const commentInput = document.getElementById('comment-input');
    const avatarUrl = "info_movie_fc88ef0b94d14e7f75cc9d0c416b582a.gif"; // Заглушка для аватара


    // Создаём новый комментарий
    const newComment = {
        avatar: avatarUrl,
        username: "test_user",
        comment: commentInput.value.trim(),
        likes: 0,
        dislikes: 0,
    };

    // Добавляем комментарий в массив
    commentsData.push(newComment);

    // Очищаем поля ввода
    usernameInput.value = '';
    commentInput.value = '';

    // Обновляем отображение комментариев
    displayComments(commentListId, commentsData);
}
// Обработка входа
function loginUser() {
    alert('Вы вошли как "test_user". Теперь вы можете просматривать и добавлять комментарии.');
    document.getElementById('auth-container').style.display = 'none'; // Скрываем блок авторизации
    document.getElementById('comments-1').style.display = 'block'; // Показываем комментарии
    document.getElementById('add-comment').style.display = 'block'; // Показываем форму добавления комментария
    displayComments('comment-list-1'); // Отображаем комментарии
}

document.addEventListener("DOMContentLoaded", function () {
    // Обновляем текстовое сообщение
    const authContainer = document.getElementById('auth-container');
    authContainer.innerHTML = `
        <div style="background-color: red; padding: 20px; color: white; text-align: center; border-radius: 5px;">
            <p style="font-size: 18px; margin: 0;">
                Если вы хотите просматривать или писать сообщения, то, пожалуйста,
                <a id="login-link" href="javascript:void(0);" style="color: yellow; text-decoration: underline;">ВОЙДИТЕ</a> или
                <a id="register-link" href="reg.html" style="color: yellow; text-decoration: underline;">ЗАРЕГИСТРИРУЙТЕСЬ</a>.
            </p>
        </div>
    `;

    // Настройка кнопок входа и регистрации
    document.getElementById('login-link').addEventListener('click', loginUser);
    document.getElementById('register-link').addEventListener('click', registerUser);

    // Скрываем комментарии и форму до входа
    document.getElementById('comments-1').style.display = 'none';
    document.getElementById('add-comment').style.display = 'none';
});

// Функция входа
function loginUser() {
    alert('Вы вошли как "Тест юзер". Теперь вы можете просматривать и добавлять комментарии.');
    document.getElementById('auth-container').style.display = 'none'; // Убираем сообщение
    document.getElementById('comments-1').style.display = 'block'; // Показываем комментарии
    document.getElementById('add-comment').style.display = 'block'; // Показываем форму
    displayComments('comment-list-1'); // Отображаем комментарии
}