function loadPage() {
  const content = getElementById("content");

  const contentImg = document.createElement("img");
  const contentH = document.createElement("h1");
  const contentP = document.createElement("p");

  contentImg.setAttribute("alt", "A plate of fancy food");
  contentH.textContent = "Welcome to the SUPER RESTAURANT!";
  contentP.textContent = "Here at the super Restuarant we only serve the finest
  in fine dinning. Our Chefs are world reknown and expertly trained in dishing
  out the very best meals money can provide.";

  content.appendChild(contentImg);
  content.appendChild(contentH);
  content.appendChild(contentP);
}

export { loadPage };
