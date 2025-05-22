const images = ["digital1.jpg","digital10.JPG","digital11.jpg","digital12.JPG","digital13.JPG","digital14.JPG","digital15.JPG","digital16.jpg","digital17.JPG","digital18.JPG","digital19.JPG","digital2.jpg","digital20.JPG","digital21.JPG","digital22.JPG","digital23.jpg","digital24.JPG","digital25.jpg","digital26.JPG","digital27.JPG","digital28.JPG","digital29.JPG","digital3.jpg","digital30.JPG","digital31.jpg","digital32.JPG","digital33.JPG","digital34.jpg","digital35.JPG","digital36.JPG","digital37.JPG","digital38.JPG","digital39.JPG","digital4.jpg","digital40.JPG","digital41.HEIC","digital42.JPG","digital43.jpg","digital44.jpg","digital45.jpg","digital46.jpg","digital47.jpg","digital48.jpg","digital49.jpg","digital5.jpg","digital50.jpg","digital51.JPG","digital52.jpg","digital53.JPG","digital54.JPG","digital55.JPG","digital56.JPG","digital57.JPG","digital58.jpg","digital59.jpg","digital6.jpg","digital60.jpg","digital61.jpg","digital62.jpg","digital63.jpg","digital64.jpg","digital65.jpg","digital66.jpg","digital67.jpg","digital68.jpg","digital69.jpg","digital7.jpg","digital70.jpg","digital71.jpg","digital72.jpg","digital73.jpg","digital74.jpg","digital75.jpg","digital76.jpg","digital77.jpg","digital78.jpg","digital79.jpg","digital8.jpg","digital80.jpg","digital81.jpg","digital82.jpg","digital83.jpg","digital84.jpg","digital85.jpg","digital86.jpg","digital87.jpg","digital9.JPG","film1.jpg","film10.JPG","film100.JPG","film101.JPG","film102.JPG","film103.JPG","film104.JPG","film105.JPG","film106.JPG","film107.JPG","film108.JPG","film109.JPG","film11.JPG","film110.JPG","film111.JPG","film12.JPG","film13.jpeg","film14.jpeg","film15.jpeg","film16.jpeg","film17.jpeg","film18.jpeg","film19.JPG","film2.jpg","film20.JPG","film21.JPG","film22.JPG","film23.JPG","film24.JPG","film25.JPG","film26.JPG","film27.JPG","film28.JPG","film29.JPG","film3.JPG","film30.JPG","film31.JPG","film32.JPG","film33.JPG","film34.JPG","film35.JPG","film36.JPG","film37.JPG","film38.JPG","film39.JPG","film4.jpg","film40.JPG","film41.JPG","film42.JPG","film43.JPG","film44.JPG","film45.JPG","film46.JPG","film47.JPG","film48.JPG","film49.JPG","film5.JPG","film50.JPG","film51.JPG","film52.JPG","film53.JPG","film54.JPG","film55.JPG","film56.JPG","film57.JPG","film58.JPG","film59.JPG","film6.JPG","film60.JPG","film61.JPG","film62.JPG","film63.JPG","film64.JPG","film65.JPG","film66.JPG","film67.JPG","film68.JPG","film69.JPG","film7.JPG","film70.JPG","film71.JPG","film72.JPG","film73.JPG","film74.JPG","film75.JPG","film76.JPG","film77.JPG","film78.JPG","film79.JPG","film8.JPG","film80.JPG","film81.JPG","film82.JPG","film83.JPG","film84.JPG","film85.JPG","film86.JPG","film87.JPG","film88.JPG","film89.JPG","film9.JPG","film90.JPG","film91.JPG","film92.JPG","film93.JPG","film94.JPG","film95.JPG","film96.JPG","film97.JPG","film98.JPG","film99.JPG"];
const digitalImages = images.filter(img => /digital/i.test(img));
const filmImages = images.filter(img => /film/i.test(img));


document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
    function renderGallery(list) {
      gallery.innerHTML = "";
      list.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";
        img.alt = "";
        img.addEventListener("click", () => openLightbox(src));
        gallery.appendChild(img);
      });
    }
    const digitalBtn = document.getElementById("digitalTab");
    const filmBtn = document.getElementById("filmTab");
    digitalBtn.addEventListener("click", () => {
      digitalBtn.classList.add("active");
      filmBtn.classList.remove("active");
      renderGallery(digitalImages);
    });
    filmBtn.addEventListener("click", () => {
      filmBtn.classList.add("active");
      digitalBtn.classList.remove("active");
      renderGallery(filmImages);
    });
    renderGallery(digitalImages);


  document.querySelector('#lightbox .close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
});

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
