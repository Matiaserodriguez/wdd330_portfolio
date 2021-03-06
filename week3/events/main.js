// function doSomething() {
//   console.log("Something Happened!");
// }

// addEventListener("click", doSomething);

// function giveMeEvent(event) {
//   console.log(event.type);
// }

// addEventListener("click", giveMeEvent);

// function giveMeTarget(event) {
//   console.log(event.target);
// }

// addEventListener("click", giveMeTarget);

const clickParagraph = document.getElementById("click");

clickParagraph.addEventListener("click", () => console.log("click"));
clickParagraph.addEventListener("mousedown", () => console.log("down"));
clickParagraph.addEventListener("mouseup", () => console.log("up"));

const dblclickParagraph = document.getElementById("dblclick");
dblclickParagraph.addEventListener("dblclick", highlight);

function highlight(event) {
  event.target.classList.toggle("highlight");
}

function highlightBack(event) {
  event.target.classList.toggle("background");
}

const mouseParagraph = document.getElementById("mouse");
mouseParagraph.addEventListener("mouseover", highlight);
mouseParagraph.addEventListener("mouseout", highlight);

addEventListener("keydown", highlightBack);
// addEventListener("keyup", (event) =>
//   console.log(`You stopped pressing the key on ${new Date()}`)
// );

addEventListener("keypress", (event) =>
  console.log(`You pressed the ${event.key} character`)
);

addEventListener("keydown", (event) =>
  console.log(`You pressed the ${event.key} character`)
);

addEventListener("touchmove", () => console.log("Touch stopped"));

const onceParagraph = document.getElementById("once");
onceParagraph.addEventListener("click", remove);

function remove(event) {
  console.log("Enjoy this while it lasts!");
  onceParagraph.style.backgroundColor = "pink";
  onceParagraph.removeEventListener("click", remove);
}

const brokenLink = document.getElementById("broken");

brokenLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Broken Link!");
});

ulElement = document.getElementById("list");
liElement = document.querySelector("#list li");

ulElement.addEventListener(
  "click",
  (event) => console.log("Clicked on ul"),
  true
);

liElement.addEventListener(
  "click",
  (event) => console.log("Clicked on li"),
  true
);

ulElement.addEventListener("click", highlight);
