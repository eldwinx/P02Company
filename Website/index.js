
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("noScroll").addClass("scroll");
	} else {
		$("header").removeClass("scroll").addClass("noScroll");
	}

});

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("contactMap"),mapProp);
}
