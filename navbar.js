let = window.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("scrollPageNav", window.scrollY > 0);
});