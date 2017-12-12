$(function () {
    $('#first-block ul').hide();
});

setInterval(function () {
    $('#first-block ul').show().addClass("animated fadeIn");
}, 1100);