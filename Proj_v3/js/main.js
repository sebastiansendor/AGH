const toTopButton = document.getElementById('myBtn');
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		toTopButton.style.display = "block";
	} else {
		toTopButton.style.display = "none";
	}
}
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// function openSideNav() {
// 	const margin = '250px';
// 	const side_menu = document.getElementById('side-menu');
// 	side_menu.style.width = margin;
// 	document.getElementById('side-menu-but-burger').innerText = '&times;';
// 	document.getElementById('side-menu-but-text').innerText = 'Close';
// 	document.getElementById('wrapper').style.marginLeft = margin;
// 	side_menu.addEventListener('click', closeSideNav());
// 	side_menu.removeEventListener('click', this);
// }

// function closeSideNav() {
// 	const margin = '0';
// 	const side_menu = document.getElementById('side-menu');
// 	side_menu.style.width = margin;
// 	document.getElementById('wrapper').style.marginLeft = margin;
// }

$(document).ready(() => {
	let side_menu = 0;
	$('#side-menu').css('width', '50px');
	$('#side-menu-but-text').text('');
	$('#wrapper').css('margin-left', '50px');
	$('#side-menu').click(() => {
		console.log('asscheeks');
		const closed_margin = '50px';
		const open_margin = '200px';
		if (side_menu === 0) {
			$('#side-menu').css('width', open_margin);
			$('#wrapper').css('margin-left', open_margin);
			$('#side-menu-but-burger').html('&#10006;');
			$('#side-menu-but-text').text(' Close').css('opacity', '1').css('transform', 'scale(1)');
			$('#wrapper').css('opacity', '0.4');
			$('#side-menu-about-text').text(' About us');
			$('#side-menu-contact-text').text(' Contact us');
			side_menu = 1;
		} else {
			$('#side-menu').css('width', closed_margin);
			$('#wrapper').css('margin-left', closed_margin);
			$('#side-menu-but-burger').html('&#9776;');
			$('#side-menu-but-text').text('').css('opacity', '0').css('transform', 'scale(0)');
			$('#wrapper').css('opacity', '1');
			$('#side-menu-about-text').text('');
			$('#side-menu-contact-text').text('');
			side_menu = 0;
		}
	});




	// sliders
	$('#product-slide-but-arcade').click(() => {
		console.log('we are clciking arcade');
		$('#product-slide-but-arcade').addClass('product-active');
		$('#product-slide-but-brain').removeClass('product-active');
		$('#product-slide-but-rpg').removeClass('product-active');
		$('#product-slide-arcade').removeClass('product-hidden').addClass('product-view');
		$('#product-slide-brain').removeClass('product-view').addClass('product-hidden');
		$('#product-slide-rpg').removeClass('product-view').addClass('product-hidden');
	});
	$('#product-slide-but-brain').click(() => {
		console.log('we are clciking brain');
		$('#product-slide-but-arcade').removeClass('product-active');
		$('#product-slide-but-brain').addClass('product-active');
		$('#product-slide-but-rpg').removeClass('product-active');
		$('#product-slide-arcade').removeClass('product-view').addClass('product-hidden');
		$('#product-slide-brain').removeClass('product-hidden').addClass('product-view');
		$('#product-slide-rpg').removeClass('product-view').addClass('product-hidden');
	});

	$('#product-slide-but-rpg').click(() => {
		console.log('we are clciking brain');
		$('#product-slide-but-arcade').removeClass('product-active');
		$('#product-slide-but-brain').removeClass('product-active');
		$('#product-slide-but-rpg').addClass('product-active');
		$('#product-slide-arcade').removeClass('product-view').addClass('product-hidden');
		$('#product-slide-brain').removeClass('product-view').addClass('product-hidden');
		$('#product-slide-rpg').addClass('product-view').removeClass('product-hidden');
	});
});