(function() {
	
	window.breakout = window.breakout || {};
	breakout.TILE_SIZE = 16;

	breakout.IS_MOBILE = (function() {
		// stolen from Modernizr
		// TODO: does Lime or Closure already have this somewhere?
		try {  
			document.createEvent("TouchEvent");  
			return true;  
		} catch (e) {  
			return false;  
		} 
	})();


})();

