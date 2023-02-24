const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: "#next-btn",
    prevEl: "#prev-btn",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  allowSlidePrev: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    760: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    970: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
swiper.on("breakpoint", () => {
  console.log("breakpoints changed");
});

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
prevBtn.addEventListener("click", () => {
  swiper.slidePrev();
});
nextBtn.addEventListener("click", () => {
  swiper.slideNext();
});
