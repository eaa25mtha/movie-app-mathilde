// eksperimenter og øvelser med javascript kode

// Test hvordan du får adgang til movie data
console.log("=== TESTING MOVIE OBJECTS ===");

console.log("Barbie title:", barbieMovie.title);
console.log("Dune year:", duneMovie.year);
console.log("Fight Club rating:", fightClubMovie.rating);
console.log("Inception director:", inceptionMovie.director);


//template literals med objekter 
// Opret beskeder med movie data
console.log(`${barbieMovie.title} (${barbieMovie.year}) - Rating: ⭐ ${barbieMovie.rating}`);
console.log(`${duneMovie.title} er instrueret af ${duneMovie.director}`);
console.log(`${fightClubMovie.title} er fra ${fightClubMovie.year} og har rating ${fightClubMovie.rating}`);


// programmatisk arbejde med/ændre data
// Ændre rating
barbieMovie.rating = 7.5;
console.log("Updated Barbie rating:", barbieMovie.rating);

// Tilføje ny property
barbieMovie.watched = true;
console.log("Barbie movie with watched status:", barbieMovie);

// Beregne movie alder
const currentYear = new Date().getFullYear();
const barbieAge = currentYear - barbieMovie.year;
console.log(`${barbieMovie.title} er ${barbieAge} år gammel`);


//opret et individuelt movie objekt:
// movie 1: Barbie 
const barbieMovie = {
id: 1,
title: "Barbie",
year: 2023,
genre: ["Adventure", "Comedy", "Fantasy"],
rating: 7.0,
director: "Greta Gerwig",
image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie land for the real world."
};

console.log("Barbie movie object:", barbieMovie); //test om objektet virker i js


//html og dom funktion
// Find movie list container (gør det én gang)
const movieListContainer = document.querySelector("#movie-list");

//funktion der både genererer HTML og tilføjer til DOM
function displayMovie(movieObject) {
  // Konverter genre array til string
  const genreString = movieObject.genre.join(", ");

  const movieHTML = `
    <article class="movie-card" tabindex="0">
      <img src="${movieObject.image}" 
           alt="Poster of ${movieObject.title}" 
           class="movie-poster" />
      <div class="movie-info">
        <h3>${movieObject.title} <span class="movie-year">(${movieObject.year})</span></h3>
        <p class="movie-genre">${genreString}</p>
        <p class="movie-rating">⭐ ${movieObject.rating}</p>
        <p class="movie-director"><strong>Director:</strong> ${movieObject.director}</p>
      </div>
    </article>
  `;

  // Tilføj direkte til DOM
  movieListContainer.insertAdjacentHTML("beforeend", movieHTML);
  console.log(`${movieObject.title} tilføjet til DOM!`);
} 

// 1. Tilføje en movie med ÉN linje (funktionen gør ALT arbejdet!)
displayMovie(barbieMovie);


//async og await, javascripts måde at hente data eksternt 
// Moderne async/await syntaks - nemt at læse og forstå!
async function loadMovies() {
  console.log("🚀 Henter movie data...");

  const response = await fetch("https://url-til-data.json");
  const data = await response.json();

  console.log("🎬 Data modtaget:", data);
  return data;
}


// MOVIE APP - SESSION 2 → 3 (færdig kode)
// ekstern JSON data i stedet for locale arrays

// Display single movie (virker til alt!)
function displayMovie(movieObject) {
  // ... din funktion
}

// Display all movies (virker til alt!)
function displayMovies(movieArray) {
  // ... din funktion
}

// Load and display movies with async/await
async function loadMovies() {
  console.log("🌐 Loading movies from external JSON...");
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json");
  const movies = await response.json();
  displayMovies(movies);
}

// Start the app
loadMovies();

