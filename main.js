// Navigation Bar
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar-container");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    sidebar.classList.toggle("active");
});

document.addEventListener('click', e => {
    if (sidebar.classList.contains("active") && !e.target.isEqualNode(hamburgerMenu) 
        && !e.target.isEqualNode(sidebar) && !sidebar.contains(e.target)) {
            sidebar.classList.remove("active");
            hamburgerMenu.classList.remove("active");
        }
});

let isScrolling = false;

document.addEventListener("scroll", () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const navBar = document.querySelector(".nav-bar");
            if (window.scrollY > 10) {
                navBar.classList.add("scrolled");
            } else {
                navBar.classList.remove("scrolled");
            }
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Swiper / Carousel
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // loop: true,
  spaceBetween: 32,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// FAQs Accordion
const accordions = document.querySelectorAll(".accordion__item");

accordions.forEach(accordion__item => {
  accordion__item.addEventListener("click", () => {
    accordion__item.classList.toggle("active");
  });
});

// ScrollReveal
ScrollReveal().reveal('section');
