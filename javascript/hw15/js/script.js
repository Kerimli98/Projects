const $buttonUp = $("<button class='button-up'>Back to Top</button>");

$buttonUp.click(function (event) {
    $('html').animate({
        scrollTop: 0
    }, 400)
});

$buttonUp.hide();



const $navBar = $('<nav class="navBar navbar-page">\n' +
    '    <a href="#latestNews" class="navbar-links navbar-links-page">The Latest News</a>\n' +
    '    <a href="#mpp" class="navbar-links navbar-links-page">Most Popular posts</a>\n' +
    '    <a href="#ompc" class="navbar-links navbar-links-page">Our Most Popular CLients</a>\n' +
    '    <a href="#tr" class="navbar-links navbar-links-page">Top Rated</a>\n' +
    '    <a href="#hn" class="navbar-links navbar-links-page">Hot News</a>\n' +
    '</nav>');
$navBar.hide();

$("script").before($navBar);

$(window).scroll(function (event) {
    if ($(window).scrollTop() >= 100) {
        $buttonUp.fadeIn();
        $('script').before($buttonUp);
    } else {
        $buttonUp.fadeOut();
    }

    if ($(window).scrollTop() > 44) {
        $navBar.fadeIn();
    } else {
        $navBar.fadeOut();
    }
});

$navBar.click(function (event) {
    let section = event.target.href.split('#');
    let position = $(`#${section[section.length - 1]}`).offset().top;
    $('html').animate({
        scrollTop: position
    }, 1000);
});

$(".mpp-toggle").click(function () {
    if($(".post-container").is(":hidden"))
    {
        $(".mpp-toggle").text( "Hide this section" );
    }
    else {
        $(".mpp-toggle").text ("Show this section" );
    }
    $(".post-container").slideToggle();
});