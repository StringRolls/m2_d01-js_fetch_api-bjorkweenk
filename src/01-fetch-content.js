"use strict";

//fetch('https://api.spacexdata.com/v4/launches')
fetch("https://swapi.dev/api/films")
  .then((response) => response.json())
  .then((data) =>
    data.results.forEach((movie) => {
      document.body.innerHTML += `<h1>${movie.title}</h1>
    <p>${movie.opening_crawl}</p>
    <br>`;
    })
  )

  /*  .then((data) => {
    data.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;

      const imgElement = document.createElement("img");

      imgElement.setAttribute("src", patchImage);
      imgElement.setAttribute("width", 200);
      document.body.appendChild(imgElement);
    });
  })
  */
  .catch((err) => console.log(err));
