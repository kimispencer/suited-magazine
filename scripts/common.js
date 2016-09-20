var modalData = {
	magazine: [
		{
			issue: 1,
			season: 'SPRING/SUMMER 2015',
			imgSrc: 'issue1_00Cover.jpg',
			copy: 'The individuals featured in this debut issue work with varied media and genres, but all live for the autonomy that results from superseding expectation. Photographed by Paul Jung, the subjects of our debut issue\'s champion cover story -- South Sudanese models Mari Malek, Mari Agory, Nykhor Paul and Atong Arjok—are raising their voices to effect change in their home country. Passionately dedicated to the needs of others, these women are opening up a dialogue not only among their fellow citizens but around the world.',
			extra: {
				"0": '',
				"1" : 'foo',
				"2" : 'bar'
			}
		},
		{
			issue: 3,
			season: 'FALL/WINTER 2016',
			copy: 'Beauty may be the ultimate enigma: infinite, immeasurable and timeless. Often found in the darker reaches of pain and suffering, it is in life and death, in struggle and triumph. Beauty\'s one constant is its sphinx-like inscrutability; no two people will see it the same way or find it in the same place. Beauty may be in the eye of the beholder, but it is also something held deep within ourselves. Yet the fact that beauty cannot be defined has not stopped an industry from trying, not only in categorizing our differences but homogenizing them, too. Our cover story, photographed by Nicholas Alan Cope, highlights Patricia Black, a woman who is unapologetically herself in embracing these differences. A curator and “stylist to the stylists,” she is in many ways the consummate insider, yet she remembers the feeling of being on the outside looking in, of wanting, as she puts it, to “belong in the room.” She has encouraged a much-needed realness in the industry, her dynamic energy a testament to a life lived true to herself. With this issue, we join Black in defining beauty on our own terms.',
			extra: {
				"0": 'Stephen Cox and Daniel Silver of cult-cool menswear label Duckie Brown considers the duplicity and dual nature of quality versus quantity, alongside a glimpse of their SS15 collection photographed by Conan Thai. Photographer Paul Jung and designer Melitta Baumeister find solace and solidarity in their ongoing collaborations, most recently for Baumeister\'s SS15 collection, as it appears in this issue shot by Jung. The founders of Street Etiquette, Joshua Kissi and Travis Gumbs, provoke cultural conversations through their stylized storytelling. Photography by Matthew Pandolfe. Jules Hertling, the 90-year-old Brooklyn-bred tailor behind Hertling Trousers, still lives by the old adage: do a few select things, and do them well. Portrait by Conan Thai.',
				"1" : 'foo',
				"2" : 'bar'
			}
		},
		{
			issue: 4,
			season: 'FALL/WINTER 2017',
			copy: 'Beauty may be the ultimate enigma: infinite, immeasurable and timeless. Often found in the darker reaches of pain and suffering, it is in life and death, in struggle and triumph. Beauty\'s one constant is its sphinx-like inscrutability; no two people will see it the same way or find it in the same place. Beauty may be in the eye of the beholder, but it is also something held deep within ourselves. Yet the fact that beauty cannot be defined has not stopped an industry from trying, not only in categorizing our differences but homogenizing them, too. Our cover story, photographed by Nicholas Alan Cope, highlights Patricia Black, a woman who is unapologetically herself in embracing these differences. A curator and “stylist to the stylists,” she is in many ways the consummate insider, yet she remembers the feeling of being on the outside looking in, of wanting, as she puts it, to “belong in the room.” She has encouraged a much-needed realness in the industry, her dynamic energy a testament to a life lived true to herself. With this issue, we join Black in defining beauty on our own terms.',
			extra: {
				"0": 'Stephen Cox and Daniel Silver of cult-cool menswear label Duckie Brown considers the duplicity and dual nature of quality versus quantity, alongside a glimpse of their SS15 collection photographed by Conan Thai. Photographer Paul Jung and designer Melitta Baumeister find solace and solidarity in their ongoing collaborations, most recently for Baumeister\'s SS15 collection, as it appears in this issue shot by Jung. The founders of Street Etiquette, Joshua Kissi and Travis Gumbs, provoke cultural conversations through their stylized storytelling. Photography by Matthew Pandolfe. Jules Hertling, the 90-year-old Brooklyn-bred tailor behind Hertling Trousers, still lives by the old adage: do a few select things, and do them well. Portrait by Conan Thai.',
				"1" : 'foo',
				"2" : 'bar'
			}
		}
	],
	contact: [
		{
			title: 'Contact Us',
			address: '666 Sesame St Brooklyn NY'
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
					'<div class="flex-col">'
						+ '<div class="magazine-image">'
							+ '<div class="magazine-container">'
								+ '<div class="bg-img magazine" style="background-image: url(/assets/' + data.imgSrc + ');"></div>'
							+ '</div>'
						+ '</div>'
						+ '<div class="magazine-copy">'
							+ '<h4 class="title" id="IssueNo">Issue N<span class="superscript">0</span>' + data.issue + '</h4>'
							+ '<h5 class="title uppercase">' + data.season + '</h5>'
							+ '<h5 class="title uppercase">In This Issue</h5>'
							+ '<p class="paragraph">' + data.copy.replace("\n", "<br />") + '</p>'
						+ '</div>'
					+ '</div>'
					+ '<br />'
					+ '<h5 class="title uppercase">Also Included In This Issue</h5>'
					+ '<div class="flex-col also-included">'
						+ '<div class="also-included-container"><p class="paragraph">' + data.extra[0].replace("\n", "<br />") + '</p></div>'
						+ '<div class="also-included-container"><p class="paragraph">' + data.extra[1].replace("\n", "<br />") + '</p></div>'
						+ '<div class="also-included-container"><p class="paragraph">' + data.extra[2].replace("\n", "<br />") + '</p></div>'
					+ '</div>'
				).addClass('magazine-modal');
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