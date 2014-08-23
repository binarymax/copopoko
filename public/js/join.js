var Copopoko = window.Copopoko;
Copopoko.Join = (function(){

	var scene = null;
	var renderer = null;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	var Join = function(_scene,_renderer,view){
		var self = this;
		
		scene         = _scene;
		renderer      = _renderer;
		self.view     = view;
		
		self.geometry = self.draw();
		self.camera   = new THREE.PerspectiveCamera(view.fov,view.ratio,view.near,view.far);

	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
	Join.prototype.render = function() {
		var self = this;
		var scene = self.scene;
		
		self.position();

		//renderer.render();

	};

	return Join;

})();