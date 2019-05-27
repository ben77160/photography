$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('.navbar-dark').addClass('black');
    }
    else{
        $('.navbar-dark').removeClass('black');
    }
})