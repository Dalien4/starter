const image = document.querySelector(".site__image");
const nom = document.querySelector(".site__nom");
const role = document.querySelector(".site__role");
const description = document.querySelector(".site__description");
const precedant = document.querySelector("#precedant");
const suivant = document.querySelector("#suivant");
const mixte = document.querySelector(".site__bouton");

const starters = [
  {
    nom: "Susan Smith",
    role: "WEB DEVELOPER",
    description:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    image: "url('./images/user-1.jpg')",
  },
  {
    nom: "Anna Johnson",
    role: "WEB DESIGNER",
    description:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    image: "url('./images/user-1.jpg')",
  },
  {
    nom: "Peter Jones",
    role: "INTERN",
    description:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    image: "url('./images/user-1.jpg')",
  },
  {
    nom: "Bill Anderson",
    role: "THE BOSS",
    description:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schiltz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
    image: "url('./images/user-1.jpg')",
  },
];

let actuel = 0;

function setStarter() {
  nom.textContent = starters[actuel]["nom"];
  role.textContent = starters[actuel]["role"];
  description.textContent = starters[actuel]["description"];
}

setStarter();

suivant.addEventListener("click", function () {
  actuel === 3 ? (actuel = 0) : (actuel += 1);
  setStarter();
});

precedant.addEventListener("click", function () {
  actuel === 0 ? (actuel = 3) : (actuel -= 1);
  setStarter();
});

mixte.addEventListener("click", function () {
    actuel = Math.round(Math.random() * 3);
    setStarter();
});
