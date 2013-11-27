var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
 
		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|windows phone)/)) {
			document.addEventListener("deviceready",  this.onDeviceReady, false);
		} else {
			this.onDeviceReady();
		}
    },
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
 
        console.log('Received Event: ' + id);
	 
		/*
		window.onReady(function onReady() {
			game.onload();
		});
		*/

		window.onload = function() {
			Crafty.mobile = false;
			Crafty.init(320, 416);
			Crafty.canvas.init();
			Crafty.scene('loading');
			console.log(' loading  ');
	 
			setTimeout(function() {
				window.scrollTo(0, 1);
			}, 1);
		};
    }
};
