function setMasonryGrid(){
	var $container = $('#container-wall') || "";
	// layout Masonry again after all images have loaded
	if(!$container){
		return;
	}else{

		$container.imagesLoaded(function() {
		  $container.masonry({
		  	 columnWidth: 1,
		  	 itemSelector : '.box'
		  });
		});
	}
}

function displayMenuMobile(){
	$("#main-menu-display").on("click", function(e){
		e.preventDefault();
		$(".main-menu").slideToggle();
	})
}

function displayMoreProfile(){
	$(".expand-more-profile").on("click", function(e){
		e.preventDefault();
		$(".web-more-profile").slideToggle();
	})
}
 

$(function(){
	$(document).foundation();

	setMasonryGrid();

	displayMenuMobile();

	displayMoreProfile();
})