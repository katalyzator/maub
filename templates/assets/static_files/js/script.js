$('.tabs-stage > div').hide();
$('.tabs-stage > div:nth-child(1)').show();
$('.tabs-nav > li:first-child a').addClass('tab-active');

// �������� ����� ������� � ���������� ����������
$('.tabs-nav > li > a').on('click', function (event) {
    event.preventDefault();
    $('.tabs-nav > li a').removeClass('tab-active');
    $(this).addClass('tab-active');
    $('.tabs-stage > div').hide(500);
    $($(this).attr('href')).show(500);
});

$('.s_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    arrows: true,
    variableWidth: true,
    draggable: false
});
