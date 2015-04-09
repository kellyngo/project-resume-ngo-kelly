$(document).ready(function(){

    $('button').click(function(){
        $('header').animatescroll({scrollSpeed:4000,easing:'easeOutBack'});
    });

    window.sr = new scrollReveal();


});