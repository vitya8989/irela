function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});;
$(document).ready(function(){
	$('.download__link').hide();
	if (parseInt($(window).width()) < 769) {
	$('.download').slideUp();
	};
	if (parseInt($(window).width()) < 531) {
	$('.calculate__answers-box').slideUp();
	$('.calculate__answers').slideUp();
	$('.download').appendTo('.calculate__answers');
	$('.download__link').prependTo('.calculate__answers-box');
	$('.calculate__bottom').appendTo('.calculate__answers');
	};
	$('.calculate__answer').animate({height: 'hide'});
	});
$('.no-btn').click(function(event) {
	$(this).parent('.calculate__question').addClass('delete').animate({width: 'hide'});
	$('.calculate__whiteline').animate({left: '+=12.5%'}, 200);
});
$('.ok-btn').click(function(event) {
	$('.download').addClass('download-visible');
	$(this).parent('.calculate__question').addClass('down').animate({height: 'hide'});
	$('.calculate__answer').eq($('.ok-btn').index(this)).animate({height: 'show'}).addClass('appear');
	if (parseInt($(window).width()) < 769) {
		$('.download').slideDown();
	};
	if (parseInt($(window).width()) < 531) {
		$('.calculate__answers-box').slideDown();
		$('.calculate__answers').slideUp();
	};
	$('.calculate__whiteline').animate({left: '+=12.5%'}, 200);
	$('.download__link').eq($('.ok-btn').index(this)).show();
});
$('.btn8').click(function(event) {
	$('.calculate__line').hide();
});
$('.button__answer-box').click(function(event) {
	$('.calculate__answers-box').hide();
	$('.calculate__answers').slideDown();
});;
	if(location.toString().indexOf('modules') !== -1) {
		$('.modules-link').addClass('active-link');
		if (parseInt($(window).width()) > 768 && parseInt($(window).width()) <= 1280) {
				$('.nav__menu').addClass('padding-menu');
		}
		if (parseInt($(window).width()) < 769) {
			$('.nav__text').hide();
		}
	}
	if(location.toString().indexOf('prices') !== -1) {
		$('.prices-link').addClass('active-link');
		if (parseInt($(window).width()) > 768 && parseInt($(window).width()) <= 1280) {
				$('.nav__menu').addClass('padding-menu');
		}
		if (parseInt($(window).width()) < 769) {
			$('.nav__text').hide();
		}
	}
		if(location.toString().indexOf('team') !== -1) {
		$('.team-link').addClass('active-link');
		if (parseInt($(window).width()) > 768 && parseInt($(window).width()) <= 1280) {
				$('.nav__menu').addClass('padding-menu');
		}
		if (parseInt($(window).width()) < 769) {
			$('.nav__text').hide();
		}
	}
$(window).scroll(function() {
	var height = $(window).scrollTop();
	if (parseInt($(window).width()) > 1280) {
		if (height > 660) {
			$('.nav').addClass('nav-fixed');
		} else {
			$('.nav').removeClass('nav-fixed');
		}
		if (height > 680) {
			$('.nav').addClass('nav-visible');
		} else {
			$('.nav').removeClass('nav-visible');
		}
	} else if (parseInt($(window).width()) > 1024  && parseInt($(window).width()) <= 1280) {
		if (height > 600) {
			$('.nav').addClass('nav-fixed');
		} else {
			$('.nav').removeClass('nav-fixed');
		}
		if (height > 620) {
			$('.nav').addClass('nav-visible');
		} else {
			$('.nav').removeClass('nav-visible');
		}
	} else if (parseInt($(window).width()) > 768 && parseInt($(window).width()) <= 1024) {
		if (height > 560) {
			$('.nav').addClass('nav-fixed');
		} else {
			$('.nav').removeClass('nav-fixed');
		}
		if (height > 570) {
			$('.nav').addClass('nav-visible');
		} else {
			$('.nav').removeClass('nav-visible');
		}
	} 
});
$('.nav__burger').click(function(event){
	$('.menu').toggleClass('menu-open');
	$(this).toggleClass('burger-open');
});;
$('.order-call').click(function(event) {
	$('.popup').addClass('popup-open');
	$('.order').addClass('ordercall-appear');
	if (parseInt($(window).width()) < 769) {
		$('.menu').removeClass('menu-open');
		$('.nav__burger').removeClass('burger-open');
	};
});
$('.writeMessage').click(function(event) {
	$('.popup3').addClass('popup-open');
	$('.write').addClass('ordercall-appear');
});
$('.popup').click(function(event) {
	if($(event.target).children('.order').length){
	$('.popup').removeClass('popup-open');
	$('.popup__ordercall').removeClass('ordercall-appear');
	$('.form-name').removeClass('error-input');
	$('.form-tel').removeClass('error-input');
	}
});
$('.popup2').click(function(event) {
	if($(event.target).children('.submited').length){
	$('.popup2').removeClass('popup-open');
	$('.popup__submited').removeClass('submited-appear');
	}
});
$('.popup3').click(function(event) {
	if($(event.target).children('.write').length){
	$('.popup3').removeClass('popup-open');
	$('.popup__write').removeClass('ordercall-appear');
	$('.form-name2').removeClass('error-input');
	$('.form-email').removeClass('error-input');
	}
});
$('.close-popup').click(function(event) {
	$('.popup').removeClass('popup-open');
	$('.popup__ordercall').removeClass('ordercall-appear');
	$('.popup3').removeClass('popup-open');
	$('.popup__write').removeClass('ordercall-appear');
	$('.form-name').removeClass('error-input');
	$('.form-tel').removeClass('error-input');
	$('.form-name2').removeClass('error-input');
	$('.form-email').removeClass('error-input');
	$('.popup2').removeClass('popup-open');
	$('.popup__submited').removeClass('submited-appear');
});


