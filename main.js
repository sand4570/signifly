"use strict";

import "./sass/style.scss";

document.addEventListener("DOMContentLoaded", init);

//Object containing the users data
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
  painOther: "",
  gaming: "",
  computer: "",
  feeling: "",
  improve: "",
};

//-----------change on scroll----------------
window.onscroll = function () {
  navScroll();
};

function navScroll() {
  if (document.documentElement.scrollTop > 0) {
    document.querySelector("nav").classList.add("scrolled");
    document.querySelector("h1").classList.add("animate");
    document.querySelector("#heading p").classList.add("animate");
    document.querySelector("#h1_second").classList.add("animate");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
    document.querySelector("h1").classList.remove("animate");
    document.querySelector("#heading p").classList.remove("animate");
    document.querySelector("#h1_second").classList.remove("animate");
  }

  if (document.documentElement.scrollTop > 200) {
    document.querySelector("#button_wrapper").classList.add("button_animate");
  } else {
    document
      .querySelector("#button_wrapper")
      .classList.remove("button_animate");
  }
}

//Starting function
function init() {
  events();
  suitMyGoal();
}
//make body not scrollable when the overlay is active
function suitMyGoal() {
  document.querySelector("#form_button").addEventListener("click", function () {
    console.log("suit my goal just got clicked");
    document.querySelector("#button_wrapper").classList.add("hidden");
    document.querySelector("body").classList.add("no_scroll");
    document.querySelector("#form-wrapper").classList.remove("hidden");
  });
  document.querySelector(".close-btn").addEventListener("click", function () {
    console.log("close button clicked");
    document.querySelector("#button_wrapper").classList.remove("hidden");
    document.querySelector("body").classList.remove("no_scroll");
    document.querySelector("#form-wrapper").classList.add("hidden");
  });
}

