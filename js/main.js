$(function() {
    $('.nav-right a').click(function(){
        $('.nav-right a').removeClass('active');
        $(this).addClass('active');
    })
});