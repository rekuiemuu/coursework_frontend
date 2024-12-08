function initParallax() {
    // Кэшируем все слои с классом .parallax
    const layers = document.querySelectorAll('.parallax');

    // Обработчик скроллинга
    function updateParallax() {
        const scrollY = window.pageYOffset;

        // Применяем параллакс-эффект к каждому слою
        layers.forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            if (speed) {
                const translateY = -(scrollY * speed / 100);
                layer.style.transform = `translate3d(0px, ${translateY}px, 0px)`;
            }
        });
    }

    // Используем requestAnimationFrame для плавности
    function onScroll() {
        window.requestAnimationFrame(updateParallax);
    }

    // Слушаем событие прокрутки
    window.addEventListener('scroll', onScroll, { passive: true });

    // Инициализируем эффект на загрузке страницы
    updateParallax();
}
