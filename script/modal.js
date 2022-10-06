$('.modal-overlay').on('click', function(e) {
    if($(e.target).closest('.modal').length == 0) {
        $(this).fadeOut();
    }
});

$('.close').on('click', function() {
    $(this).parents('.modal-overlay').fadeOut()
})

$('#open-modal').on('click', function() {
    $('.modal-overlay').fadeIn()
})

// HOMETASK

$('.modal-overlay-getstarted').on('click', function(gst) {
    if($(gst.target).closest('.modal_getstarted').length == 0) {
        $(this).fadeOut();
    }
});

$('.close_modal').on('click', function() {
    $(this).parents('.modal-overlay-getstarted').fadeOut()
})

$('.button_started').on('click', function() {
    $(this).parents('.modal-overlay-getstarted').fadeOut()
})

$('#open-modal-getstarted').on('click', function() {
    $('.modal-overlay-getstarted').fadeIn()
})

// $('.communication__button').on('click', function() {
//     $('.modal-overlay-getstarted').fadeIn()
// })