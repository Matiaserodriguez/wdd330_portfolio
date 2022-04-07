import { sendPostRequest } from "../services/callBack.js";
import { projectsJSON } from "../services/callJson.js";

const submitBtn = document.querySelector("#submit-btn");
const baseURL = "/challenge2/json/works.json";


submitBtn.addEventListener("click", (e) => { e.preventDefault(); sendPostRequest()});
projectsJSON("projects", baseURL);
