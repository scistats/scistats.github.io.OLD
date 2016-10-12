$(document).ready(function () {
    var topBarHeight =$('.navbar').outerHeight();
    var offMenuItemWidth =$('.offscreen-item').css('width');
    var count = 0;
    //top position and width of offscreen menu
    $('.navigation').css({'top':topBarHeight-1,'width':offMenuItemWidth});
    $('#nav-trigger').click(function(){
        var revealItemWidth = $('.nav-item').css('width'); 
        count+=1;  
        $('.screen-content-wrap').css('left',revealItemWidth*(count % 2));
        $('.screen-content').css({'padding-left':'4em','padding-right':'4em'});
    });

});;