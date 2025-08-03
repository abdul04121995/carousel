const containerEl = document.querySelector(".container");
const slideEls = [...document.querySelectorAll(".slide")];
const imgEls = document.querySelectorAll(".img");
const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");
let index = 0;
let len = slideEls.length;

//
slideEls[index].classList.add("active");
//
nextEl.addEventListener("click", function () {
  if (index < len - 1) {
    slideEls[index + 1].classList.add("active");
    slideEls[index].classList.remove("active");
    index++;
  } else {
    slideEls[index].classList.remove("active");
    index = 0;
    slideEls[index].classList.add("active");
  }
});
prevEl.addEventListener("click", function () {
  if (index > 0) {
    slideEls[index].classList.remove("active");
    index--;
    console.log(index);
    slideEls[index].classList.add("active");
  } else {
    slideEls[index].classList.remove("active");
    index = len - 1;
    slideEls[index].classList.add("active");
  }
});
