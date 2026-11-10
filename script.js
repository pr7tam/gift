
// ========================================
// 💜 SISTER SURPRISE WEBSITE
// Complete JavaScript with 3 interactive gifts
// ========================================

const CONFIG = {
    sisterName: "Tanuuu!!",
    yourName: "Your Little Brother",

    letter: `You are my cute chaos, my partner in silly fights,
and one of the kindest hearts in my world. 💜

We laugh over the tiniest things, annoy each other for no reason,
and still understand when the other one needs a little care.
That is our kind of magic.

No matter how much we tease each other,
I will always cheer for you, stand beside you,
and wish the brightest things for your life.

Keep being your funny, sweet, caring, wonderfully weird self.

Love you, sis — today, tomorrow,
and through every chapter of life. 💜`
};

// Photos for Gift One.
// Keep the filenames exactly the same as your actual photos.
const MEMORY_PHOTOS = [
    {
        src: "image/image3.jpeg",
        caption: "My favourite troublemaker! 😂"
    },
    {
        src: "image/image1.jpeg",
        caption: "Partners in crime forever! 🫶"
    },
    {
        src: "image/image 2.jpeg",
        caption: "One bond, countless memories. 💜"
    }
];

// PERSONALIZE NAME
document.querySelectorAll(".name").forEach(element => {
    element.textContent = CONFIG.sisterName;
});

const senderElement = document.getElementById("sender");

if (senderElement) {
    senderElement.textContent = CONFIG.yourName;
}

// ========================================
// SCREEN NAVIGATION
// ========================================

function goTo(screenId) {
    const nextScreen = document.getElementById(screenId);

    if (!nextScreen) return;

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    nextScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (screenId === "letter") {
        startLetter();
    }

    if (screenId === "celebration" || screenId === "final") {
        celebrate();
    }
}

// ========================================
// QUESTION ANSWERS
// ========================================

function wrongAnswer(option) {
    const message = document.getElementById("questionMessage");

    if (!message) return;

    if (option === 0) {
        message.textContent =
            "Bhaiya nahi! 😂 Dobara socho, Didi! 💜";
    } else {
        message.textContent =
            "Didii bhi nahi! 🤭 Ek aur chance hai! 💗";
    }
}

function sayYes() {
    const message = document.getElementById("questionMessage");

    if (message) {
        message.textContent =
            "Correct answer! Chhota Bhai!!! 😎💜";
    }

    goTo("celebration");
}

// ========================================
// FLOATING HEARTS
// ========================================

function createHeart() {
    const container = document.getElementById("hearts");

    if (!container) return;

    const heart = document.createElement("span");

    heart.className = "heart";

    const emojis = [
        "💜", "💗", "💕", "💖",
        "✨", "🌸", "🫶", "💝"
    ];

    heart.textContent =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 24) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8500);
}

setInterval(createHeart, 650);

// ========================================
// CONFETTI CELEBRATION
// ========================================

function celebrate() {
    const emojis = [
        "💜", "💗", "✨",
        "🌸", "🎉", "💕", "🎀"
    ];

    for (let i = 0; i < 35; i++) {
        const piece = document.createElement("span");

        piece.className = "confetti";

        piece.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        piece.style.left = Math.random() * 100 + "vw";

        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5500);
    }
}

// ========================================
// INTERACTIVE GIFTS
// ========================================

const giftModal = document.getElementById("giftModal");

const giftPanels = [
    document.getElementById("giftPanel0"),
    document.getElementById("giftPanel1"),
    document.getElementById("giftPanel2")
];

const giftOpened = [false, false, false];

let currentSlide = 0;

