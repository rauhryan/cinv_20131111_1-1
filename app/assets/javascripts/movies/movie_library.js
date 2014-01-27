(function(targetNamespace){

  function MovieLibrary(movies){
    this.movies = movies;
  }
  
  var proto = MovieLibrary.prototype;

  proto.allPixarMovies = function() {
  	var pixarMovies = [];
    this.movies.forEach(function(){
  		if(this.studio === STUDIOS.PIXAR) {
  			pixarMovies.push(this.movies[i]);
  		}
    })
  	return pixarMovies;
  };

  targetNamespace.MovieLibrary = MovieLibrary;

})(this);
