$(function(){

	$('.portfolio-slider').slick({
		infinite: true,
		arrows: true,
		fade: true,
		asNavFor: '.portfolio-nav__slider',
		prevArrow: '<img class="slider-arrow-left slider-arrows" src="img/arrow-left-circle.svg" alt=""></img>',
		nextArrow: '<img class="slider-arrow-right slider-arrows" src="img/arrow-right-circle.svg" alt=""></img>',
		
	});

	$('.portfolio-nav__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		infinite: true,
		arrows: false,
		asNavFor: '.portfolio-slider',
	});

	$('.featured-project__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			dots: true,
			arrows: true,
			infinite: true,
			prevArrow: '<img class="slider-arrow-left slider-arrows" src="img/arrow-left.svg" alt=""></img>',
			nextArrow: '<img class="slider-arrow-right slider-arrows" src="img/arrow-right.svg" alt=""></img>',
	});


	$('.menu-btn').click(function(event) {
		$('.menu-btn, .header-nav__menu').toggleClass('active');
	});
});


	