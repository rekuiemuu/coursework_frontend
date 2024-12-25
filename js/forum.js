function toggleComments(id) {
    const commentsSection = document.getElementById(`comments-${id}`);
    commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
}

function addComment(id) {
    const nameInput = document.getElementById(`name-${id}`);
    const textInput = document.getElementById(`text-${id}`);

    if (nameInput.value && textInput.value) {
        const comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = `<p><strong>${nameInput.value}:</strong> ${textInput.value}</p>`;
        document.getElementById(`comments-${id}`).prepend(comment);
        nameInput.value = '';
        textInput.value = '';
    } else {
        alert('Введите имя и текст комментария.');
    }
}
