 const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0;

    // Open Lightbox
    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
      });
    });

    // Show current image
    function showImage() {
      lightboxImg.src = galleryImages[currentIndex].src;
    }

    // Navigation
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage();
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });