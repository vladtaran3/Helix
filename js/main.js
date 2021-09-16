$(function () {
  $(".menu__btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("menu__btn_active");
    $(".menu__list").toggleClass("menu__list_active");
  });

  $(".page__tabs-item").on("click", function (e) {
    e.preventDefault();

    $(".page__tabs-item").removeClass("page__tabs-item--active");
    $(this).addClass("page__tabs-item--active");

    $(".page__content").removeClass("page__content--active");
    $($(this).attr("href")).addClass("page__content--active");
  });

  $(".page__slider").slick({
    arrows: false,
    dots: true,
  });

  $(".info__item-title").on("click", function (e) {
    $(".info__item").removeClass("info__item--active");
    $(this).parent().addClass("info__item--active");
  });

  $(".info__item-title").on("click", function (e) {
    e.preventDefault();

    $(".info__item-title").removeClass("info__item-title--active");
    $(this).addClass("info__item-title--active");

    $(".info__images-box").removeClass("info__images-box--active");
    $($(this).attr("href")).addClass("info__images-box--active");
  });
});
