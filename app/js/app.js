$(function(){
	$(document).foundation();

	var $container = $('#container-wall');
	// layout Masonry again after all images have loaded
	$container.imagesLoaded(function() {
	  $container.masonry({
	  	 columnWidth: 1,
	  	 itemSelector : '.box'
	  });
	});

	$("#main-menu-display").on("click", function(e){
		e.preventDefault();
		$(".main-menu").slideToggle();
	})
})