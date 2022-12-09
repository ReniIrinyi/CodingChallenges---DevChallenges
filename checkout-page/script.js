"use strict";
const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");
const input = document.querySelectorAll(".in-num");
const input1 = document.querySelector(".first");
const input2 = document.querySelector(".second");

const numberSpinner = function () {
  input.forEach((input) => (input.value = 0));
  next.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.target.classList.contains("next-1") ? input1.value-- : input2.value--;
    });
  });

  prev.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.target.classList.contains("prev-1") ? input1.value++ : input2.value++;
    });
  });
};
numberSpinner();
