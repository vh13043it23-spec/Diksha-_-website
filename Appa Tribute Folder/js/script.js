function checkPasscode() {

    let pass = document.getElementById("passcode").value;

   if(pass === "1911"){

    document.getElementById("message").innerHTML =
    "✅ Access Granted";

    setTimeout(() => {
        window.location.href = "pages/welcome.html";
    }, 1000);

} else {
        document.getElementById("message").innerHTML =
        "❌ Incorrect Passcode";
    }

}
function setEnglish() {
    document.getElementById("title").innerHTML =
    "To The Man Behind The Uniform";

    document.getElementById("subtitle").innerHTML =
    "Dedicated to Manimaran P. — a police officer, a son, a husband, and above all, our Appa.";

    document.getElementById("welcomeText").innerHTML =
    "Welcome, Appa";

    document.getElementById("passcode").placeholder =
    "Enter Passcode";
}

function setTamil() {
    document.getElementById("title").innerHTML =
    "சீருடையின் பின்னால் இருக்கும் மனிதர்";

    document.getElementById("subtitle").innerHTML =
    "மணிமாறன் அவர்களுக்கு அர்ப்பணம் — ஒரு காவல் அதிகாரி, ஒரு மகன், ஒரு கணவர், அதைவிட முக்கியமாக எங்கள் அப்பா.";

    document.getElementById("welcomeText").innerHTML =
    "வரவேற்கிறோம் அப்பா";

    document.getElementById("passcode").placeholder =
    "கடவுச்சொல்லை உள்ளிடுங்கள்";
}
function toggleMusic() {
    let music = document.getElementById("bgmusic");

    if (!music) return;

    if (music.paused) {
        music.play();
        localStorage.setItem("musicState", "play");
    } else {
        music.pause();
        localStorage.setItem("musicState", "pause");
    }
}

window.addEventListener("load", function () {
    let music = document.getElementById("bgmusic");

    if (!music) return;

    if (localStorage.getItem("musicState") === "play") {
        music.play();
    }
});
function setEnglish() {
    document.querySelectorAll(".en").forEach(el => el.style.display = "block");
    document.querySelectorAll(".ta").forEach(el => el.style.display = "none");
}

function setTamil() {
    document.querySelectorAll(".en").forEach(el => el.style.display = "none");
    document.querySelectorAll(".ta").forEach(el => el.style.display = "block");
}