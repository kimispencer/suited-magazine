/* nav/header stuff */
$('.open-nav').on('click', function() {
	$('.nav-header').addClass('open');
});
$('.close-nav, .main-nav li').on('click', function() {
	$('.nav-header').removeClass('open');
});

/* dom ready */
$(document).ready(function() {
	// set CurrentIssue Image to be top on mobile
	if($(window).width() < 1024) {
		$('.vertical-first').each(function() {
			$(this).prependTo($(this).parent());
		});
	}
	if($('#Home').length > 0) {
		$('body').css('background-color', '#E0E0E0');
	}
});

$(window).load(function() {
	show();
	function show() {
		$('.loader').hide();
		$('body').fadeIn();
	};
});