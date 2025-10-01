"use strict";

// -----MOVIE OBJEKTERNE------- 

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


// movie 2: Dune
const duneMovie = {
  id: 2,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice."
};

console.log("Dune movie object:", duneMovie);


// movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 3,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image: "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
};

console.log("Dune: Part Two movie object:", duneTwoMovie);


// movie 4: Everything Everywhere All at Once 
const everythingEverywhereMovie = {
    id: 4,
    title: "Everything Everwhere All at Once",
    year: 2022,
    genre: ["Action", "Adventure", "Comedy"],
    rating: 7.8, 
    directors: ["Daniel Kwan", "Daniel Scheinert"],
    image: "https://m.media-amazon.com/images/M/MV5BOWNmMzAzZmQtNDQ1NC00Nzk5LTkyMmUtNGI2N2NkOWM4MzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    actors: ["Michelle Yeoh", "Ke Huy Quan"],
    description: "Everything is upside down in this whirling universe"
};

console.log("Everything Everywhwere All at Once object:", everythingEverywhereMovie);


// movie 5: Fight Club 
const fightClubMovie = {
    id: 5, 
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    rating: 8.8,  
    director: "David Fincher",
    image: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    actors: ["Edward Norton", "brad Pitt", "Helena Bonham Carter"],
    description: "people fight it out in this movie"
};

console.log("Fight Club:", fightClubMovie);


// movie 6: Forrest Gump
const forrestGumpMovie = {
    id: 6,
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    rating: 8.8, 
    director: "Robert Zemeckis",
    image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    actors: ["Tom Hanks", "Robin Wright"],
    description: "A nice and mild man navigates through a series of struggles while inspiring the people around him"
};

console.log("Forrest Gump", forrestGumpMovie);


// movie 7: Goodfellas
const goodFellasMovie = {
    id: 7,
    title: "Good Fellas",
    year: 1990,
    genre: ["Biography", "Crime", "Drama"],
    rating: 8.7, 
    director: "Martin Scorsese",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg",
    actors: ["Ray Liotta", "Robert De Niro", "Joe Pesci"],
    description: "gangsters and the mafia is the key in thsi excilirating movie"
};

console.log("Good Fellas", goodFellasMovie);


// movie 8: Inception
const inceptionMovie = {
    id: 8,
    title: "Inception",
    year: 2010,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.8, 
    director: "Christopher Nolan", 
    image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    actors: ["Leonardo Di Caprio", "Cillian Murphey", "Joseph Gordon-Levitt"],
    description: "A dream in a dream in a dream in a dream"
};

console.log("Inception", inceptionMovie);


//------EKSPERIMENTER MED DATA------
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


