$(function(){
	$("#main-menu-display").on("click", function(e){
		e.preventDefault();
		$(".main-menu").slideToggle();
	})
})