const form = document.forms["hero"];
form.addEventListener("submit", validate, false);
form.addEventListener("submit", makeHero, false);

function makeHero(event) {
  event.preventDefault();

  const hero = {};

  hero.name = form.heroName.value;

  hero.realName = form.realName.value;

  //   console.log(form.powers[0].checked);
  //   console.log(form.powers);
  //   console.log(typeof form.powers);

  //   hero.powers = [];
  //   for (let i = 0; i < form.powers.length; i++) {
  //     if (form.powers[i].checked) {
  //       hero.powers.push(form.powers[i].value);
  //     }
  //   }

  //   console.log([...form.powers]);
  //   console.log(typeof [...form.powers]);

  powers = [...form.powers];
  hero.powers = powers.filter((box) => box.checked).map((box) => box.value);

  hero.category = form.category.value;

  hero.age = form.age.value;

  hero.city = form.city.value;

  hero.origin = form.origin.value;

  alert(JSON.stringify(hero));
  return hero;
}

function validate(event) {
  const firstLetter = form.heroName.value[0];
  if (firstLetter.toUpperCase() === "X") {
    event.preventDefault();
    alert("Your name is not allowed to start with X!");
  }
}

document
  .querySelector("#heroName")
  .addEventListener("keyup", validateInline, false);

const label = form.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "Error! Your name is not allowed to start with X.";
label.append(error);

function validateInline() {
  const heroName = this.value.toUpperCase();
  if (heroName.startsWith("X")) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

form.heroName.addEventListener("keyup", disableSubmit, false);

function disableSubmit(event) {
  if (event.target.value === "") {
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }
}
