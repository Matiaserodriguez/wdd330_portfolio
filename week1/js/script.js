console.log("Hola");

const loadStory = () => {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = localStorage.getItem(storyName);
  document.getElementById("story_editor").value = storyHTML;
};
const saveStory = () => {
  let storyName = document.getElementById("name_input").value;
  let storyHTML = document.getElementById("story_editor").value;
  localStorage.setItem(storyName, storyHTML);
};
const displayStory = () => {
  let storyHTML = document.getElementById("story_editor").value;
  document.getElementById("story_display").innerHTML = storyHTML;
};
