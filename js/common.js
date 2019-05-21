$(document).ready(function () {
    $('#content01 .slider_item').bxSlider({
        auto: true,
        speed: 500,
        pause: 4000,
        mode: 'fade',
        controls: true,
        pager: true,
        autoControls: false
    });


    $('#header .utility .sch dt button').click(function () {
       $('#header .utility .sch dd').fadeToggle();
       $('#header .utility .sch dt').toggleClass('active');
    });
    
    $('#footer .footer_top .family1 .tle').click(function () {
       $('#footer .footer_top .family1 .list').slideToggle();
    });

    $('#footer .footer_top .family2 .tle').click(function () {
        $('#footer .footer_top .family2 .list').slideToggle();
     });
});