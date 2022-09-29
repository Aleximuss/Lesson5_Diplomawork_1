// $('.customers_items > div').on('click', function() {
//     $(this).parent('.customers_items').toggleClass('change-line-color');
//     $(this).children('.custom_title').toggleClass('change-item-color');
//     $(this).next('.custom_text').slideToggle(200);
// })

$('.job-items > div').on('click', function() {
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.job-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(200);
})



$('.customers_items > div').on('click', function() {
    $(this).parent('.customers_items').toggleClass('change-item-color');
    $(this).children('.custom_icon').toggleClass('custom-icon-change');
    $(this).next('.custom_text').slideToggle(200);
})