// Movement Animetion to Happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Movement Animetion event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateY(${xAxis}deg)  rotateX(${yAxis}deg)`;
});

// Animation in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  //POP out
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotate(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animation out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg)  rotateX(0deg)`;

  //POP back
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotate(0deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
