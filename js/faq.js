document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const answer = toggle.nextElementSibling;

            // Переключение состояния
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                toggle.textContent = '+';
            } else {
                answer.classList.add('active');
                toggle.textContent = '−';
            }
        });
    });
});
