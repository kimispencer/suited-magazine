$('.open-nav').on('click', function() {
	$('.nav-header').addClass('open');
	console.log('open nav')
});
$('.close-nav').on('click', function() {
	$('.nav-header').removeClass('open');
	console.log('close nav')
});