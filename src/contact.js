function loadContactPage(){
  const contactPageContainer = document.createElement("div");
  const titleContainer = document.createElement("div");
  const titleP = document.createElement("p");
  contactPageContainer.setAttribute('id', 'contactPageContainer');
  titleP.textContent = "Contact Us";
  titleContainer.appendChild(titleP);
  titleContainer.setAttribute('id', 'titleContainer');
 
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
      
      contactContaineri.setAttribute('id', 'contactContainer' + i);
      contactNamei.setAttribute('id', 'contactName' + i);
      contactuli.setAttribute('id', 'contactuli' + i);
      contactTitlei.setAttribute('id', 'contactTitle' + i);
      contactNumberi.setAttribute('id', 'contactNumber' + i);
      contactEmaili.setAttribute('id', 'contactEmail' + i);
      setContactInfo(i); 

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
  if(index == 2) {
    contactNamei.textContent = "General Brasch";
    contactTitlei.textContent = "General";
    contactNumberi.textContent= "1800-900-9999";
    contactEmaili.textContent = "GeneralBrasch@supermail.gov";
  }
  if(index == 3) {
    contactNamei.textContent = "Eagle1";
    contactTitlei.textContent = "Super Earth's Finest";
    contactNumberi.textContent= "1800-888-8888";
    contactEmaili.textContent = "Eagle1@supermail.gov";
  }
}

