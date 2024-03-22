document.addEventListener("DOMContentLoaded", function() {
    // Add your image URLs here
    const imageUrls = [
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
        // Add more image URLs as needed
    ];

    const gallery = document.querySelector('.gallery');

    // Loop through imageUrls and create img elements
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Photograph';
        gallery.appendChild(img);
    });
});