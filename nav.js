
$(document).ready(function () {
    $(function () {
        $('nav ul').hide();
        // $('#first-block h1').hide();
    });

    setInterval(function () {
        $('nav ul').show().addClass("animated fadeIn");
    }, 1500);


    $(window).scroll(function () {
        // let navbar = $("nav ul");
        // navbar.toggle({"left" : "20px"},slide, 1000);
        if ($(window).scrollTop() > 15) {
            // $(navbar).animate({left: '350px'});
            $('nav').css({
                'background-color': 'rgb(77, 77, 77)'
            });
        }
        else {
            // $(navbar).animate({left: '350px'});
            $('nav').css({
                'background-color': 'rgb(32, 27, 27)'
            });
        }

    });
});