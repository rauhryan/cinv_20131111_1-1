(function(targetNamespace){

  function Studio(name){
    this.name = name
  }
  
  var proto = Studio.prototype;

  proto.toString = function(){
    return this.name;
  }

  var studios = {
    PIXAR: new Studio("Pixar"),
    UNIVERSAL: new Studio("Universal"),
    MGM: new Studio("MGM"),
    DISNEY: new Studio("Disney"),
    DREAMWORKS: new Studio("Dreamworks"),
    PARAMOUNT: new Studio("Paramount")
  }

  targetNamespace.STUDIOS = studios;

})(this);
