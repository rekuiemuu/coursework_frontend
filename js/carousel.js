document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.carousel-images img');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    let currentIndex = 0;
    let inactivityInterval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startInactivityTimer() {
        // Сбрасываем старый таймер
        clearInterval(inactivityInterval);
        // Запускаем новый таймер для бесконечного переключения
        inactivityInterval = setInterval(nextImage, 10000); // Переключаем каждые 10 секунд
    }

    // События для стрелок
    leftArrow.addEventListener('click', () => {
        previousImage();
        startInactivityTimer(); // Сбрасываем таймер при клике
    });

    rightArrow.addEventListener('click', () => {
        nextImage();
        startInactivityTimer(); // Сбрасываем таймер при клике
    });

    // Инициализация
    startInactivityTimer(); // Запуск таймера при загрузке
    showImage(currentIndex); // Показать первое изображение
});
