$(document).ready(function(){
	$('.fill-selector li a').on('click',function(event){
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

	$('.fill-selector #slideshow a').on('click',function(event){
		event.preventDefault();
		$('#iframe-config').fadeOut();
		//add slideshows to frames
	});

	$('#iframe-address').on('submit',function(event){
		var url = $('#iframe-config input[name=url]').val();
		console.log(url);
		//add iframes to frames
		$('.device-frame .viewport').html('<iframe src="'+url+'"/>');
		return false;
	});
});