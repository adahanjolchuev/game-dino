let caktus = document.querySelector("#kaktus");
let dino = document.querySelector("#dino");
const over = document.querySelector(".over");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList.add("jump") != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 400);
}

let isAlieve = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let kaktusLeft = parseInt(
    window.getComputedStyle(kaktus).getPropertyValue("left")
  );

  if (kaktusLeft < 50 && kaktusLeft > 0 && dinoTop >= 140) {
    over.style.display = 'none';
    // let h3 = document.createElement("h3");
    // h3.innerHTML = "GAME OVER!!!";
    alert("GAME OVER!!!");
  }
});
