console.log("JS Loaded in the client");

const searchField = document.getElementById("show-search");
const select = document.getElementById("show-select");
const details = document.getElementById("show-details");
const searchForm = document.getElementById("search");

searchForm.addEventListener("submit", handleSubmit);
select.addEventListener("change", handleChange);

function addToSelection(keyWord, listOfShows) {
  let options = `<option value="">Shows matching ${keyWord}...</option>`;

  listOfShows.forEach((element) => {
    const show = element.show;
    options += `<option value="${show.id}"> ${show.name} </option>`;
    select.innerHTML = options;
  });
}

function handleChange(event) {
  event.preventDefault();
  const showId = select.value;
  if (!showId) return;

  fetch(`https://api.tvmaze.com/shows/${showId}`)
    .then((response) => response.json())
    .then((show) => {
      const showDetailsHTML = `<h2>${show.name}</h2>
      <img src="${show.image.original}">
      <p> ${show.summary} </p>`;
      details.innerHTML = showDetailsHTML;
    });
}

function handleSubmit(event) {
  event.preventDefault();
  const keyWord = searchField.value;

  fetch(`https://api.tvmaze.com/search/shows?q=${keyWord}`)
    .then((response) => response.json())
    .then((listOfShows) => addToSelection(keyWord, listOfShows));
}
