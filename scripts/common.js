var modalData = {
	magazine: [
		{
			issue: 3,
			season: 'FALL/WINTER 2016',
			copy: 'Beauty may be the ultimate enigma: infinite, immeasurable and timeless. Often found in the darker reaches of pain and suffering, it is in life and death, in struggle and triumph. Beauty\'s one constant is its sphinx-like inscrutability; no two people will see it the same way or find it in the same place. Beauty may be in the eye of the beholder, but it is also something held deep within ourselves. Yet the fact that beauty cannot be defined has not stopped an industry from trying, not only in categorizing our differences but homogenizing them, too. Our cover story, photographed by Nicholas Alan Cope, highlights Patricia Black, a woman who is unapologetically herself in embracing these differences. A curator and “stylist to the stylists,” she is in many ways the consummate insider, yet she remembers the feeling of being on the outside looking in, of wanting, as she puts it, to “belong in the room.” She has encouraged a much-needed realness in the industry, her dynamic energy a testament to a life lived true to herself. With this issue, we join Black in defining beauty on our own terms.',
			extra: ' Beloved author, activist, therapist and muse to photographers like Robert Mapplethorpe and Peter Hujar, Robert Levithan exemplified the idea that beauty can be found in the truth, and in living a life true to oneself. Photographed by Zoltan Tombor. *With Robert\'s recent passing on May 13, 2016, we\'re honored to present this story in his loving memory. Six industry insiders—Linda Rodin, Poppy King, Chris Salgardo, Michelle Harper, Catherine Walsh and Linda Wells—challenge and reflect on what it means to be beautiful. Portraits by David Slijper.'
		},
		{
			issue: 4,
			season: 'FALL/WINTER 2017',
			copy: 'Beauty may be the ultimate enigma: infinite, immeasurable and timeless. Often found in the darker reaches of pain and suffering, it is in life and death, in struggle and triumph. Beauty\'s one constant is its sphinx-like inscrutability; no two people will see it the same way or find it in the same place. Beauty may be in the eye of the beholder, but it is also something held deep within ourselves. Yet the fact that beauty cannot be defined has not stopped an industry from trying, not only in categorizing our differences but homogenizing them, too. Our cover story, photographed by Nicholas Alan Cope, highlights Patricia Black, a woman who is unapologetically herself in embracing these differences. A curator and “stylist to the stylists,” she is in many ways the consummate insider, yet she remembers the feeling of being on the outside looking in, of wanting, as she puts it, to “belong in the room.” She has encouraged a much-needed realness in the industry, her dynamic energy a testament to a life lived true to herself. With this issue, we join Black in defining beauty on our own terms.',
			extra: ' Beloved author, activist, therapist and muse to photographers like Robert Mapplethorpe and Peter Hujar, Robert Levithan exemplified the idea that beauty can be found in the truth, and in living a life true to oneself. Photographed by Zoltan Tombor. *With Robert\'s recent passing on May 13, 2016, we\'re honored to present this story in his loving memory. Six industry insiders—Linda Rodin, Poppy King, Chris Salgardo, Michelle Harper, Catherine Walsh and Linda Wells—challenge and reflect on what it means to be beautiful. Portraits by David Slijper.'
		},
	],
	contact: [
		{
			title: 'Contact Us',
			address: '140 Hope St Brooklyn NY'
		}
	]
}

/* nav/header stuff */
$('.open-nav').on('click', function() {
	$('.nav-header').addClass('open');
});
$('.close-nav, .main-nav li').on('click', function() {
	$('.nav-header').removeClass('open');
});

/* modal stuff 
	* !!! only working for magazineData
	* MUST set data to populate modal content
*/
$('.open-modal').on('click', function() {
	var category = $(this).attr('data-modal-type');
	var id = $(this).attr('data-modal-id');

	$.each(modalData[category], function(k,v) {
		var data = modalData[category][k];
		// magazine detail modal
		if(category == 'magazine') {
			if(v['issue'] == id) {
				$('.modal-content').html(
					'<h4 class="title" id="IssueNo">Issue N<span class="superscript">0</span>' + data.issue + '</h4>'
					+ '<h5 class="title uppercase">' + data.season + '</h5>'
					+ '<h5 class="title uppercase">In This Issue</h5>'
					+ '<p class="paragraph">' + data.copy + '</p>'
				);
				$('.modal-dialog').addClass('open');
			}
		}
		// contact modal
		if(category == 'contact') {
			$('.modal-content').html(
				'<h4 class="title">' + data.title + '</h4>'
				+ '<h5 class="title">' + data.address + '</h5>'
			);
			$('.modal-dialog').addClass('open');
		}
	});
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