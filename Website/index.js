
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("noScroll").addClass("scroll");
	} else {
		$("header").removeClass("scroll").addClass("noScroll");
	}

});
