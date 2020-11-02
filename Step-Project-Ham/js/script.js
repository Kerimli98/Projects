$('ul.tabs li').click(function () {
    const tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('active');
    $('ul.tabs-content li').removeClass('active');

    $(this).addClass('active');
    $('#' + tab_id).addClass('active');
});


$('ul.ow-tabs li').click(function () {
    const ow_tab_id = $(this).attr('data-tab-ow');
    $('ul.ow-tabs li').removeClass('current');
    $('.ow-content-tab').removeClass('current');

    $(this).addClass('current');
    $('#' + ow_tab_id).addClass('current');
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});