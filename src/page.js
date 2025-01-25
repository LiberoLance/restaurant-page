function loadPage() {
  const content = document.getElementById("content");
  const navHome = document.getElementById("home");
  const navMenu = document.getElementById("menu");
  const navAbout = document.getElementById("about");

  navHome.textContent = "Home";
  navMenu.textContent = "Menu";
  navAbout.textContent = "About";
  
  const contentImg = document.createElement("img");
  const contentH = document.createElement("h1");
  const contentP = document.createElement("p");

  contentImg.setAttribute("alt", "A plate of fancy food");
  contentH.textContent = "Welcome to the SUPER RESTAURANT!";
  contentP.textContent = "Here at the super Restuarant we only serve the finestin fine dinning. Our Chefs are world reknown and expertly trained in dishing out the very best meals money can provide.";

  content.appendChild(contentImg);
  content.appendChild(contentH);
  content.appendChild(contentP);
}

export { loadPage };
