"use strict";

const explorerImg = document.querySelector(".Explorer_img");
const moonImg = document.querySelector(".moon_img");
const aboutUS = document.querySelector(".about_us");
const aboutUsCards = document.querySelector(".about_us_left_cards");
const arrowIcon = document.querySelector(".icon");

let lastScrollPosition = 0;

function handleScroll() {
  const scrollPosition = window.scrollY;

  const scrollDirection = scrollPosition > lastScrollPosition ? "down" : "up";

  lastScrollPosition = scrollPosition;

  const rect = aboutUS.getBoundingClientRect();
  const isScrollingWithinAboutUs =
    rect.top < window.innerHeight && rect.bottom >= 0;

  if (isScrollingWithinAboutUs && scrollDirection === "down") {
    moonImg.style.transform = "scale(1.3222, 1.3222)";
    moonImg.style.transition = "2s";
    explorerImg.style.transform = "scale(1.3222, 1.3222)";
    explorerImg.style.transition = "2s";
    aboutUsCards.style.transform = "translate(0%, 20%)";
    aboutUsCards.style.transition = "1s";
  } else {
    moonImg.style.transform = "scale(1, 1)";
    moonImg.style.transition = "2s";
    explorerImg.style.transform = "scale(1, 1)";
    explorerImg.style.transition = "2s";
    aboutUsCards.style.transform = "translate(0%, 0%)";
    aboutUsCards.style.transition = "1s";
  }
}

window.addEventListener("scroll", handleScroll);

//theArrowIconScrolling

arrowIcon.addEventListener("click", scrollToAboutUs);

function scrollToAboutUs(event) {
  event.preventDefault();

  const aboutUsSection = document.querySelector(".about_us");
  const aboutUsOffset = aboutUsSection.offsetTop;

  window.scrollTo({
    top: aboutUsOffset,
    behavior: "smooth",
  });
}
