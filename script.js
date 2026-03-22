// 🔷 STICKY HEADER
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scrolling down → hide
        header.classList.add("hide");
    } else {
        // scrolling up → show
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});


// CAROUSEL 
const images = [
    "./images/main.png",
    "./images/thumb1.png",
    "./images/thumb1.png",
    "./images/thumb1.png",
    "./images/thumb1.png",
    "./images/thumb1.png"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

// 👉 UPDATE IMAGE FUNCTION
function updateImage(index) {
    currentIndex = index;
    mainImage.src = images[index];

    thumbs.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
    });
}

// 👉 THUMB CLICK
thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        updateImage(index);
    });
});

// 👉 ARROWS
document.querySelector(".left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(currentIndex);
});

document.querySelector(".right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});


// FAQ SECTION
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
    faq.querySelector(".faq-question").addEventListener("click", () => {

        // close others
        faqs.forEach(item => item.classList.remove("active"));

        // open clicked
        faq.classList.toggle("active");
    });
});

function openModal(type) {
    document.getElementById("overlay").style.display = "block";

    if (type === "datasheet") {
        document.getElementById("datasheetModal").style.display = "block";
    } else {
        document.getElementById("quoteModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("datasheetModal").style.display = "none";
    document.getElementById("quoteModal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("emailInput");
    const downloadBtn = document.getElementById("downloadBtn");

    emailInput.addEventListener("input", () => {
        if (emailInput.value.trim() !== "") {
            downloadBtn.classList.add("active");
            downloadBtn.disabled = false;
        } else {
            downloadBtn.classList.remove("active");
            downloadBtn.disabled = true;
        }
    });
});

// FORM INPUT
document.addEventListener("DOMContentLoaded", () => {

    const nameInput = document.getElementById("nameInput");
    const emailInputQuote = document.getElementById("quoteEmailInput");
    const phoneInput = document.getElementById("phoneInput");
    const quoteBtn = document.getElementById("quoteBtn");

    function validateQuoteForm() {
        if (
            nameInput.value.trim() !== "" &&
            emailInputQuote.value.trim() !== "" &&
            phoneInput.value.trim() !== ""
        ) {
            quoteBtn.classList.add("active");
            quoteBtn.disabled = false;
        } else {
            quoteBtn.classList.remove("active");
            quoteBtn.disabled = true;
        }
    }

    [nameInput, emailInputQuote, phoneInput].forEach(input => {
        input.addEventListener("input", validateQuoteForm);
    });

});


// CAROUSEL AGAIN
document.addEventListener("DOMContentLoaded", () => {

    const appCards = document.getElementById("appCards");

    document.querySelector(".right-app").addEventListener("click", () => {
        appCards.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    });

    document.querySelector(".left-app").addEventListener("click", () => {
        appCards.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });

});

// PROCESS SECTION
const data = [
    {
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
        points: ["PE100 grade material", "Optimal molecular weight distribution"],
        img: "./images/main.jpeg"
    },
    {
        title: "Extrusion Process",
        desc: "Molten material is shaped into pipe form with high precision.",
        points: ["Uniform flow", "Consistent thickness"],
        img: "./images/main.jpeg"
    },
    {
        title: "Cooling Stage",
        desc: "Cooling ensures strength and stability.",
        points: ["Water cooling", "Temperature control"],
        img: "./images/main.jpeg"
    }
];

function showTab(index) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    tabs[index].classList.add("active");

    const content = data[index];

    document.getElementById("processText").innerHTML = `
    <h3>${content.title}</h3>
    <p>${content.desc}</p>
    <ul>
      ${content.points.map(p => `<li>${p}</li>`).join("")}
    </ul>
  `;

    document.getElementById("processImage").src = content.img;
}

/* OPTIONAL IMAGE SLIDER */
let current = 0;

function nextImage() {
    current = (current + 1) % data.length;
    showTab(current);
}

function prevImage() {
    current = (current - 1 + data.length) % data.length;
    showTab(current);
}

// TESTIMONIALS SECTION
const track = document.getElementById("testTrack");

let index = 0;

function slideTestimonials() {
    const cardWidth = 200; // 420 + gap
    index++;

    if (index > track.children.length - 3) {
        index = 0;
    }

    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// auto slide every 3 sec
setInterval(slideTestimonials, 3000);