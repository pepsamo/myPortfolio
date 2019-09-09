	$(document).ready(function() {
	//Preloader
	$(window).on("load", function() {
	preloaderFadeOutTime = 500;
	function hidePreloader() {
	let preloader = $('#ip-container');
	preloader.fadeOut(500, function() {
		//Animation complete
	});
	}
	hidePreloader();
	});
	});