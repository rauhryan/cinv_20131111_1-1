(function(){

  Array.prototype.foreach = function (callback) {
  	for (var i = 0; i < this.length; i++) {
		//callback();
		console.log(this[i].studio);
		callback.call(this[i]);
		//callback.apply();
  	};
  }


})();
