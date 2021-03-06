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
  workout: "",
  pain: [],
  gaming: "",
  computer: "",
  feeling: "",
  improve: "",
};

//eventlisteners for buttons to move between sections of the form
document.querySelector("#button1").addEventListener("click", (e) => {
  e.preventDefault();
  const percent = 33;

  const form = document.querySelector("#personal-info input");

  if (form.checkValidity()) {
    console.log("valid");

    saveDataInfo();
    setName();
    changePage(percent, 1);
  } else {
    console.log("invalid");
  }
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

  saveDataPersonal();
  calculateResult();

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

function saveDataGames() {
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

function saveDataPersonal() {
  data.sleep = document.querySelector("#sleep").value;
  data.ernergy = document.querySelector("#energy").value;
  data.diet = document.querySelector('input[name="diet"]:checked').value;
  data.workout = document.querySelector("#workout").value;

  const painAr = [];

  document.querySelectorAll(".pain").forEach((pain) => {
    if (pain.checked) {
      painAr.push(pain.value);
    }
  });

  if (document.querySelector("#other-txt").value) {
    painAr.push(document.querySelector("#other-txt").value);
  }
  data.pain = painAr;

  data.gaming = document.querySelector("#gaming").value;
  data.computer = document.querySelector(
    'input[name="game-run"]:checked'
  ).value;
  data.feeling = document.querySelector('input[name="feeling"]:checked').value;
  data.improve = document.querySelector('input[name="improve"]:checked').value;
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

function calculateResult() {
  console.log("calculateResult");
  const injuriIcon = document.querySelector("#injuries-icon");
  const trainingIcon = document.querySelector("#training-icon");
  const nutritionIcon = document.querySelector("#nutrition-icon");
  const physiologyIcon = document.querySelector("#physiology-icon");
  const mindsetIcon = document.querySelector("#mindset-icon");
  const sleepIcon = document.querySelector("#sleep-icon");
  const hearingIcon = document.querySelector("#hearing-icon");
  const visionIcon = document.querySelector("#vision-icon");
  const technologyIcon = document.querySelector("#technology-icon");
  const stressIcon = document.querySelector("#stress-icon");

  if (data.sleep < 6) {
    console.log("sleep");
    sleepIcon.classList.remove("hide");
  }
}

function setName() {
  console.log("satName");
  document.querySelector("#game-questions h2").innerHTML += ` ${data.name}`;
  document.querySelector(
    "#porsonalise-question h2"
  ).innerHTML += ` ${data.name}`;
}
