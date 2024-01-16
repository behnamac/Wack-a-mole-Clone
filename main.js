let currentMole;
let maxHoles;

window.onload = function () {
  initialize();
};

function initialize() {
  maxHoles = 9;
  for (let i = 0; i < maxHoles; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    document.getElementById("board").appendChild(tile);
    setInterval(setMole, 2000);
  }
}

var getRandomHole = () => {
  let random = Math.floor(Math.random() * maxHoles);
  return random.toString();
};

function setMole() {
  let mole = document.createElement("img");
  mole.src = "./Assets/mole1.png";
  let num = getRandomHole();
  currentMole = document.getElementById(num);
  currentMole.appendChild(mole);
}
