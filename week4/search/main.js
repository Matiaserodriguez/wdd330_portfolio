// const form = document.forms.search;

// input.addEventListener("focus", () => alert("focused"), false);

// input.addEventListener("blur", () => alert("blurred"), false);

// input.addEventListener("change", () => alert("changed"), false);

const form = document.forms["search"];
const input = form.elements.searchInput;
form.addEventListener("submit", search, false);

// function search() {
//   alert(" Form Submitted");
// }

// function search(event) {
//   alert("Form Submitted");
//   event.preventDefault();
// }

input.value = "Search";

input.addEventListener(
  "focus",
  function () {
    if (input.value === "Search") {
      input.value = "";
    }
  },
  false
);

input.addEventListener(
  "blur",
  function () {
    if (input.value === "") {
      input.value = "Search";
    }
  },
  false
);

function search(event) {
  console.log(input.value);
  alert(`You Searched for: ${input.value}`);
  event.preventDefault();
}
