function scrollTo (targetName) {
	
	$("html,body").animate({scrollTop: $('#'+targetName).offset().top}, 1000);
	
}
