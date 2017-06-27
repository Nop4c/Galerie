
$(function(){
// déclaration des variables
	var dark = $('.hov');
	var img = $('img');
	var content = $('.content');

// cacher le hover

	dark.hide();

// montrer dark au survol de l'image

	img.mouseenter(function(){
		$(this).next().fadeIn('slow');
		content.addClass('content_hover');
	});

	dark.mouseleave(function(){
		$(this).fadeOut('slow');
		content.removeClass('content_hover');

	})

});