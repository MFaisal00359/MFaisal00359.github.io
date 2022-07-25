let = window.addEventListener("scroll", function() {
    let header = document.querySelector("nav");
    header.classList.toggle("scrollPageNav", window.scrollY > 0);
});

$(function() {

    $(".menu-link").click(function(e) {
        e.preventDefault();

        $(".menu-overlay").toggleClass("open");
        $(".menu").toggleClass("open");

    });

});


// var textWrapper = document.querySelector('.title .Detail-title');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='Detail'>$&</span>");

// anime.timeline({loop: false})
//   .add({
//     targets: '.title .Detail',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 250,
//     delay: (el, i) => 40 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });

// Wrap every letter in a span
// Wrap every letter in a span
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .hello');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='hei'>$&<br></span>");
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&<br></span>");
var textWrapper = document.querySelector('.ml10 .sub-letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='sub'>$&<br></span>");

anime.timeline({ loop: true })
    .add({
        targets: '.hei',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 900,
        delay: (el, i) => 100 * i
    })
    .add({
        targets: '.letter',
        scale: [2, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 900,
        delay: (el, i) => 75 * i
    }).add({
        targets: '.sub',
        scale: [2, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 900,
        delay: (el, i) => 75 * i
    })
    .add({
        targets: '.hei',
        opacity: 0,
        duration: 1000,
        translateY: 10,
        easing: "easeOutExpo",
        delay: 30000
    }).add({
        targets: '.letter',
        opacity: 0,
        duration: 100,
        translateY: 10,
        easing: "easeOutExpo",
        delay: 0
    }).add({
        targets: '.sub',
        opacity: 0,
        duration: 100,
        translateY: 10,
        easing: "easeOutExpo",
        delay: 0
    });