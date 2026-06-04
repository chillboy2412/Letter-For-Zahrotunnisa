const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const letter = document.getElementById("letter");

const piano = document.getElementById("piano");
const song = document.getElementById("song");

const musicButton = document.getElementById("musicButton");

let songPlaying = false;

// Buka surat
openBtn.addEventListener("click", () => {

    opening.style.display = "none";

    letter.classList.remove("hidden");
    letter.classList.add("showLetter");

    piano.play();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

const closeBtn = document.getElementById("closeBtn");
});

// Tombol lagu
musicButton.addEventListener("click", () => {

    if (!songPlaying) {

        song.play();

        musicButton.innerHTML =
            "⏸️ <span>Lagu for Zahrotunnisa</span>";

        songPlaying = true;

    } else {

        song.pause();

        musicButton.innerHTML =
            "🎵 <span>Lagu for Zahrotunnisa</span>";

        songPlaying = false;

    }

});

// Kalau lagu selesai
song.addEventListener("ended", () => {

    songPlaying = false;

    musicButton.innerHTML =
        "🎵 <span>Lagu for Zahrotunnisa</span>";

});