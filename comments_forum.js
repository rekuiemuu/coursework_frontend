// Пример данных для комментариев
const commentsData = {
    1: [{ username: 'Alice', text: 'Обновление потрясающее!' }],
    2: [{ username: 'Bob', text: 'Добавьте больше персонажей!' }],
    3: [{ username: 'Charlie', text: 'Люблю ваш проект!' }],
};

// Показать комментарии для конкретного поста
function loadComments(postId) {
    const commentsSection = document.getElementById(`comments-${postId}`);
    commentsSection.innerHTML = '';

    const comments = commentsData[postId] || [];
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `<strong>${comment.username}:</strong> ${comment.text}`;
        commentsSection.appendChild(commentElement);
    });

    const addCommentForm = document.createElement('div');
    addCommentForm.innerHTML = `
        <input type="text" id="username-${postId}" placeholder="Ваше имя">
        <textarea id="comment-${postId}" placeholder="Ваш комментарий"></textarea>
        <button onclick="addComment(${postId})">Добавить</button>
    `;
    commentsSection.appendChild(addCommentForm);
}

// Добавить новый комментарий
function addComment(postId) {
    const username = document.getElementById(`username-${postId}`).value;
    const text = document.getElementById(`comment-${postId}`).value;

    if (username.trim() && text.trim()) {
        if (!commentsData[postId]) {
            commentsData[postId] = [];
        }

        commentsData[postId].push({ username, text });
        loadComments(postId);
    }
}

// Инициализация комментариев
document.querySelectorAll('.show-comments-btn').forEach(button => {
    button.addEventListener('click', () => {
        const postId = button.getAttribute('data-post-id');
        loadComments(postId);
    });
});
