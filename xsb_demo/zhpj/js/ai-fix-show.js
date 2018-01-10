// JavaScript Document
/*固定元素*/
$(function() { 
    var elm = $('.nav'); 
    var startPos = $(elm).offset().top; 
    $.event.add(window, "scroll", function() { 
        var p = $(window).scrollTop(); 
        $(elm).css('position',((p) > startPos) ? 'fixed' : 'static'); 
        $(elm).css('top',((p) > startPos) ? '50px' : ''); 
		$('#concon').css('margin-top',((p) > startPos) ? '287px' : '0px')
    }); 
}); 

