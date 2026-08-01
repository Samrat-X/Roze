/*==================================================
      HAPPY GIRLFRIEND'S DAY WEBSITE
      Premium Vanilla JavaScript
==================================================*/

/*=========================================
            LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1800);

});

/*=========================================
            CURSOR
=========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*=========================================
            BACK TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/*=========================================
            DARK MODE
=========================================*/

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

    themeBtn.innerHTML =
        document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";

};

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals =
    document.querySelectorAll(".reveal");

function revealSections() {

    const trigger =
        window.innerHeight * 0.85;

    reveals.forEach((item) => {

        const top =
            item.getBoundingClientRect().top;

        if (top < trigger) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
/*=========================================
        LOVE COUNTER
=========================================*/

/*
    Change this date
    to your relationship start date.
*/

const startDate =
new Date(2023, 10, 26, 1, 0, 0);

function updateCounter(){

    const now = new Date();

    let diff = now - startDate;

    const sec = Math.floor(diff/1000);

    const min = Math.floor(sec/60);

    const hour = Math.floor(min/60);

    const day = Math.floor(hour/24);

    const year = Math.floor(day/365);

    const month = Math.floor((day%365)/30);

    document.getElementById("years").textContent = year;

    document.getElementById("months").textContent = month;

    document.getElementById("days").textContent = day;

    document.getElementById("hours").textContent =
    hour%24;

    document.getElementById("minutes").textContent =
    min%60;

    document.getElementById("seconds").textContent =
    sec%60;

}

setInterval(updateCounter,1000);

updateCounter();

/*=========================================
            LOVE METER
=========================================*/

const meter =
document.querySelector(".meter-fill");

window.addEventListener("load",()=>{

setTimeout(()=>{

meter.style.width="100%";

},1000);

});

/*=========================================
        QUOTES CAROUSEL
=========================================*/

const quotes =
document.querySelectorAll(".quote");

let quoteIndex=0;

setInterval(()=>{

quotes[quoteIndex].classList.remove("active");

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

quotes[quoteIndex].classList.add("active");

},4000);

/*==================================================
                GALLERY LIGHTBOX
==================================================*/

const galleryImages = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

    });

});

closeLightbox.onclick = () => {

    lightbox.style.display = "none";

};

lightbox.onclick = (e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

};

/*==================================================
                LOVE NOTES
==================================================*/

const notes = document.querySelectorAll(".note");

notes.forEach(note=>{

    note.addEventListener("click",()=>{

        const message = note.dataset.message;

        alert(message);

    });

});

/*==================================================
                MUSIC PLAYER
==================================================*/

const music = document.getElementById("bgMusic");

const playBtn = document.getElementById("playMusic");

let playing=false;

playBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();

        playBtn.innerHTML='<i class="fas fa-pause"></i>';

        playing=true;

    }

    else{

        music.pause();

        playBtn.innerHTML='<i class="fas fa-play"></i>';

        playing=false;

    }

});

/*==================================================
                POPUP
==================================================*/

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

closePopup.onclick=()=>{

popup.style.display="none";

};

/*==================================================
                SURPRISE BUTTON
==================================================*/

const surpriseBtn=document.getElementById("surpriseBtn");

surpriseBtn.onclick=()=>{

popup.style.display="flex";

createHearts();

confettiEffect();

fireworks();

};

/*==================================================
                EASTER EGG
==================================================*/

const logo=document.getElementById("heartLogo");

let clickCount=0;

logo.addEventListener("click",()=>{

clickCount++;

if(clickCount===5){

alert("❤️ I Love You Forever ❤️");

clickCount=0;

}

});
/*==================================================
            FLOATING HEARTS
==================================================*/

function createHearts(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

heart.style.transition="all 5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-120vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},5500);

}

}

/*==================================================
                CONFETTI
==================================================*/

function confettiEffect(){

for(let i=0;i<150;i++){

const confetti=document.createElement("div");

confetti.style.position="fixed";

confetti.style.left=Math.random()*100+"vw";

confetti.style.top="-20px";

confetti.style.width="8px";

confetti.style.height="8px";

confetti.style.background=

`hsl(${Math.random()*360},100%,65%)`;

confetti.style.zIndex="99999";

confetti.style.transition="5s linear";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.style.transform=

`translateY(${window.innerHeight+100}px)
rotate(720deg)`;

},50);

setTimeout(()=>{

confetti.remove();

},5200);

}

}

/*==================================================
                FIREWORKS
==================================================*/

function fireworks(){

for(let i=0;i<8;i++){

const fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";

fire.style.left=Math.random()*90+"vw";

fire.style.top=Math.random()*60+"vh";

fire.style.fontSize="55px";

fire.style.opacity="0";

fire.style.transition=".6s";

fire.style.zIndex="99999";

document.body.appendChild(fire);

setTimeout(()=>{

fire.style.opacity="1";

fire.style.transform="scale(2)";

},100);

setTimeout(()=>{

fire.style.opacity="0";

fire.remove();

},1200);

}

}

/*==================================================
            MOUSE PARALLAX
==================================================*/

const hero=document.getElementById("hero");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

hero.style.backgroundPosition=

`${x}px ${y}px`;

});

/*==================================================
        AUTO FLOATING HEARTS
==================================================*/

setInterval(createHearts,12000);