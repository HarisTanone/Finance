 AOS.init();
 $(document).ready(function(){       
 	var scroll_pos = 0;
 	$(document).scroll(function() { 
 		scroll_pos = $(this).scrollTop();
 		if(scroll_pos > 70) {
 			$('nav').toggleClass('scrolled',  scroll_pos > 70)
 			$('.nav-item').toggleClass('scrolled',  scroll_pos > 70)
 			$('.nav-link').css('color', '#000');
 			$('.navbar-brand').css('color','#000')
 			$('.fa-bars').css('color', '#000');
 		} else {
 			$('.nav-link').css('color', '#fff');
 			$('nav').removeClass('scrolled')
 			$('.nav-item').removeClass('scrolled')
 			$('.navbar-brand').css('color','#fff')
 			$('.fa-bars').css('color', '#fff');
 		}
 	});
 });