let formNameBox = document.querySelector('.form-name');
let formTelBox = document.querySelector('.form-tel');
let formName2Box = document.querySelector('.form-name2');
let formEmailBox = document.querySelector('.form-email');
let formName = document.order__form.name;
let formTel = document.order__form.tel;
let formComment = document.order__form.comment;
let formName2 = document.write__form.name;
let formEmail = document.write__form.email;
let formComment2 = document.write__form.comment;


function validate_form(){
	let valid = true;
	if (formName.value == ""){
		valid = false;
		formNameBox.classList.add('error-input');
	};
	if (formTel.value == ""){
		valid = false;
		formTelBox.classList.add('error-input');
	};
	return valid;
};

function validate_form2(){
	let valid = true;
	if (formName2.value == ""){
		valid = false;
		formName2Box.classList.add('error-input');
	};
	if (formEmail.value == ""){
		valid = false;
		formEmailBox.classList.add('error-input');
	};
	return valid;
};

formName.onfocus = function(){
	if (formNameBox.classList.contains('error-input')){
		formNameBox.classList.remove('error-input');
	};
};

formTel.onfocus = function(){
	if (formTelBox.classList.contains('error-input')){
		formTelBox.classList.remove('error-input');
	};
};
formName2.onfocus = function(){
	if (formName2Box.classList.contains('error-input')){
		formName2Box.classList.remove('error-input');
	};
};

formEmail.onfocus = function(){
	if (formEmailBox.classList.contains('error-input')){
		formEmailBox.classList.remove('error-input');
	};
};
$('.order__form').submit(function (event) {
	event.preventDefault();
	validate_form();
	if (!(formNameBox.classList.contains('error-input') || formTelBox.classList.contains('error-input'))) {
		var form_data = $(this).serialize(); 
		$.ajax({
			type: "POST",
			url: "public/script/send.php",
			data: form_data
		});
		$('.popup').removeClass('popup-open');
		$('.popup__ordercall').removeClass('ordercall-appear');
		$('.popup2').addClass('popup-open');
		$('.popup__submited').addClass('submited-appear');
		formName.value = "";
		formTel.value = "";
		formComment.value = "";
	};
});
$('.write__form').submit(function (event) {
	event.preventDefault();
	validate_form2();
	if (!(formName2Box.classList.contains('error-input') || formEmailBox.classList.contains('error-input'))) {
		var form_data = $(this).serialize(); 
		$.ajax({
			type: "POST",
			url: "public/script/send.php",
			data: form_data
		});
		$('.popup3').removeClass('popup-open');
		$('.popup__write').removeClass('ordercall-appear');
		$('.popup2').addClass('popup-open');
		$('.popup__submited').addClass('submited-appear');
		formName2.value = "";
		formEmail.value = "";
		formComment2.value = "";
	};
});



/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04.1 (kama fix)
 */
(function(b){b.fn.autoResize=function(f){var a=b.extend({onResize:function(){},animate:!0,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1E3},f);this.filter("textarea").each(function(){var d=b(this).css({"overflow-y":"hidden",display:"block"}),f=d.height(),g=function(){var c={};b.each(["height","width","lineHeight","textDecoration","letterSpacing"],function(b,a){c[a]=d.css(a)});return d.clone().removeAttr("id").removeAttr("name").css({position:"absolute",top:0,left:-9999}).css(c).attr("tabIndex","-1").insertBefore(d)}(),h=null,e=function(){g.height(0).val(b(this).val()).scrollTop(1E4);var c=Math.max(g.scrollTop(),f)+a.extraSpace,e=b(this).add(g);h!==c&&(h=c,c>=a.limit?b(this).css("overflow-y",""):(a.onResize.call(this),a.animate&&"block"===d.css("display")?e.stop().animate({height:c},a.animateDuration,a.animateCallback):e.height(c)))};d.unbind(".dynSiz").bind("keyup.dynSiz",e).bind("keydown.dynSiz",e).bind("change.dynSiz",e)});return this}})(jQuery);

// инициализация
jQuery(function(){
	jQuery('textarea').autoResize();
});;