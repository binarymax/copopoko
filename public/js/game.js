var Copopoko = window.Copopoko;
Copopoko.Game = (function(){

	var instance = null;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var Game = function(){
		var self = this;
		var width = self.width = window.innerWidth;
		var height = self.height = window.innerHeight;
		var scene = new THREE.Scene();
		var renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setSize( width,height );
		var copo = self.copo = Copopoko.Copo(scene,renderer,width,height);
		var poko = self.poko = Copopoko.Poko(scene,renderer,width,height);
	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

	Game.prototype.render = function(){
		var self = this;
		window.requestAnimationFrame(function(){self.render();});
		self.copo.render();
		self.poko.render();
	};

	var make = function(){
		return instance||(new Game());
	};

	return make;

})();