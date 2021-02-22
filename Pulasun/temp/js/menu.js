
$(document).ready(function(){
	window.onscroll = function(){
		scrollChange();
	}
	function scrollChange(){
		if(document.body.scrollTop > 160 || document.documentElement.scrollTop > 160){
            $('.js-menu-access').addClass('container-fluid');
            $('.js-menu-access').removeClass('container');
            $('.js-menu-access').css('background','rgb(255,255,255,.7)');
            $('.js-menu-access').css('backdrop-filter','blur(20px)');
		}else{
			$('.js-menu-access').removeClass('container-fluid');
            $('.js-menu-access').addClass('container');
            $('.js-menu-access').css('background','rgb(255,255,255)');
			
		}
	}
	$('.open-menu-nav').click(function(){
		$('.mobile-navbar').css('width','100%')
	});
	$('.close-nav-button').click(function(){
		$('.mobile-navbar').css('width','0%')
	});
	$('.links-mb ul li').click(function(){
		$('.custom-dropdown').toggleClass('show-menu')
	});
	
})