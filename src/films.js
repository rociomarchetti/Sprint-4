// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let directors = movies.map((value) => value.director);
  console.log('EXERCICE 1 ->', directors);
  return directors;
} 

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let directorFilms = movies.filter((movie) => movie.director === director);
  console.log('EXERCICE 2 ->', directorFilms);
  return directorFilms;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let directorFilms = getMoviesFromDirector(movies, director);
  let directorTotalScore = directorFilms
    .map((value) => value.score)
    .reduce((result, value) => result + value, 0);
  let directorAverage = directorTotalScore / directorFilms.length;
  console.log('EXERCICE 3 ->', directorAverage);
  return directorAverage;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  let filmsTitleList = movies.map((value) => value.title).sort();
  if (filmsTitleList.length > 20) {
    filmsTitleList.length = 20;
  }

  console.log('EXERCICE 4 ->', filmsTitleList);
  return filmsTitleList;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let orderedByYear = [...movies].sort((a, b) => a.year - b.year);
  let result = orderedByYear.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title > b.title) return 1;
      if (b.title > a.title) return -1;
    }
  });

  console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  let sameGenreFilms = movies.filter((movie) => movie.genre == genre && movie.score);
  let genreTotalScore = sameGenreFilms.reduce((result, movie) => result + movie.score, 0);
  let genreAverage = Number((genreTotalScore / sameGenreFilms.length).toFixed(2));

  console.log('EXERCICE 6 ->', genreAverage);
  return genreAverage;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
