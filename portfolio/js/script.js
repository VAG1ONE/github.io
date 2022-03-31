$('a[href^="#"').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	});
	return false;
});

$(document).ready(function () {
	$(".header__burger").click(function (event) {
		$(".stick").toggleClass(function () {
			return $(this).is('.open, .close') ? 'open close' : 'open';
		});

	});
});
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.nav__menu').toggleClass('active');
	});
});