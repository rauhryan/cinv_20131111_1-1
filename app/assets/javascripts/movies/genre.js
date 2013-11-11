(function(targetNamespace){
  function Genre(name){
    this.name = name
  }

  var proto = Genre.prototype;

  proto.toString = function () {
    return this.name;
  }

  var genres = {
    KIDS: new Genre("Kids"),
    ACTION: new Genre("Action"),
    COMEDY: new Genre("Comedy"),
    HORROR: new Genre("Horror")
  };

  targetNamespace.GENRES = genres;
})(this);
