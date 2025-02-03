function loadPage() {
  const content = document.getElementById("content");
  const navHome = document.getElementById("home");
  const navMenu = document.getElementById("menu");
  const navAbout = document.getElementById("about");

  navHome.textContent = "Home";
  navMenu.textContent = "Menu";
  navAbout.textContent = "About";
  
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  const testimonial = document.createElement("div");
  testimonial.setAttribute("id", "testimonial");
  const hours = document.createElement("div");
  hours.setAttribute("id", "hours");
  const location = document.createElement("div");
  location.setAttribute("id","location");  
  const footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  const contentImg = document.createElement("img");
  const contentH = document.createElement("h1");
  const contentP = document.createElement("p");

  contentImg.setAttribute("alt", "A plate of fancy food");
  contentH.textContent = "Welcome to the SUPER RESTAURANT!";
  contentP.textContent = "Here at the super Restuarant we only serve the finestin fine dinning. Our Chefs are world reknown and expertly trained in dishing out the very best meals money can provide.";
 
  const listHours = document.createElement("ul");
  listHours.setAttribute("id", "listHours");

  //make a loop that makes the list items and then assign the right times
  for (let i = 1; i < 8; i++) {
     const day = document.createElement("li");
     day.setAttribute("id", i);
     if(i == 1){
       day.textContent = "Sunday: 8am - 8pm";
     }
     else if(i == 2){
       day.textContent = "Monday: 8am - 8pm";
     }
     else if(i == 3){
       day.textContent = "Tues: 8am - 8pm";
     }
     else if(i == 4){
       day.textContent = "Wednesday: 8am - 8pm";
     }
     else if(i == 5){
       day.textContent = "Thursday: 8am - 8pm";
     }
     else if(i == 6){
       day.textContent = "Friday: 8am - 8pm";
     }
     else {
       day.textContent = "Saturday: 8am - 8pm";
     }
     
     listHours.appendChild(day);
  }
  hours.appendChild(listHours);  
  
  content.appendChild(contentImg);
  content.appendChild(header);
  header.appendChild(contentH);
  content.appendChild(testimonial);
  content.appendChild(hours);
  content.appendChild(location);
  testimonial.appendChild(contentP);
  content.appendChild(footer);
}

export { loadPage };
