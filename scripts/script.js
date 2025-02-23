const show = document.querySelectorAll(".gift-img");

// Toggle some sections visibility when the gift image is clicked
show.forEach(heading => {
    heading.addEventListener("click", function () {
        this.classList.toggle("show");
    });
});