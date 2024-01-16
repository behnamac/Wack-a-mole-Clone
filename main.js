import { score } from "./score.js";
import { gameManager } from "./gameManager.js";

let currentMole;
let currentBomb;
let _score = new score();
let _gameManager = new gameManager();
const maxHoles = 9;

window.onload = initialize;

function initialize() {
  createTiles();
  setupGame();
}

function createTiles() {
  const board = document.getElementById("board");
  for (let i = 0; i < maxHoles; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    board.appendChild(tile);
  }
}

function setupGame() {
  setInterval(setMole, 2000);
  setInterval(setBomb, 3000);
}

var getRandomHole = () => {
  return Math.floor(Math.random() * maxHoles);
};

function setMole() {
  if (_gameManager.isGameOver()) {
    return;
  }
  if (currentMole) {
    currentMole.innerHTML = "";
  }
  let randomIMG = Math.floor(Math.random() * 2);
  let mole = document.createElement("img");
  if (randomIMG !== 0) mole.src = "./Assets/mole1.png";
  else mole.src = "./Assets/mole2.png";
  let num = getRandomHole();
  if (currentMole && currentMole.id == num) return;
  currentMole = document.getElementById(num);
  currentMole.appendChild(mole);
}

function setBomb() {
  if (_gameManager.isGameOver()) {
    return;
  }
  if (currentBomb) {
    currentBomb.innerHTML = "";
  }
  let bomb = document.createElement("img");
  bomb.src = "./Assets/bomb.png";
  let num = getRandomHole();
  if (currentBomb && currentBomb.id == num) return;
  currentBomb = document.getElementById(num);
  currentBomb.appendChild(bomb);
}

function selectTile() {
  if (_gameManager.isGameOver()) {
    return;
  }
  if (this == currentMole) {
    let value = 1;
    _score.setScore(value);
  } else {
    _score.setScore("GameOver!" + _score.getScore());
    _gameManager.endGame();
  }
}
