export function getValueFromDom(element) {
    return document.querySelector(element).value;
}

export function renderThanksElement(name, hiddenElement, nonHiddenElement) {
    hiddenElement.classList.remove("hidden");
    nonHiddenElement.classList.add("hidden");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    h2.textContent = `Thank you ${name}`;
    p.textContent = "I've received your email and will get back to you as soon as possible!";

    hiddenElement.appendChild(h2);
    hiddenElement.appendChild(p);

    return hiddenElement;
}