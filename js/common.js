$(document).ready(function(){
	
	
	
	//checkbox radiobtn
	$(".ll-radio-custom").labelauty();
	
	//counter
	$('.counter').counterUp({
		delay: 10,
		time: 1200
	});
	
	//init wow
	new WOW().init();
	
	
	//hover function
	$( "[hov]" ).hover(function(){$(this).stop().fadeTo(100,$(this).attr('hov'));},function(){$(this).stop().fadeTo(100,1)});
	$( "[voh]" ).each(function(){
		voh = $(this).attr('voh');
		$(this).css('opacity',voh);
		})
	$( "[voh]" ).hover(function(){$(this).stop().fadeTo(100,1)},function(){$(this).stop().fadeTo(100,$(this).attr('voh'));});

	//menu scrolling
	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 180) {
						
			$('header .fixarea').addClass('headerfix');
	
		} else {
			$('header .fixarea').removeClass('headerfix');
		}	
	
	}).scroll();
	
	//flex
	$('.flexslider').flexslider({
		animation: "fade",
		slideshow:true,
		slideshowSpeed:4200,
		animationSpeed:800,
		controlNav:false,
		start: function(slider){
		  $('body').removeClass('loading');
		}
	});
	
	//visual_center
	$('.v-centerimg').centerImage();
	$('.v-centerimg-is').centerImage('inside');
	
	$(window).resize(function() {
		$('.v-centerimg').centerImage();
		$('.v-centerimg-is').centerImage('inside');
	});
	
	$('select').niceSelect();
	
	//body toggle
	$('.body-detail').click(function(e) {
	    e.preventDefault();
		var $this = $(this).find('.toggle-con');
		$(".toggle-con").not($this).hide();
		
	    $(this).find('.toggle-con').toggle("fade", 150);
	});
	
	
					   
});
