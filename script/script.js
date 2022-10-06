$('.job-items > div').on('click', function() {
    $(this).children('.job_items_right').toggleClass('about-rotate-icon');
    $(this).parent('.job-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(200);
})

$('.customers_items > div').on('click', function() {
    $(this).parent('.customers_items').toggleClass('change-item-color');
    $(this).children('.custom_icon').toggleClass('custom-icon-change');
    $(this).next('.custom_text').slideToggle(200);
})

$('#about-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500)
})

$('#feedback-link').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#feedback').offset().top}, 500)
})