
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("noScroll").addClass("scroll");
	} else {
		$("header").removeClass("scroll").addClass("noScroll");
	}

});

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(49.2845957,-123.1127161,279),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("contactMap"),mapProp);
}
