export const projectsJSON = async (key, baseURL) => {
    try {
      const response = await fetch(`${baseURL}`);
      const wholeResponse = await response.json();
      let theList = wholeResponse[key];
        theList.forEach((element) => {
        //   console.log(element);
          const sectionCards = document.querySelector(".projects");
          const theCard = document.createElement("div");
          theCard.setAttribute("class", "card");
          let h3 = document.createElement("h3");
          let image = document.createElement("img");
          let link = document.createElement("p");
          h3.innerHTML = element.name;
          image.setAttribute("src", `images/${element.logo}`);
          image.setAttribute("alt", `${element.name}'s photo`);
          link.innerHTML = `<a href="${element.link}">${element.name}'s page<a>`;
          theCard.appendChild(h3);
          theCard.appendChild(image);
          theCard.appendChild(link);
          sectionCards.appendChild(theCard);
        });
    } catch (error) {
      console.log(error);
    }
  };
  