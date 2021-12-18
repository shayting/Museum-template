// swiper - background
var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  // loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = "vertical";
  return direction;
}

// swiper - text
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  }
});

// page 
var swiper3 = new Swiper(".mySwiper", {
  // loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-2",
    type: "fraction",
  },
});
