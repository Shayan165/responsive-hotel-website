// counter script

function counter(id, start, end, duration) {
  if (start === end) return;
  var range = end - start;
  var current = start;
  var increment = end > start ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  var obj = document.getElementById(id);
  var timer = setInterval(function () {
    current += increment;
    obj.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

counter("counter1", 800, 1287, 3000);
counter("counter2", 4000, 5786, 3000);
counter("counter3", 1000, 1440, 3000);
counter("counter4", 6000, 7110, 3000);


// swiper script

const swiper = new Swiper('.swiper', {
  slidesPerView:4,
  spacebetween:30,
  loop:true,
  autoplay:{
    delay: 2000,
  },
   breakpoints: {
    '991': {
        slidesPerView: 5,
        spaceBetween: 10,
    },
    '767': {
        slidesPerView: 3,
        spaceBetween: 10,
    },
    '320': {
        slidesPerView: 2,
        spaceBetween: 8,
    },


},
  
});

// autotyping

new AutoTyping('.footer-text', [
  '❤️',
  '☕',
  '⌨️',
  '💻'
], {
  waitBeforeDelete: 1000,
  waitBetweenWords: 10,
  writeWhole: true
}).start();


// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})