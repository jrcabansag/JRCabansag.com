$(window).load(function(){
    window.setTimeout(function(){$('#Loader').fadeOut(500)}, 300);
});

$(document).ready(function(){
    var s = skrollr.init();

    $("#AboutMeButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#AboutMe").offset().top
        }, 300);
    });
    $("#ProjectsButton").click(function(){
        $('html, body').animate({
            scrollTop: $("#Projects").offset().top
        }, 300);
    });
    $("#LogoCircle").click(function(){
        $('html, body').animate({
            scrollTop: $("#Intro").offset().top
        }, 300);
    });

    $(window).scroll(function () {
        if($(window).scrollTop()+$(window).height()/2 > $('#AboutMe').offset().top && $(window).scrollTop()+$(window).height()/2 < $("#Projects").offset().top) {
            $("#AboutMeButton").css("color","#F2DE5F");
        }else{
            $("#AboutMeButton").css("color","");
        }
        if($(window).scrollTop()+$(window).height()/2 > $('#Projects').offset().top) {
            $("#ProjectsButton").css("color","#F2DE5F");
        }else{
            $("#ProjectsButton").css("color","");
        }
    });
});

var photoIndex = -1;

function changePhoto(){
    photoIndex += 1;
    var photoNumber = photoIndex%5+1;
    var nextPhotoNumber = photoNumber+1;
    if(nextPhotoNumber > 5){
        nextPhotoNumber = 1;
    }
    $('#AboutMeImage'+photoNumber).fadeOut(250);
    $('#AboutMeImage'+nextPhotoNumber).fadeIn(300);
}