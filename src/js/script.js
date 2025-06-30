import trocarVideo from './trocarVideo.js';

trocarVideo();

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const fadeInElements = document.querySelectorAll(".js-fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });

  const swiper = new Swiper(".mySwiper", {
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });


  const swiperTegbe = new Swiper(".swiper-tegbe", {
    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const header = document.querySelector('header');
  const firstSection = document.querySelector('.section-1');

    window.addEventListener("scroll", () => {
      const sectionBottom = firstSection.getBoundingClientRect().bottom;

      if (sectionBottom <= 0) {
        header.classList.remove("header-default");
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
        header.classList.add("header-default");
      }
    });

    const observerIframe = new MutationObserver(() => {
    const iframe = document.querySelector('iframe[name^="amoforms_iframe_"]');
    if (iframe) {
      iframe.title = "Formulário Kommo";
      observerIframe.disconnect();
    }
    });

    observerIframe.observe(document.getElementById("section-2-form"), {
      childList: true,
      subtree: true
    });
});

function toggleAnswer(element) {
  const answer = element.querySelector(".faq-answer");
  const isVisible = answer.style.display === "block";

  if (isVisible) {
    answer.style.display = "none";
    element.classList.remove("open");
  } else {
    answer.style.display = "block";
    element.classList.add("open");
  }
}
