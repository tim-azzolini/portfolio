// script.js

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
