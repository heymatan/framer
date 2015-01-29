$(document).ready(function(){
	$('.fill-selector li a').on('click.jpg',function(event){
		event.preventDefault();
		$('.fill-selector li').removeClass('active');
		$(this).parent().addClass('active');
	});

	$('.fill-selector #nofill a').on('click',function(event){
		event.preventDefault();
		$('#iframe-config').fadeOut();
		$('.device-frame .viewport').empty();
	});

	$('.fill-selector #iframe a').on('click',function(event){
		event.preventDefault();
		$('#iframe-config').fadeIn();
	});

	$('#iframe-address').on('submit',function(event){
		var url = $('#iframe-config input[name=url]').val();
		console.log(url);
		//add iframes to frames
		$('.device-frame .viewport').html('<iframe src="'+url+'"/>');
		return false; //prevent GET
	});
	
	$('.fill-selector #slideshow a').on('click',function(event){
		event.preventDefault();
		$('#iframe-config').fadeOut();
		//add slideshows to frames
		var images = [
			'img/slideshow/mrscooks-site-home.jpg',
			'img/slideshow/mrscooks-site-homehover.jpg',
			'img/slideshow/mrscooks-site-about.jpg',
			'img/slideshow/mrscooks-site-whatsnew.jpg',
			'img/slideshow/mrscooks-site-shop.jpg',
			'img/slideshow/mrscooks-site-product.jpg'
		];
		var slideshowMarkup = '<div class="flexslider">'
		slideshowMarkup += '<ul class="slides">';
		for (var i = 0; i < images.length; i++) {
			slideshowMarkup += '<li>';
			slideshowMarkup += '<img src="'+images[i]+'" />';
			slideshowMarkup += '</li>';
		};
		slideshowMarkup += '</ul>';
		slideshowMarkup += '</div>';
		$('.device-frame .viewport').html(slideshowMarkup);
		$('.flexslider').flexslider({
			'controlNav':false
		});
	});

	
});