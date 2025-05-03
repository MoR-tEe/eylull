const container = document.getElementById("heart-container");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 20 + "px";
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 500);
