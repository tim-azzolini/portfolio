// script.js

document.addEventListener("DOMContentLoaded", function() {
    shuffleImages();
});

function shuffleImages() {
    const imageContainer = document.querySelector(".image-container");
    const images = Array.from(document.querySelectorAll(".image-container img"));

    // Shuffle the array of images
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }

    // Clear the existing images
    imageContainer.innerHTML = '';

    // Append shuffled images to the container
    images.forEach(image => {
        imageContainer.appendChild(image);
    });
}

function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function filterImages(category) {
    const images = document.querySelectorAll(".image-container img");

    images.forEach(image => {
        if (category === "featured" && !image.classList.contains("featured")) {
            image.style.display = "none";
        } else if (category === "digital" && !image.classList.contains("digital")) {
            image.style.display = "none";
        } else if (category === "film" && !image.classList.contains("film")) {
            image.style.display = "none";
        } else {
            image.style.display = "block";
        }
    });
}
