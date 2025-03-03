const page = document.createElement("div");
const header = document.createElement("div");
const beverageH = document.createElement("div");
const beverages = document.createElement("div");
const sidesH = document.createElement("div");
const sides = doucment.createElement("div");
const mainDishesH = document.createElement("div");
const mainDishes = document.createElement("div");
const footer = document.createElement("div");

function loadBeverages() {
  for(let i = 1; i < 3; i++) {
    const beveragei = document.createElement("div");
    const beverageiH = document.createElement("h1");
    const beverageiD = document.createElement("p");
    const beverageiPrice = document.createElement("h2");
    const beverageiImg = document.createElement("img");

    beveragei.appendChild(beverageiH);
    beveragei.appendChild(beverageiD);
    beveragei.appendChild(beverageiPrice);
    beveragei.appendChild(beverageiImg);
    
    beverages.appendChild(beveragei);
  }
}

loadBeverages();

function loadSides() {
  for(let i = 1; i < 3; i++) {
    const sidei = document.createElement("div");
    const sideiH = document.createElement("h1");
    const sideeiD = document.createElement("p");
    const sideiPrice = document.createElement("h2");
    const sideiImg = document.createElement("img");

    sidei.appendChild(sideiH);
    sidei.appendChild(sideiD);
    sidei.appendChild(sideiPrice);
    sidei.appendChild(sideiImg);

    sides.appendChild(sidei);
  }
}

loadSides();

function loadMains() {
  for(let i = 1; i < 9; i++) {
    const mainDishi = document.createElement("div");
    const mainDishiH = document.createElement("h1");
    const mainDishiD = document.createElement("p");
    const mainDishiPrice = document.createElement("h2");
    const mainDishiImg = document.createElement("img");

    mainDishi.appendChild(sideiH);
    mainDishi.appendChild(sideiD);
    mainDishi.appendChild(sideiPrice);
    mainDishi.appendChild(sideiImg);

    mainDishes.appendChild(mainDishi);
  }
}

loadMains();
