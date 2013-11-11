/* 
  The primary goals of this excercise are to both gauge your comfortability level with the Javascript language and some of its characteristics. More importantly, this excercise will also be used as an initial gauge of design proficiency.

  Some of the constraints for the excercise are as follows:

  - Array (Limited to use of just the following methods)
    - sort
    - push

  - app/assets/javascripts/movies/genres.js and app/assets/javascripts/movies/studios.js cannot be modified

*/

build = {
  movieLibrary: function (movies){
    return new MovieLibrary(movies);
  }
};

describe('Movie Library', function(){
  describe('searching and sorting', function(){

    var indianaJonesAndTheTempleOfDoom = new Movie({ 
      title: "Indiana Jones And The Temple Of Doom", 
      releaseDate: new Date(1982, 1, 1, 0, 0, 0, 0),
      genre: GENRES.ACTION,
      studio: STUDIOS.UNIVERSAL, 
      rating: 10
    });

    var cars = new Movie({
      title:  "Cars", 
      releaseDate: new Date(2004, 1, 1, 0, 0, 0, 0), 
      genre: GENRES.KIDS, 
      studio: STUDIOS.PIXAR, 
      rating: 10
    });

    var yoursMineAndOurs = new Movie({
      title: "Yours, Mine and Ours",
      releaseDate: new Date(2005, 1, 1, 0, 0, 0, 0),
      genre: GENRES.COMEDY,
      studio: STUDIOS.MGM,
      rating:  7
    });

    var shrek = new Movie({
      title: "Shrek",
      releaseDate: new Date(2006, 5, 10, 0,0,0,0), 
      genre: GENRES.KIDS,
      studio: STUDIOS.DREAMWORKS,
      rating: 10
    });

    var aBugsLife = new Movie({ 
      title: "A Bugs Life",
      releaseDate: new Date(2000, 6, 20, 0, 0, 0, 0), 
      genre: GENRES.KIDS,
      studio: STUDIOS.PIXAR,
      rating:  10 
    });

    var theresSomethingAboutMary = new Movie({ 
      title: "There's Something About Mary",
      releaseDate: new Date(2007, 1, 1, 0, 0, 0, 0),
      genre: GENRES.COMEDY,
      studio: STUDIOS.MGM,
      rating: 5
    });

    var piratesOfTheCarribean = new Movie({ 
      title: "Pirates of the Carribean",
      releaseDate: new Date(2003, 1, 1, 0, 0, 0, 0), 
      genre: GENRES.ACTION,
      studio: STUDIOS.DISNEY,
      rating: 10
    });

    var originalMovies = [indianaJonesAndTheTempleOfDoom, cars, aBugsLife, theresSomethingAboutMary, piratesOfTheCarribean, yoursMineAndOurs, shrek];

    var sut = build.movieLibrary(originalMovies);

    describe('Searching for movies', function(){
      it('Can find all pixar movies', function(){
        var results = sut.allPixarMovies();

        expect(results).toEqual([
          cars, 
          aBugsLife
        ]);
      });

      it('Can find all pixar or disney movies', function(){
        var results = sut.allPixarOrDisneyMovies();


        expect(results).toEqual([
          cars, 
          aBugsLife, 
          piratesOfTheCarribean
        ]);
      });


      it('Can find all movies not published by pixar', function(){
        var results = sut.allMoviesNotPublishedByPixar();

        expect(results).toEqual([
          indianaJonesAndTheTempleOfDoom, 
          theresSomethingAboutMary,
          piratesOfTheCarribean,
          yoursMineAndOurs,
          shrek
        ]);
      });

      it('Can find all movies released after 2004', function(){
        var results = sut.allMoviesReleasedAfter(2004);

        expect(results).toEqual([
          theresSomethingAboutMary, 
          yoursMineAndOurs, 
          shrek
        ]);
      });

      it('Can find all movies released between 1982 and 2003 - Inclusive', function(){
        var results = sut.allMoviesReleasedBetweenYears(1982, 2003);

        expect(results).toEqual([
          indianaJonesAndTheTempleOfDoom, 
          aBugsLife, 
          piratesOfTheCarribean
        ]);
      });
    });

    describe('Sorting movies', function(){
      it('Sorts all movies by descending title', function(){
        var results = sut.sortAllMoviesByDescendingTitle();

        expect(results).toEqual([
          yoursMineAndOurs, 
          theresSomethingAboutMary, 
          shrek, 
          piratesOfTheCarribean, 
          indianaJonesAndTheTempleOfDoom, 
          cars, 
          aBugsLife
        ]);
      });


      it('Sorts all movies by ascending title', function(){
        var results = sut.sortAllMoviesByAscendingTitle();

        expect(results).toEqual([
          aBugsLife, 
          cars, 
          indianaJonesAndTheTempleOfDoom, 
          piratesOfTheCarribean, 
          shrek, 
          theresSomethingAboutMary,
          yoursMineAndOurs
        ]);
      });

      it('Sorts all movies by descending release date', function(){
        var results = sut.sortAllMoviesByDescendingReleaseDate();

        expect(results).toEqual([
          theresSomethingAboutMary, 
          shrek, 
          yoursMineAndOurs, 
          cars, 
          piratesOfTheCarribean, 
          aBugsLife, 
          indianaJonesAndTheTempleOfDoom
        ]);
      });

      it('Sorts all movies by ascending release date', function(){
        var results = sut.sortAllMoviesByAscendingReleaseDate();

        expect(results).toEqual([
          indianaJonesAndTheTempleOfDoom, 
          aBugsLife, 
          piratesOfTheCarribean, 
          cars, 
          yoursMineAndOurs, 
          shrek, 
          theresSomethingAboutMary
        ]);
      });

      it('Sorts all movies by preferred studios and release date ascending', function(){
       // In this spec the results of the movies should be sorted as follows:
       //  MGM Movies
       //   - By ascending release date
       //  Pixar Movies
       //   - By ascending release date
       //  Dreamworks Movies
       //   - By ascending release date
       //  Universal Movies
       //   - By ascending release date
       //  Disney Movies
       //   - By ascending release date

        var results = sut.sortAllMoviesByStudioPreferenceAndYearPublished();

        expect(results).toEqual([
          yoursMineAndOurs, 
          theresSomethingAboutMary, 
          aBugsLife, 
          cars, 
          shrek, 
          indianaJonesAndTheTempleOfDoom, 
          piratesOfTheCarribean
        ]);
      });
    });
  });
});

