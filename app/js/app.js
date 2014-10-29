$(function(){
	$(document).foundation();

	var temp = "<div class='brick' style='width:{width}px;'><img src='../images/tabletimages/tablet-{index}.jpg' width='100%'></div>";
			var w = 1, h = 1, html = '', limitItem = 7;
			for (var i = 0; i < limitItem; ++i) {
				w = 1 + 3 * Math.random() << 0;
				html += temp.replace(/\{width\}/g, w*200).replace("{index}", i + 1);
			}
	$("#container-wall").html(html);

	var wall = new freewall("#container-wall");

	wall.reset({
		selector: '.brick',
		animate: true,
		cellW: 150,
		cellH: 'auto',
		gutterX: 0,
		gutterY: 0,
		delay: 30,
		onResize: function(){
			wall.fitZone($(window).outerWidth() - 20, $(window).outerHeight() - 20);
			//wall.fitWidth();
		}
	})

	wall.fitZone($(window).outerWidth() - 20, $(window).outerHeight() - 20);

	//wall.fitWidth();
	var images = wall.container.find('.brick');
	images.find('img').load(function() {
		wall.fitWidth();
	});

	$("#main-menu-display").on("click", function(e){
		e.preventDefault();
		$(".main-menu").slideToggle();
	})
})