// OPEN SELECTED GIFT
function openGift(index) {
    if (index < 0 || index > 2 || !giftModal) return;

    giftPanels.forEach((panel, i) => {
        if (panel) {
            panel.hidden = i !== index;
        }
    });

    const titles = [
        "Our Sweet Memories 📸",
        "A Letter For You 💌",
        "A Little Magic ✨"
    ];

    const tags = [
        "Little moments, endless memories",
        "Something from my heart",
        "A wish made just for you"
    ];

    document.getElementById("giftModalTitle").textContent =
        titles[index];

    document.getElementById("giftModalTag").textContent =
        tags[index];

    document.getElementById("giftOpenedLabel").textContent =
        "A surprise made with love ♡";

    giftModal.classList.add("open");
    giftModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    giftOpened[index] = true;

    updateGiftProgress();

    if (index === 0) {
        renderSlide();
    }

    if (index === 1) {
        const letter = document.getElementById("hiddenGiftLetter");
        const envelope = document.getElementById("envelopeButton");

        if (letter) letter.classList.remove("show");
        if (envelope) envelope.style.display = "flex";
    }

    if (index === 2) {
        const scene = document.querySelector(".magic-scene");
        const magicGift = document.getElementById("magicGift");
        const title = document.getElementById("magicTitle");
        const message = document.getElementById("magicMessage");

        if (scene) scene.classList.remove("wished");
        if (magicGift) magicGift.textContent = "🎁";
        if (title) title.textContent = "A little magic for you!";

        if (message) {
            message.textContent =
                "You deserve happiness, success, endless smiles, and all the beautiful things in the world.";
        }
    }

    createHeart();
}

// CLOSE GIFT POPUP
function closeGift() {
    if (!giftModal) return;

    giftModal.classList.remove("open");
    giftModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

// UPDATE OPENED GIFT STATUS
function updateGiftProgress() {
    const count = giftOpened.filter(Boolean).length;

    const progress = document.getElementById("giftProgress");

    if (progress) {
        progress.textContent =
            `${count} of 3 surprises opened 💜`;
    }

    document.querySelectorAll(".gift").forEach((button, index) => {
        button.classList.toggle("is-opened", giftOpened[index]);

        const status = button.querySelector(".gift-status");
        const emoji = button.querySelector("span");

        if (status) {
            status.textContent =
                giftOpened[index] ? "Opened ✓" : "Tap to open";
        }

        if (emoji) {
            emoji.textContent =
                giftOpened[index]
                    ? ["💝", "💌", "✨"][index]
                    : "🎁";
        }
    });
}

// ========================================
// GIFT ONE: PHOTO SLIDESHOW
// ========================================

function renderSlide() {
    const photo = MEMORY_PHOTOS[currentSlide];

    const image = document.getElementById("giftSlideImage");
    const fallback = document.getElementById("giftSlideFallback");
    const caption = document.getElementById("giftSlideCaption");
    const dots = document.getElementById("slideDots");

    if (!photo || !image || !fallback || !caption || !dots) return;

    image.style.display = "block";
    fallback.style.display = "none";

    image.onerror = () => {
        image.style.display = "none";
        fallback.style.display = "flex";
    };

    image.src = photo.src;
    image.alt = photo.caption;

    caption.textContent = photo.caption;

    dots.innerHTML = "";

    MEMORY_PHOTOS.forEach((item, index) => {
        const dot = document.createElement("button");

        dot.className =
            "slide-dot" + (index === currentSlide ? " active" : "");

        dot.type = "button";

        dot.setAttribute("aria-label", `Show photo ${index + 1}`);

        dot.addEventListener("click", () => {
            currentSlide = index;
            renderSlide();
        });

        dots.appendChild(dot);
    });
}

function changeSlide(direction) {
    currentSlide =
        (currentSlide + direction + MEMORY_PHOTOS.length)
        % MEMORY_PHOTOS.length;

    renderSlide();
}

// ========================================
// GIFT TWO: ENVELOPE LETTER
// ========================================

function revealGiftLetter() {
    const letter = document.getElementById("hiddenGiftLetter");
    const envelope = document.getElementById("envelopeButton");

    if (letter) {
        letter.classList.add("show");
    }

    if (envelope) {
        envelope.style.display = "none";
    }

    const label = document.getElementById("giftOpenedLabel");

    if (label) {
        label.textContent = "A hug from your little brother 💗";
    }
}

// ========================================
// GIFT THREE: MAGICAL SURPRISE
// ========================================

function releaseMagic() {
    const scene = document.querySelector(".magic-scene");
    const gift = document.getElementById("magicGift");
    const title = document.getElementById("magicTitle");
    const message = document.getElementById("magicMessage");

    if (scene) {
        scene.classList.remove("wished");
        void scene.offsetWidth;
        scene.classList.add("wished");
    }

    if (gift) {
        gift.textContent = "💖";
    }

    if (title) {
        title.textContent = "Your wish is wrapped in love! 🌟";
    }

    if (message) {
        message.textContent =
            "May your days be full of laughter, your dreams come true, and your heart always find reasons to smile. Your little brother will always be cheering for you! 💜";
    }

    celebrate();
}

// Close popup with Escape key
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeGift();
    }
});

