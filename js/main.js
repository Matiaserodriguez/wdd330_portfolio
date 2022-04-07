const ol = document.querySelector(".my-ol");

const links = [
  {
    label: "WEEK 1 notes",
    url: "week1/index.html",
  },
  {
    label: "WEEK 2 notes",
    url: "week2/index.html",
  },
  {
    label: "WEEK 3 notes",
    url: "week3/index.html",
  },
  {
    label: "WEEK 4 notes",
    url: "week4/index.html",
  },
  {
    label: "WEEK 5 notes",
    url: "week5/index.html",
  },
  {
    label: "WEEK 6 ToDo APP",
    url: "todos/index.html",
  },
  {
    label: "WEEK 7",
    url: "week7/index.html",
  },
  {
    label: "WEEK 8",
    url: "week8/index.html",
  },
  {
    label: "WEEK 9",
    url: "week9/",
  },
  {
    label: "WEEK 10",
    url: "week10/",
  },
  {
    label: "WEEK 11",
    url: "week11/",
  },
  {
    label: "2ND CHALLENGE",
    url: "challenge2/",
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
