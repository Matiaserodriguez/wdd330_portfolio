const ol = document.querySelector(".my-ol");

const links = [
  {
    label: "Week 1 notes",
    url: "/week1/index.html",
  },
  {
    label: "Week 2 notes",
    url: "/week2/index.html",
  },
];

links.forEach((element) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", element.url);
  a.textContent = element.label;
  li.appendChild(a);
  ol.appendChild(li);
});
