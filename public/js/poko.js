var Copopoko = window.Copopoko;
Copopoko.Poko = (function(){

	var instance = null;

	var view = 	{
		left: 0.5,
		bottom: 0,
		width: 0.5,
		height: 1.0,
		near:1,
		far:10000,
		background: new THREE.Color().setRGB( 0.7, 0.5, 0.5 ),
		eye: [ 0, 300, 1800 ],
		up: [ 0, 1, 0 ],
		fov: 30
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var Half = function(scene,renderer,width,height){
		var self = this;
		view.ratio = width/height;
		view.width *= width;
		view.height *= height;
		Copopoko.Join.call(self,scene,renderer,view);
	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 	

	Copopoko.inherit( Copopoko.Join, Half );

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	Half.prototype.draw = function(){
		var self = this;
		var geometry = new THREE.Geometry();
		return geometry;		
	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	Half.prototype.position = function() {
		var self = this;
	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var make = function(scene,renderer,width,height){
		return instance||(new Half(scene,renderer,width,height));
	};

	return make;

})();