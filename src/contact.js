function loadContactPage(){
  const contactPageContainer = document.createElement("div");
  const titleContainer = document.createElement("div");
  const titleP = document.createElement("p");
  titleP.textContent = "Contact Us";
  titleContainer.appendChild(titleP);  

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
}
