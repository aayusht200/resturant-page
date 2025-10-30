import "./style.css";

const header = document.getElementById("header");
const recipe = document.getElementById("recipe");
const footer = document.getElementById("footer");
function createDiv() {
  const div = document.createElement("div");
  return div;
}
function createAnchorTag() {
  const a = document.createElement("a");
  return a;
}
//Home
const home_a = createAnchorTag();
const home = createDiv();
home.classList.add("home");
home_a.href = "#";
home_a.textContent = "Home";
home.appendChild(home_a);
header.appendChild(home);

//menu
const menu_a = createAnchorTag();
const menu = createDiv();
menu.classList.add("menu");
menu_a.href = "#content";
menu_a.textContent = "Menu";
menu.append(menu_a);
header.append(menu);

//contact
const contact_a = createAnchorTag();
const contact = createDiv();
contact.classList.add("contact");
contact_a.href = "#footer";
contact_a.textContent = "Contact";
contact.append(contact_a);
header.append(contact);

//Home
const home_b = createAnchorTag();
const home_footer = createDiv();
home_footer.classList.add("home");
home_b.href = "#";
home_b.textContent = "Home";
home_footer.appendChild(home_b);
footer.appendChild(home_footer);

//menu
const menu_b = createAnchorTag();
const menu_footer = createDiv();
menu_footer.classList.add("menu");
menu_b.href = "#content";
menu_b.textContent = "Menu";
menu_footer.append(menu_b);
footer.append(menu_footer);

// //contact
const contact_b = createAnchorTag();
const contact_footer = createDiv();
contact_footer.classList.add("contact");
contact_b.href = "#footer";
contact_b.textContent = "Contact";
contact_footer.append(contact_b);
footer.append(contact_footer);

menu.addEventListener("click", (e) => {
  recipe.style.opacity = recipe.style.opacity == 1 ? 0 : 1;
});

menu_footer.addEventListener("click", (e) => {
  recipe.style.opacity = recipe.style.opacity == 1 ? 0 : 1;
});
