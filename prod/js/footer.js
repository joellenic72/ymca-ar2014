$(document).ready(function() {

	function stickyHeader() {
		var bodyContentTop = $('.body_content').offset().top;
		var header = $('.head_primary');
		var closeBtn = $('.close_button_wrap');

		$(window).scroll(function() {
			if ($(window).scrollTop() > bodyContentTop) {
				header.addClass('fixed_header');
				closeBtn.addClass('fixed_nav_pos');
			} else {
				header.removeClass('fixed_header');
				closeBtn.removeClass('fixed_nav_pos');
			}
		});

	}
	stickyHeader();

	function menuButton() {

		var menuOpenBtn = $('.menu_button_open'),
		menuCloseBtn = $('.menu_button_close'),
		menuOverlay = $('.overlay_nav'),
		body = $('body');

		buttonActive = true;

		menuOpenBtn.click(function(e){
			e.preventDefault();

			if (buttonActive) {
				menuOverlay.addClass('overlay_active');
				body.addClass('fixed');
				buttonActive = false;
			} else {
				menuOverlay.removeClass('overlay_active');
				body.removeClass('fixed');
				buttonActive = true;
			}
		});

		menuCloseBtn.click(function(e) {
			e.preventDefault();

			if (buttonActive === false) {
				menuOverlay.removeClass('overlay_active');
				body.removeClass('fixed');
				buttonActive = true;
			} else {
				menuOverlay.addClass('overlay_active');
				body.addClass('fixed');
				buttonActive = false;
			}
		});

	}
	menuButton();

	function particleGenerator() {

		(function() {
  			var colors, interval, middleX, middleY, radius, rand, s, sample;

  			s = Snap('#particles');

  			rand = function(min, max) {
    			return Math.floor(Math.random() * (max - min) + min);
  			};

  			sample = function(a) {
    			return a[rand(0, a.length)];
  			};

  			// Get axis for circle generator
  			middleX = Math.floor($('#particles').width() / 2);

  			middleY = Math.floor($('#particles').height() / 2);

  			colors = [
  			"247, 173, 64", 
  			"240, 121, 59", 
  			"217, 90, 56", 
  			"231, 37, 52",
  			"164, 46, 55",
  			"193, 40, 138"];

  			interval = 10;

  			radius = 15;

  			// Generate Circle
			setInterval(function() {
    			return s.circle(middleX, middleY, radius).attr({
      				fill: "rgb(" + (sample(colors)) + ")"
    			}).animate({
      				transform: "t" + (rand(-900, 900)) + " " + (rand(-600, 600)),
      				opacity: 0
    			}, rand(2000, 8000), mina.easein, function() {
            		var particle = this;
            		particle.remove();
          		});
  			}, interval);

  			// Update cirlce generator axis to user click
  			$('#particles').click(function(e) {
    			middleX = e.clientX;
    			middleY = e.clientY;
    			return s.circle(middleX, middleY, 5).attr({
      				fill: "#fff"
    			}).animate({
      				opacity: 0
    			}, 500, mina.easein, function() {
    				var particle = this;
    				particle.remove();
    			});
  			});

		}).call(this);
			
	}
	particleGenerator();

});

$(window).load(function() {
	// Preloader Function. Run after Document.ready
	function preloader() {
		$('.preloader_logo').addClass('preloader_logo_loaded');
		$('.cloud_top').addClass('cloud_top_loaded');
		$('.cloud_bottom').addClass('cloud_bottom_loaded').delay(2600).queue(function(next) {
			$('.preloader').remove();
			next();
		});
	} preloader();

});

