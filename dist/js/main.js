$(document).ready(function (){
    $('.team__dots').click(function () {
        var i = $(this).index();
        $('.team__dots').removeClass('team__dots--active');
        $(this).addClass('team__dots--active');
        $('.team__photo--active').removeClass('team__photo--active');
        $($('.team__photo')[i]).addClass('team__photo--active');
    })

    $('.header__btn').click(function() {
        $('.header__input').toggleClass('header__input--active');
        $('.header__btn-search').toggleClass('header__btn-search--active');
    })
    $('.header__burger').click(function() {
        $(this).toggleClass('header__burger--active');
        $('.header__nav').toggleClass('header__nav--active');
    })
})    