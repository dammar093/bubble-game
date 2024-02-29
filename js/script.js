function createBubble() {
  var bubble = "";

  for (let i = 0; i <= 111; i++) {
    bubble += `<div class="bubble">${Math.ceil(Math.random() * 10)}</div>`;
  }
  document.querySelector(".bottom").innerHTML = bubble;
}

// createBubble();
let closeTimer=0;
function gameTime() {
  let timer = 60;

  closeTimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").textContent = timer;
    } else {
      clearInterval(closeTimer);
      document.querySelector(
        ".bottom"
      ).innerHTML = `<h1 class="over">Game Over</h1>`;
    }
  }, 1000);
}
//gameTime();

let target = 0;
function createHit() {
  target = Math.ceil(Math.random() * 10);
  document.getElementById("hit").textContent = target;
}

// createHit();

let Hitbubble = document.querySelector(".bottom");
// console.log(Hitbubble);

let score = 0;

Hitbubble.addEventListener("click", (elm) => {
  console.log(elm)
  let HitNum = Number(elm.target.textContent);
  if (HitNum === target) {
    score += 10;
    document.getElementById("score").textContent = score;
    createBubble();
    createHit();
  } else {
    document.querySelector(
      ".bottom"
    ).innerHTML = `<h1 class="over">Game Over</h1>`;
    clearInterval(closeTimer);
  }
});

let start = document.getElementById("start");
start.addEventListener("click", function (e) {
  e.stopPropagation();
  createBubble();
  createHit();
  gameTime();
});


