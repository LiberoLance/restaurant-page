function loadContactPage(){
  const contactPageContainer = document.createElement("div");
  const titleContainer = document.createElement("div");
  const titleP = document.createElement("p");
  titleP.textContent = "Contact Us";
  titleContainer.appendChild(titleP);

  loadContact();  
}

function loadContact(){
    for(let i = 1; i < 3; i++) {
      const contactContaineri = document.createElement("div");
      const contactNamei = document.createElement("h1");
      const contactuli = document.createElement("ul");
      const contactTitlei = document.createElement("li");
      const contactNumberi = document.createElement(li);
      const contactEmaili = document.createElement("li");

      contactuli.appendChild(contactTitlei);
      contactuli.appendChild(contactNumberi);
      contactuli.appendChild(contactEmaili);
      contactContaineri.appendChild(contactNamei);
      contactContaineri.appendChild(contactuli);
    }
}

function setContactInfo(index) {
  if(index == 1) {
    contactNamei.textContent = "Joel";
    contactTitlei.textContent = "Joel";
    contactNumberi.textContent= "1800-888-8888";
    contactEmaili.textContent = "Joel@Joel.mail";
  }
}

