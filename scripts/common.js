/* nav/header stuff */
$('.open-nav').on('click', function() {
	$('.nav-header').addClass('open');
});
$('.close-nav, .main-nav li').on('click', function() {
	$('.nav-header').removeClass('open');
});

/* modal stuff */
$('.open-modal').on('click', function() {
	$('.modal-dialog').addClass('open');
});
$('.close-modal').on('click', function() {
	$('.modal-dialog').removeClass('open');
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

$(document).on('scroll', function() {
	// desktop horizontal header bg on scroll change
	if($(this).scrollTop() < 1) {
		$('.nav-header').addClass('transparent');
	} else {
		if($('.nav-header').hasClass('transparent')) {
			$('.nav-header').removeClass('transparent');
		}
	}
});