$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >=400 && $(window).width() >=880){
            $('.page-header').addClass('shrink');
        }
        else{
            $('.page-header').removeClass('shrink');
        }
    });
});


$(".burger").on("click", function () {
    $(".burger").toggleClass("top-menu");
    
})