$(function () {
    $('nav ul').hide();
    // $('#first-block h1').hide();
});

setInterval(function () {
    $('nav ul').show().addClass("animated fadeIn");
}, 1500);


$(window).scroll(function () {
    if ($(window).scrollTop() > 15) {
        $('nav').css({
            'background-color': 'rgb(77, 77, 77)'
        });
    }
    else {
        $('nav').css({
            'background-color': 'rgb(32, 27, 27)'
        });
    }

});