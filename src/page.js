const content = getElementById("content");

const contentImg = document.createElement("img");
const contentH = document.createElement("h1");
const contentP = document.createElement("p");

contentImg.setAttribute("alt", "A plate of fancy food");

content.appendChild(contentImg);
content.appendChild(contentH);
content.appendChild(contentP);
