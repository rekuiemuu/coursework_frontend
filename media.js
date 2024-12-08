document.addEventListener("DOMContentLoaded", () => {
    // Устанавливаем медиа по умолчанию
    const defaultMediaPath = 'screeen2.png'; // Путь к изображению по умолчанию
    const defaultMediaType = 'image'; // Тип медиа по умолчанию (image или video)

    // Отображаем медиа по умолчанию
    showMedia(defaultMediaPath, defaultMediaType);
});

function showMedia(mediaPath, mediaType) {
    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = ''; // Очищаем контейнер перед добавлением нового медиа

    if (mediaType === 'image') {
        const imgElement = document.createElement('img');
        imgElement.src = mediaPath;
        imgElement.alt = 'Изображение';
        imgElement.style.width = '100%';
        imgElement.style.height = '100%';
        imgElement.style.objectFit = 'cover';
        mediaContainer.appendChild(imgElement);
    } else if (mediaType === 'video') {
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('video-wrapper');

        const videoElement = document.createElement('video');
        videoElement.src = mediaPath;
        videoElement.muted = true; // Отключаем звук
        videoElement.autoplay = true; // Автоплей
        videoElement.loop = true; // Зацикливание
        videoElement.style.width = '100%';
        videoElement.style.height = '100%';
        videoElement.style.objectFit = 'cover';

        const playPauseButton = document.createElement('button');
        playPauseButton.classList.add('play-pause-btn');
        playPauseButton.textContent = ' '; // Иконка для кнопки
        playPauseButton.onclick = () => {
            if (videoElement.paused) {
                videoElement.play();
                playPauseButton.textContent = ' ';
            } else {
                videoElement.pause();
                playPauseButton.textContent = ' ';
            }
        };

        videoWrapper.appendChild(videoElement);
        videoWrapper.appendChild(playPauseButton);
        mediaContainer.appendChild(videoWrapper);
    }
}
