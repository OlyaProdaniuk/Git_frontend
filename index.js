const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});
const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 5,
  direction: "horizontal",
  grabCursor: true,

  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});
const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 8,

  allowSlidePrev: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  },
});

function myFunction() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
