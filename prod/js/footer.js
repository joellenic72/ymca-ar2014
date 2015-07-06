$(document).ready(function() {

	function stickyHeader() {
		var bodyContentTop = $('.body_content').offset().top;

		$(window).scroll(function() {
			if ($(window).scrollTop() > bodyContentTop) {
				$('.head_primary').addClass('fixed_header');
				console.log('fixxxed');
			} else {
				$('.head_primary').removeClass('fixed_header');
				console.log('Removed fixed')
			}
		});

	}
	stickyHeader();

	function menuButton() {
		
	}


});