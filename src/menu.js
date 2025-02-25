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

const sides1 = document.createElement("div");
const sides1H = document.createElement("h1");
const sides1D = document.createElement("p");
const sides1Price = document.createElement("h2");
const sides1Img = document.createElement("img");

const sides2 = document.createElement("div");
const sides2H = document.createElement("h1");
const sides2D = document.createElement("p");
const sides2Price = document.createElement("h2");
const sides2Img = document.createElement("img");

sides1.appendChild(sides1H);
sides1.appendChild(sides1D);
sides1.appendChild(sides1Price);
sides1.appendChild(sides1Img);

sides2.appendChild(sides2H);
sides2.appendChild(sides2D);
sides2.appendChild(sides2Price);
sides2.appendChild(sides2Img);

sides.appendChild(sides1);
sides.appendChild(sides2);

const mainDish1 = document.createElement("div");
const mainDish2 = document.createElement("div");
const mainDish3 = document.createElement("div");
const mainDish4 = document.createElement("div");
const mainDish5 = document.createElement("div");
const mainDish6 = document.createElement("div");
const mainDish7 = document.createElement("div");
const mainDish8 = document.createElement("div");

const mainDish1H = document.createElement("h1");
const mainDish1D = document.createElement("p");
const mainDish1Price = document.createElement("h2");
const mainDish1Img = document.createElement("img");

const mainDish2H = document.createElement("h1");
const mainDish2D = document.createElement("p");
const mainDish2Price = document.createElement("h2");
const mainDish2Img = document.createElement("img");

const mainDish3H = document.createElement("h1");
const mainDish3D = document.createElement("p");
const mainDish3Price = document.createElement("h2");
const mainDish3Img = document.createElement("img");

const mainDish4H = document.createElement("h1");
const mainDish4D = document.createElement("p");
const mainDish4Price = document.createElement("h2");
const mainDish4Img = document.createElement("img");

mainDish1.appendChild(mainDish1H);
mainDish1.appendChild(mainDish1D);
mainDish1.appendChild(mainDish1Price);
mainDish1.appendChild(mainDish1Img);

mainDish2.appendChild(mainDish2H);
mainDish2.appendChild(mainDish2D);
mainDish2.appendChild(mainDish2Price);
mainDish2.appendChild(mainDish2Img);

mainDish3.appendChild(mainDish3H);
mainDish3.appendChild(mainDish3D);
mainDish3.appendChild(mainDish3Price);
mainDish3.appendChild(mainDish3Img);

mainDish4.appendChild(mainDish4H);
mainDish4.appendChild(mainDish4D);
mainDish4.appendChild(mainDish4Price);
mainDish4.appendChild(mainDish4Img);

mainDish5.appendChild(mainDish5H);
mainDish5.appendChild(mainDish5D);
mainDish5.appendChild(mainDish5Price);
mainDish5.appendChild(mainDish5Img);

mainDish6.appendChild(mainDish6H);
mainDish6.appendChild(mainDish6D);
mainDish6.appendChild(mainDish6Price);
mainDish6.appendChild(mainDish6Img);

mainDish7.appendChild(mainDish7H);
mainDish7.appendChild(mainDish7D);
mainDish7.appendChild(mainDish7Price);
mainDish7.appendChild(mainDish7Img);

mainDish8.appendChild(mainDish8H);
mainDish8.appendChild(mainDish8D);
mainDish8.appendChild(mainDish8Price);
mainDish8.appendChild(mainDish8Img);

mainDishes.appendChild(mainDish1);
mainDishes.appendChild(mainDish2);
mainDishes.appendChild(mainDish3);
mainDishes.appendChild(mainDish4);
mainDishes.appendChild(mainDish5);
mainDishes.appendChild(mainDish6);
mainDishes.appendChild(mainDish7);
mainDishes.appendChild(mainDish8);
