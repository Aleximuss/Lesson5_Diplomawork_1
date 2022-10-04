$(window).on('scroll', function() {
    if($(this).scrollTop() > 500) {
        $('#up').fadeIn()
    } else {
        $('#up').fadeOut()
    }
})

$('#up').on('click', function() {
    $('html, body').animate({scrollTop: 0}, 500)
})

$('#about-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500)
})

$('#feedback-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#feedback').offset().top}, 500)
})