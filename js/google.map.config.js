(function($){
	$(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas-mostoles").length>0) {
			var map, myLatlng, myZoom, marker;
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(40.335300, -3.874483);
			myZoom = 15;
			function initialize() {
				var mapOptions = {
					zoom: myZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng,
					scrollwheel: false
				};
				map = new google.maps.Map(document.getElementById("map-canvas-mostoles"),mapOptions);
				marker = new google.maps.Marker({
					map:map,
					draggable:true,
					animation: google.maps.Animation.DROP,
					position: myLatlng
				});
				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
				});
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}
		if ($("#map-canvas-madrid").length>0) {
			var map2, myLatlng2, myZoom2, marker2;
			// Set the coordinates of your location
			myLatlng2 = new google.maps.LatLng(40.4273837,-3.7185032);
			myZoom2 = 17;
			function initialize2() {
				var mapOptions2 = {
					zoom: myZoom2,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					center: myLatlng2,
					scrollwheel: false
				};
				map2 = new google.maps.Map(document.getElementById("map-canvas-madrid"),mapOptions2);
				marker2 = new google.maps.Marker({
					map:map2,
					draggable:true,
					animation: google.maps.Animation.DROP,
					position: myLatlng2
				});
				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng2);
				});
			}
			google.maps.event.addDomListener(window, "load", initialize2);
		}
	}); // End document ready

})(this.jQuery);		