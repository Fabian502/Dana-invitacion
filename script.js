// ========== Cuenta Regresiva ==========
simplyCountdown('#countdown', {
    year: 2025,
    month: 7,
    day: 18,
    hours: 18,
    minutes: 30,
    seconds: 0,
    words: {
        days: 'día',
        hours: 'hora',
        minutes: 'minuto',
        seconds: 'segundo',
        pluralLetter: 's'
    },
    plural: true,
    zeroPad: true,
    inline: false,
    enableUtc: false
});

// ========== Confirmación por WhatsApp ==========
function confirmarAsistencia() {
    const mensaje = "Hola, confirmo mi asistencia a los XV años 🎉";
    const numero = "524491815982";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

// ========== Música ==========
function toggleMusica() {
    const musica = document.getElementById("musica");
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}