// ========================================
// TYPING LOVE LETTER
// ========================================

let letterStarted = false;
let letterTimer = null;

function startLetter() {
    if (letterStarted) return;

    const element = document.getElementById("letterText");

    if (!element) return;

    letterStarted = true;

    const text = CONFIG.letter;
    let index = 0;

    element.textContent = "";

    letterTimer = setInterval(() => {
        element.textContent = text.slice(0, index + 1);

        index++;

        if (index >= text.length) {
            clearInterval(letterTimer);
            letterTimer = null;
        }
    }, 28);
}

// ========================================
// MUSIC PLAYER
// ========================================

const ourSong = document.getElementById("ourSong");
const playBtn = document.getElementById("playBtn");
const songProgress = document.getElementById("songProgress");

const currentTimeDisplay =
    document.getElementById("currentTime");

const durationDisplay =
    document.getElementById("duration");

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function toggleSong() {
    if (!ourSong || !playBtn) return;

    if (ourSong.paused) {
        ourSong.play().catch(error => {
            console.error("Music playback error:", error);

            alert(
                "Song play nahi ho raha! " +
                "music folder aur ourSong.mp3 ka naam check karo."
            );
        });
    } else {
        ourSong.pause();
    }
}

if (ourSong) {
    ourSong.addEventListener("play", () => {
        if (playBtn) playBtn.textContent = "⏸ Pause Song";
    });

    ourSong.addEventListener("pause", () => {
        if (playBtn) playBtn.textContent = "▶ Play Our Song";
    });

    const updateDuration = () => {
        if (durationDisplay) {
            durationDisplay.textContent = formatTime(ourSong.duration);
        }
    };

    ourSong.addEventListener("loadedmetadata", updateDuration);
    ourSong.addEventListener("durationchange", updateDuration);

    ourSong.addEventListener("timeupdate", () => {
        if (currentTimeDisplay) {
            currentTimeDisplay.textContent =
                formatTime(ourSong.currentTime);
        }

        if (
            songProgress &&
            Number.isFinite(ourSong.duration) &&
            ourSong.duration > 0
        ) {
            songProgress.value =
                (ourSong.currentTime / ourSong.duration) * 100;
        }
    });

    ourSong.addEventListener("ended", () => {
        if (playBtn) playBtn.textContent = "▶ Play Our Song";
        if (songProgress) songProgress.value = 0;
    });

    ourSong.addEventListener("error", () => {
        console.error(
            "Audio file could not load. Check this path: music/ourSong.mp3"
        );
    });
}

if (songProgress && ourSong) {
    songProgress.addEventListener("input", () => {
        if (
            Number.isFinite(ourSong.duration) &&
            ourSong.duration > 0
        ) {
            ourSong.currentTime =
                (Number(songProgress.value) / 100) * ourSong.duration;
        }
    });
}

// ========================================
// RESTART WEBSITE
// ========================================

function restartWebsite() {
    closeGift();

    giftOpened.fill(false);
    currentSlide = 0;

    updateGiftProgress();

    const questionMessage =
        document.getElementById("questionMessage");

    if (questionMessage) {
        questionMessage.textContent = "Sahi answer do! 👀💕";
    }

    if (letterTimer) {
        clearInterval(letterTimer);
        letterTimer = null;
    }

    letterStarted = false;

    const letterText = document.getElementById("letterText");

    if (letterText) {
        letterText.textContent = "";
    }

    if (ourSong) {
        ourSong.pause();
        ourSong.currentTime = 0;
    }

    if (songProgress) songProgress.value = 0;

    if (currentTimeDisplay) {
        currentTimeDisplay.textContent = "0:00";
    }

    if (playBtn) {
        playBtn.textContent = "▶ Play Our Song";
    }

    goTo("welcome");
}
