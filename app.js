const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }); 
  

  /* scroll */
  function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");
    if (sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSectionVisible = sectionTop - windowMetade < 0;
          if (isSectionVisible) section.classList.add("ativo");
          else section.classList.remove("ativo");
        });
      }
  
      animaScroll();
  
      window.addEventListener("scroll", animaScroll);
    }
  }
  initAnimacaoScroll();

/* menu */

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}


  function toggleNav() {
    // Toggle: Hamburger Open/Close
    hamburgerMenu.classList.toggle("active");
  
    //   Toggle: Menu Active
    overlay.classList.toggle("overlay-active");
  
    if (overlay.classList.contains("overlay-active")) {
      // Animate In - Overlay
      overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
  
      // Animate In - Nav Items
      navAnimation("out", "in");
    } else {
      // Animate Out - Overlay
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  
      // Animate Out - Nav Items
      navAnimation("in", "out");
    }
  }
  
  // Events Listeners
  hamburgerMenu.addEventListener("click", toggleNav);
  navItems.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
  });

  


  /* teste */
  