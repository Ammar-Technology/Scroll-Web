let stars = document.getElementById("stars");
let Ammar = document.querySelector(".Ammar");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
window.onscroll = function () {
  let value = window.scrollY; // استخدام window.scrollY

  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 1.5 + "px";
  mountains4.style.top = value * 1.2 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  Ammar.style.fontSize = value + "px";

  if (value >= 62) {
    Ammar.style.fontSize = "62px";
  }

  if (value >= 92) {
    document.body.style.backgroundImage = "linear-gradient(red, yellow)";
  } else {
    document.body.style.backgroundImage = "linear-gradient(#000031, black)";
  }

  if (value <= 30) {
    Ammar.style.fontSize = "30px";
  }
};
