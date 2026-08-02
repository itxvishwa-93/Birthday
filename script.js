/* ==========================================
   COUNTDOWN
========================================== */

const targetDate = new Date("September 3, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";

    setTimeout(() => {

        window.location.href = "celebration.html";

    },1000);

    return;

}

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.textContent = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    minutes.textContent = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    seconds.textContent = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );
}

updateCountdown();

setInterval(updateCountdown, 1000);

/* ==========================================
   RANDOM STARS
========================================== */

const stars = document.getElementById("stars");

for (let i = 0; i < 220; i++) {

    const star = document.createElement("span");

    star.className = "sparkle";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    star.style.opacity = Math.random();

    const size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    stars.appendChild(star);
}

/* ==========================================
   CENTER SPARKLES
========================================== */

const sparkles = document.getElementById("sparkles");

for (let i = 0; i < 50; i++) {

    const dot = document.createElement("span");

    dot.className = "sparkle";

    dot.style.left = (38 + Math.random() * 24) + "%";
    dot.style.top = (22 + Math.random() * 35) + "%";

    dot.style.animationDelay = Math.random() * 3 + "s";

    sparkles.appendChild(dot);
}

/* ==========================================
   TOUCH MESSAGE
========================================== */

const touchMessage = document.getElementById("touch-message");

const messages = [

"❤️ Not yet...",

"💕 Just a few more days...",

"✨ Patience makes surprises even sweeter...",

"🎁 I'm preparing something special for you...",

"💌 Don't rush... Every second matters.",

"🎂 The best surprise is worth waiting for...",

"🌸 Almost there... Stay with me.",

"💖 A magical moment is getting closer...",

"🌟 Your surprise is waiting at the end of the countdown...",

"❤️ Please wait until the countdown ends...",

"💕 Trust me... It'll be worth the wait...",

"✨ Every second is leading to something beautiful..."

];

let lastMessageIndex = -1;

document.addEventListener("click", () => {

    const now = new Date().getTime();

    if (targetDate <= now) return;

    let randomIndex;

    do {

        randomIndex = Math.floor(Math.random() * messages.length);

    } while (randomIndex === lastMessageIndex);

    lastMessageIndex = randomIndex;

    touchMessage.classList.remove("show");

    void touchMessage.offsetWidth;

    touchMessage.innerHTML = messages[randomIndex];

    touchMessage.classList.add("show");

});

/* ==========================================
   HEART CLICK EFFECT
========================================== */

const heart = document.querySelector(".main-heart");

if (heart) {

    document.addEventListener("click", () => {

        heart.style.transition = ".25s";

        heart.style.transform =
            "translate(-50%,-50%) scale(1.05)";

        setTimeout(() => {

            heart.style.transform =
                "translate(-50%,-50%) scale(1)";

        }, 250);

    });

}

/* ==========================================
   SHOOTING STAR
========================================== */

function createShootingStar() {

    const star = document.createElement("div");

    star.style.position = "fixed";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * 180 + "px";

    star.style.width = "2px";

    star.style.height = "2px";

    star.style.background = "white";

    star.style.boxShadow = "0 0 15px white";

    star.style.pointerEvents = "none";

    star.style.zIndex = "-1";

    document.body.appendChild(star);

    star.animate([

        {
            transform: "translate(0,0)",
            opacity: 1
        },

        {
            transform: "translate(-350px,350px)",
            opacity: 0
        }

    ], {

        duration: 1800

    });

    setTimeout(() => {

        star.remove();

    }, 1800);

}

window.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");

    if (!music) return;

    music.play().catch(() => {

        document.addEventListener("click", () => {
            music.play();
        }, { once: true });

    });

    window.addEventListener("beforeunload", () => {
        music.pause();
        music.currentTime = 0;
    });

});