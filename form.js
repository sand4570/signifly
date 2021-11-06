"use strict";

const data = {
  name: "",
  age: 0,
  mail: "",
  password: "",

  games: [],
  gameType: [],

  sleep: "",
  ernergy: "",
  diet: "",
};

//eventlisteners for buttons to move between sections of the form
document.querySelector("#button1").addEventListener("click", (e) => {
  e.preventDefault();
  const percent = 33;

  saveDataInfo();

  changePage(percent, 1);
});

document.querySelector("#button2").addEventListener("click", (e) => {
  e.preventDefault();
  const percent = 66;

  saveDataGames();

  changePage(percent, 2);
});

document.querySelector("#button3").addEventListener("click", (e) => {
  e.preventDefault();
  const percent = 100;
  changePage(percent, 3);
});

//Function to move between sections of the form
function changePage(percent, count) {
  if (count === 1) {
    document.querySelector("#personal-info").classList.add("hide");
    document.querySelector("#game-questions").classList.remove("hide");
  } else if (count === 2) {
    document.querySelector("#game-questions").classList.add("hide");
    document.querySelector("#porsonalise-question").classList.remove("hide");
  } else if (count === 3) {
    document.querySelector("#porsonalise-question").classList.add("hide");
    document.querySelector("#result").classList.remove("hide");
  }

  const pregress = document.querySelector("#progressbar");

  pregress.value = percent;
}

//Event listeners to display the value of a range

document.querySelector("#sleep").addEventListener("change", displayRange);
document.querySelector("#energy").addEventListener("change", displayRange);
document.querySelector("#workout").addEventListener("change", displayRange);
document.querySelector("#gaming").addEventListener("change", displayRange);

//Function to display range
function displayRange(event) {
  const value = event.target.value;
  const id = event.target.id;

  const container = document.querySelector(`#${id}-amount`);

  container.textContent = value;
}

//Function to save input data as an object
function saveDataInfo() {
  data.name = document.querySelector("#name").value;
  data.age = document.querySelector("#age").value;
  data.mail = document.querySelector("#mail").value;
  data.password = document.querySelector("#password").value;

  console.log(data);
}

async function saveDataGames() {
  const gameAr = [];

  document.querySelectorAll(".game").forEach((game) => {
    if (game.checked) {
      gameAr.push(game.value);
    }
  });

  findGameType(gameAr);

  data.games = gameAr;
  console.log(data);
}

function findGameType(array) {
  const gameTypeAr = [];

  if (
    array.includes("CS:GO") ||
    array.includes("Call of Duty") ||
    array.includes("Overwatch")
  ) {
    gameTypeAr.push("FPS");
  }

  if (array.includes("World of Warcraft")) {
    gameTypeAr.push("MMORPG");
  }

  if (array.includes("FIFA")) {
    gameTypeAr.push("Sports");
  }

  if (array.includes("X")) {
    gameTypeAr.push("Racing");
  }

  if (array.includes("X")) {
    gameTypeAr.push("Tower defense");
  }

  if (array.includes("Starcraft") || array.includes("Warcraft")) {
    gameTypeAr.push("RTS");
  }

  if (array.includes("The Sims")) {
    gameTypeAr.push("Simulation");
  }

  if (
    array.includes("Skyrim") ||
    array.includes("League of Legends") ||
    array.includes("Dota") ||
    array.includes("Valorant") ||
    array.includes("Diablo")
  ) {
    gameTypeAr.push("Role-playing");
  }

  if (array.includes("Minecraft")) {
    gameTypeAr.push("Adventure");
  }

  if (array.includes("Left for dead")) {
    gameTypeAr.push("Survival");
  }

  if (array.includes("Tekken") || array.includes("Mortal Combat")) {
    gameTypeAr.push("Fighting");
  }

  if (array.includes("Fortnite") || array.includes("PUBG")) {
    gameTypeAr.push("Battle royale");
  }

  if (array.includes("Guitar Hero")) {
    gameTypeAr.push("Rhythm");
  }

  if (array.includes("Super Mario")) {
    gameTypeAr.push("Platform");
  }

  data.gameType = gameTypeAr;
}
