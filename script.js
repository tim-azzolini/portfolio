// scripts.js

const photos = [
     "portfolio1.jpg",
        "portfolio2.jpg",
        "portfolio3.jpg",
        "portfolio4.jpg",
        "portfolio5.jpg",
        "portfolio6.jpg",
        "portfolio7.jpg",
        "portfolio8.jpg",
        "portfolio9.jpg",
        "portfolio10.jpg",
        "portfolio11.jpg",
    // Add more photo URLs as needed
];

const gridContainer = document.getElementById("grid-container");

function createGridItem(photoUrl) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const img = document.createElement("img");
    img.src = photoUrl;
    img.alt = "Photograph";
    
    gridItem.appendChild(img);
    return gridItem;
}

function renderPhotos() {
    photos.forEach(photoUrl => {
        const gridItem = createGridItem(photoUrl);
        gridContainer.appendChild(gridItem);
    });
}

renderPhotos();