function events() {
  document.querySelector("#button1").addEventListener("click", (e) => {
    e.preventDefault();
    const percent = 33;

    const formEls = document.querySelectorAll("#personal-info input");
    console.log(formEls);

    let isValid = true;
    formEls.forEach((el) => {
      if (!el.checkValidity()) {
        isValid = false;
      }
    });

    if (isValid) {
      console.log("valid");

      saveDataInfo();
      setName();

      document.querySelector("#stop1").classList.remove("active-progress");
      document.querySelector("#stop2").classList.add("active-progress");

      changePage(percent, 1);
      document
        .querySelector("#form-wrapper")
        .scrollTo({ top: 0, behavior: "smooth" });
    } else {
      console.log("invalid");
    }
  });

  document.querySelector("#button2").addEventListener("click", (e) => {
    e.preventDefault();
    const percent = 66;

    saveDataGames();
    if (data.games.length > 0) {
      document.querySelector("#stop2").classList.remove("active-progress");
      document.querySelector("#stop3").classList.add("active-progress");

      changePage(percent, 2);
      document
        .querySelector("#form-wrapper")
        .scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  document.querySelector("#button3").addEventListener("click", (e) => {
    e.preventDefault();
    const percent = 100;

    saveDataPersonal();
    calculateResult();

    document.querySelector("#stop3").classList.remove("active-progress");
    document.querySelector("#stop4").classList.add("active-progress");

    changePage(percent, 3);
    document
      .querySelector("#form-wrapper")
      .scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelector("#back_button3").addEventListener("click", (e) => {
    e.preventDefault();
    const percent = 66;

    document.querySelector("#stop4").classList.remove("active-progress");
    document.querySelector("#stop3").classList.add("active-progress");

    changePage(percent, 4);
    document
      .querySelector("#form-wrapper")
      .scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelector("#back_button2").addEventListener("click", (e) => {
    e.preventDefault();
    const percent = 33;

    document.querySelector("#stop3").classList.remove("active-progress");
    document.querySelector("#stop2").classList.add("active-progress");

    changePage(percent, 5);
    document
      .querySelector("#form-wrapper")
      .scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelector("#back_button1").addEventListener("click", (e) => {
    e.preventDefault();
    const percent = 0;

    document.querySelector("#stop2").classList.remove("active-progress");
    document.querySelector("#stop1").classList.add("active-progress");

    changePage(percent, 6);
    document
      .querySelector("#form-wrapper")
      .scrollTo({ top: 0, behavior: "smooth" });
  });

  document.querySelectorAll(".game").forEach((game) => {
    game.addEventListener("click", checkboxLimit);
  });

  document.querySelector("#other").addEventListener("click", toggleText);

  document.querySelector("#sleep").addEventListener("input", displayRange);
  document.querySelector("#energy").addEventListener("input", displayRange);
  document.querySelector("#workout").addEventListener("input", displayRange);
  document.querySelector("#gaming").addEventListener("input", displayRange);
}

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
  } else if (count === 4) {
    document.querySelector("#porsonalise-question").classList.remove("hide");
    document.querySelector("#result").classList.add("hide");
  } else if (count === 5) {
    document.querySelector("#game-questions").classList.remove("hide");
    document.querySelector("#porsonalise-question").classList.add("hide");
  } else if (count === 6) {
    document.querySelector("#personal-info").classList.remove("hide");
    document.querySelector("#game-questions").classList.add("hide");
  }

  const pregress = document.querySelector("#progressbar");

  pregress.value = percent;
}

//Function to display range
function displayRange(event) {
  const value = event.target.value;
  const id = event.target.id;

  const container = document.querySelector(`#${id}-amount`);

  container.textContent = value;
}

//Function to save input data as an object (first page)
function saveDataInfo() {
  data.name = document.querySelector("#name").value;
  data.age = document.querySelector("#age").value;
  data.mail = document.querySelector("#mail").value;
  data.password = document.querySelector("#password").value;

  console.log(data);
}

//Function to save input data as an object (second page)
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

//Function to save input data as an object (third page)
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

  if (painAr.includes("Other")) {
    data.painOther = document.querySelector("#other-txt").value;
  }
  data.pain = painAr;

  data.gaming = document.querySelector("#gaming").value;
  data.computer = document.querySelector(
    'input[name="game-run"]:checked'
  ).value;
  data.feeling = document.querySelector('input[name="feeling"]:checked').value;
  data.improve = document.querySelector('input[name="improve"]:checked').value;
}

//Function placing the name of the user on the following pages
function setName() {
  console.log("satName");
  document.querySelector("#game-questions h2").innerHTML += ` ${data.name}`;
  document.querySelector(
    "#porsonalise-question h2"
  ).innerHTML += ` ${data.name}`;
}

//Function finding the types of games the user plays from the games selected
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

//Function calculating witch articles to show the user
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

  if (data.sleep < 6 || data.ernergy > 5) {
    console.log("sleep");
    sleepIcon.classList.remove("hide");
  }
  if (data.ernergy > 5 || data.diet === "unhealthy") {
    console.log("diet");
    nutritionIcon.classList.remove("hide");
  }
  if (data.workout < 3 || !data.pain.includes("None")) {
    console.log("physiology");
    physiologyIcon.classList.remove("hide");
  }
  if (
    data.pain.includes("Ear pain") ||
    data.pain.includes("Ringing of the ear")
  ) {
    console.log("hearing");
    hearingIcon.classList.remove("hide");
  }
  if (!data.pain === "None") {
    console.log("injury");
    injuriIcon.classList.remove("hide");
  }
  if (data.gaming < 5) {
    console.log("training");
    trainingIcon.classList.remove("hide");
  }
  if (data.computer === "fine" || data.computer === "bad") {
    console.log("computer");
    technologyIcon.classList.remove("hide");
  }
  if (!data.feeling === "the-zone") {
    console.log("mindset");
    mindsetIcon.classList.remove("hide");
  }
  if (data.feeling === "stressed") {
    console.log("stressed");
    stressIcon.classList.remove("hide");
  }
  if (data.pain.includes("Headache")) {
    console.log("vision");
    visionIcon.classList.remove("hide");
  }
}

//limit to game checkboxes
function checkboxLimit() {
  const limit = 5;
  let check = 0;

  document.querySelectorAll(".game").forEach((game) => {
    if (game.checked) {
      check++;
    }
  });

  document.querySelectorAll(".locked").forEach((lock) => {
    lock.classList.remove("locked");
  });

  if (limit === check) {
    document.querySelectorAll(".game").forEach((game) => {
      if (!game.checked) {
        const gameId = game.id;
        document.querySelector(`#${gameId} + label`).classList.add("locked");
      }
    });
  }
}

function toggleText() {
  if (document.querySelector("#other").checked) {
    document.querySelector("#other-txt").classList.remove("hide");
  } else {
    document.querySelector("#other-txt").classList.add("hide");
  }
}
