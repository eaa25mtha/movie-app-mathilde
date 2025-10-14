"use strict";

//løsning til movie app i javascript
// #0: Listen for page load
window.addEventListener("load", initApp);

let allMovies = []; // Global array to hold all movies

// #1: Initialize the app
function initApp() {
  getMovies(); // Fetch and display movies
  document.querySelector("#search-input").addEventListener("input", filterMovies);
  document.querySelector("#genre-select").addEventListener("change", filterMovies);
  document.querySelector("#sort-select").addEventListener("change", filterMovies);
  document.querySelector("#year-from").addEventListener("input", filterMovies);
  document.querySelector("#year-to").addEventListener("input", filterMovies);
  document.querySelector("#rating-from").addEventListener("input", filterMovies);
  document.querySelector("#rating-to").addEventListener("input", filterMovies);
  document.querySelector("#clear-filters").addEventListener("click", clearAllFilters);
}

// #2: fetch movies fra JSON med async/await
async function getMovies() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  allMovies = await response.json();
  populateGenreDropdown(); // Udfyld dropdown med genres
  displayMovies(allMovies);
} 

// #3: display all movies 
function displayMovies(movies) {

  // Nulstil #movie-list HTML'en
  document.querySelector("#movie-list").innerHTML = "";

  // for-of loop, gennemløber alle movies og kører displayMovie-funktionen for hver movie
  for (const movie of movies) {
    displayMovie(movie);
  }
}

//html
// #4: displayMovie funktionen med click events 
function displayMovie(movie) {
  const movieList = document.querySelector("#movie-list");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movie.image}" 
           alt="Poster of ${movie.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movie.title} <span class="movie-year">(${movie.year})</span></h3>
        <p class="movie-genre">${movie.genre.join(", ")}</p>
        <p class="movie-rating">⭐ ${movie.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", movieHTML);

  // Tilføj click event til den nye card
  const newCard = movieList.lastElementChild;
  newCard.addEventListener("click", function () {
    console.log(`🎬 Klik på: "${movie.title}"`);
    showMovieModal(movie); // ÆNDRET: Fra showMovieDetails til showMovieModal
  });

  // Tilføj keyboard support
  newCard.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showMovieModal(movie); // ÆNDRET: Fra showMovieDetails til showMovieModal
    }
  });
}


// #5: filtermovies funktion, kombineret søgning, genre og sortering 
function filterMovies() {
  const searchValue = document.querySelector("#search-input").value.toLowerCase();
  const genreValue = document.querySelector("#genre-select").value;
  const sortValue = document.querySelector("#sort-select").value;
  const yearFrom = Number(document.querySelector("#year-from").value) || 0;
  const yearTo = Number(document.querySelector("#year-to").value) || 9999;
  const ratingFrom = Number(document.querySelector("#rating-from").value) || 0;
  const ratingTo = Number(document.querySelector("#rating-to").value) || 10;

  let filteredMovies = allMovies; // Start med alle movies

  // FILTRE
  // Søgetekst filter
   if (searchValue) {
    filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().includes(searchValue));
  }

  // Genre filter
  if (genreValue !== "all") {
    filteredMovies = filteredMovies.filter(movie => movie.genre.includes(genreValue));
  }
  
  // År range filter
  if (yearFrom > 0 || yearTo < 9999) {
    const before = filteredMovies.length;
    filteredMovies = filteredMovies.filter(movie => movie.year >= yearFrom && movie.year <= yearTo);
  }
 
  // Rating range filter 
  if (ratingFrom > 0 || ratingTo < 10) {
    const before = filteredMovies.length;
    filteredMovies = filteredMovies.filter(movie => movie.rating >= ratingFrom && movie.rating <= ratingTo);
  }

  // Sortering, altid til sidst
  if (sortValue === "title") {
    filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "year") {
    filteredMovies.sort((a, b) => b.year - a.year); // Nyeste først
  } else if (sortValue === "rating") {
    filteredMovies.sort((a, b) => b.rating - a.rating); // Højeste først
  }

  displayMovies(filteredMovies);
}


// #6: Udfyld genre-dropdown med alle unikke genrer
function populateGenreDropdown() {
  const genreSelect = document.querySelector("#genre-select");
  const genres = new Set();

  for (const movie of allMovies) {
    for (const genre of movie.genre) {
      genres.add(genre);
    }
  }

  // Fjern gamle options undtagen 'Alle genrer'
  genreSelect.innerHTML = '<option value="all">Alle genrer</option>';

  const sortedGenres = Array.from(genres).sort();
  for (const genre of sortedGenres) { //loop
    genreSelect.insertAdjacentHTML("beforeend", `<option value="${genre}">${genre}</option>`);
  }
}

// #7: Vis movie detaljer (midlertidig løsning med alert)
function showMovieDetails(movie) {

  // Vis i alert (midlertidig løsning)
  const movieInfo = `🎬 ${movie.title} (${movie.year})
🎭 ${movie.genre.join(", ")}
⭐ Rating: ${movie.rating}
🎯 Instruktør: ${movie.director}
👥 Skuespillere: ${movie.actors.join(", ")}

📝 ${movie.description}`;

  alert(movieInfo);
}

// #8: Ryd alle filtre 
function clearAllFilters() {

  // Ryd søgning og dropdown felter
  document.querySelector("#search-input").value = "";
  document.querySelector("#genre-select").value = "all";
  document.querySelector("#sort-select").value = "none";

  // Ryd de nye range felter
  document.querySelector("#year-from").value = "";
  document.querySelector("#year-to").value = "";
  document.querySelector("#rating-from").value = "";
  document.querySelector("#rating-to").value = "";

  // Kør filtrering igen (viser alle film)
  filterMovies();
}


//#9: modal dialog 
function showMovieModal(movie) {
  console.log("🎭 Åbner modal for:", movie.title);

  // Byg HTML struktur dynamisk
  const dialogContent = document.querySelector("#dialog-content");
  dialogContent.innerHTML = `
    <img src="${movie.image}" alt="Poster af ${movie.title}" class="movie-poster">
    <div class="dialog-details">
      <h2>${movie.title} <span class="movie-year">(${movie.year})</span></h2>
      <p class="movie-genre">${movie.genre.join(", ")}</p>
      <p class="movie-rating">⭐ ${movie.rating}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
      <p class="movie-description">${movie.description}</p>
    </div>
  `;

  // Åbn modalen
  document.querySelector("#movie-dialog").showModal();
}







