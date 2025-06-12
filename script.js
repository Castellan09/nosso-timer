document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAÇÃO INICIAL ---
    // Insira a data e hora de início do namoro aqui.
    // Formato: Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
    const startDate = new Date(2019, 0, 24, 3, 0, 0); // Atualizado para 24 de Janeiro de 2019, 03:00

    // --- LÓGICA DO TIMER ---
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        daysEl.innerText = days;
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
    }

    // --- LÓGICA DO CARROSSEL DE FOTOS ---
    const images = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;

    function showNextImage() {
        images.forEach(img => img.classList.remove('active')); // Remove active de todas
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images.forEach((img, index) => {
            if (index === currentImageIndex) {
                img.classList.add('active');
            }
        });
    }

    // --- LÓGICA DA MÚSICA DE FUNDO ---
    const overlay = document.getElementById('initial-overlay');
    const playButton = document.getElementById('play-music-button');
    const music = document.getElementById('background-music');

    playButton.addEventListener('click', () => {
        music.play();
        overlay.style.display = 'none';

        // Inicia o timer e o carrossel somente após o clique
        setInterval(updateTimer, 1000);
        setInterval(showNextImage, 5000); // Muda a foto a cada 5 segundos
        updateTimer(); // Chama uma vez para não esperar 1 segundo
    });
});