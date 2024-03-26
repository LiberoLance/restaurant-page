export default function loadPage() {
  const content =  document.getElementById('content');
  const headline = document.createElement('p');
  headline.textContent = "Matt's cafe";
  const img = document.createElement('img');
  img.setAttribute('alt', "picture of coffee");
  const text = document.createElement('p');
  text.textContent = "Matt's cafe your one stop shop for a simple breakfast that's delicious and nutritous along with a nice cup of coffee or a proper brew of tea!";

  elobj = [headline, img, text];

  for(let i = 0; i < 3; i++){
    content.append(elobj[i]);
  }
}
