(function(targetNamespace){

  function MovieLibrary(movies){
    this.movies = movies;
  }
  
  var proto = MovieLibrary.prototype;

  //array_extensions.js
  Array.prototype.forEach = function (callback) {
  	for (var i = 0; i < this.length; i++) {
		callback.call(this[i]);
  	};
  }

  Array.prototype.filter = function(filterOn) {
  	var filteredArray = [];
  	var unfilteredArray = this;
  	unfilteredArray.forEach(function(){
  		var movie = this;
  		if(filterOn.call(movie)){
  			filteredArray.push(movie);
  		}
  	})
  	return filteredArray;
  }

  // function filter extension
  Function.prototype.or = function (continueFunction) {
  	var filter = this;
  	return function(){
  		var movie = this;
  		return filter.call(movie) || continueFunction.call(movie);
  	};
  }


  proto.isPixarMovie = function(){
  	return this.studio === STUDIOS.PIXAR;
  }

  proto.isDisneyMovie = function(){
  	return this.studio === STUDIOS.DISNEY;
  }

  var Match = {};

  Match.onAttr = function(attr) {
  	return function() {
  		var movie = this;
  		return movie[attr];
  	};
  }

  Function.prototype.isAny = function () {
  	var evalutations = arguments;
  	var attr = this;
  	return function(){
  		var movie = this;
  		for (var i = 0; i < evalutations.length; i++) {
  			if(evalutations[i] === attr.call(movie)) {
  				return true;
  			}
  		}
  		return false;
  	}
  }

  Function.prototype.isEqual = function (evalutation) {
  	var attr = this;
  	return function(){
  		var movie = this;
  		return attr.call(movie) === evalutation;
  	}
  }

  proto.allPixarMovies = function() {
  	var isPixar = Match.onAttr('studio').isEqual(STUDIOS.PIXAR)
   	return this.movies.filter(isPixar);
  
  };

  proto.allPixarOrDisneyMovies = function() {
  	var isPixarOrDisney = Match.onAttr('studio').isAny(STUDIOS.PIXAR, STUDIOS.DISNEY);
  	
   	return this.movies.filter(isPixarOrDisney);
  
  };

  targetNamespace.MovieLibrary = MovieLibrary;

})(this);
