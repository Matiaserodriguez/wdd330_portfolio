import {
  getValueFromDom,
  renderThanksElement,
} from "../functions/functions.js";

export const sendPostRequest = () => {
  const name = getValueFromDom("#name");
  const email = getValueFromDom("#email");
  const companyPost = getValueFromDom("#companyPost");
  const message = getValueFromDom("#message");

  // https://duhwkkwmy0.execute-api.us-east-1.amazonaws.com/send-email

  fetch("https://duhwkkwmy0.execute-api.us-east-1.amazonaws.com/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      company: companyPost,
      message: message,
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then((element) => {
      const thanks = document.querySelector(".thank-you");
      const emailPost = document.querySelector(".emailPost");
      renderThanksElement(name, thanks, emailPost);
      console.log(element);
    })
    .catch((e) => {
      console.log(e.error);
    });
};
