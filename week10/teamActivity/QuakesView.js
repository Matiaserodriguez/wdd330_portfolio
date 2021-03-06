// Quake View handler
export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
    //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    listElement.innerHTML = quakeList.features.map((quake) => {
        return `<li id="${quake.properties.ids}"> ${quake.properties.title}, ${new Date(quake.properties.time)} </li>`;
      })
      .join("");
  }
  renderQuake(quake, element) {
    const quakeProperties = Object.entries(quake.properties);
    element.innerHTML = `<button id='back' onclick='location.reload()'>Back</button>${quakeProperties.map((item) => {
      if (item[0] === "time" || item[0] === "updated") {
        return `<li>${item[0]}: ${new Date(item[1])}</li>`;
      } else
        return `<li>${item[0]}: ${item[1]}</li>`;
    }).join("")}`;
  }
}
