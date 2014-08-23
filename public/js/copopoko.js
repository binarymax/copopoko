var Copopoko = window.Copopoko = {};

(function(copopoko){

	var game = null;

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

	var start = copopoko.start = function() {
		game = Copopoko.Game();
		game.render();
	}

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

	var inherit = copopoko.inherit = function(parent,child) {
		child.prototype = Object.create(parent.prototype);
		child.prototype.constructor = child;
	};

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

})(Copopoko);