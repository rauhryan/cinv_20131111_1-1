(function(targetNamespace){

  function MovieLibrary(movies){
    this.movies = movies;
  }
  
  var proto = MovieLibrary.prototype;

  proto.allPixarMovies = function() {
  	var pixarMovies = [];
  	for (var i = 0; i < this.movies.length; i++) {
  		if(this.movies[i].studio === STUDIOS.PIXAR) {
  			pixarMovies.push(this.movies[i]);
  		}
  	};
  	return pixarMovies;
  };

  targetNamespace.MovieLibrary = MovieLibrary;

})(this);
