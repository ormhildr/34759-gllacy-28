var siteWrapper = document.querySelector(".site-wrapper");
var siteWrapperFirst = document.querySelector(".site-wrapper_1");
var siteWrapperSecond = document.querySelector(".site-wrapper_2");
var siteWrapperThird = document.querySelector(".site-wrapper_3");
var dotFirst = document.querySelector(".slider__controls_1");
var dotSecond = document.querySelector(".slider__controls_2");
var dotThird = document.querySelector(".slider__controls_3");
var slideFirst = document.querySelector(".slider__item_1");
var slideSecond = document.querySelector(".slider__item_2");
var slideThird = document.querySelector(".slider__item_3");

dotFirst.addEventListener("click", function() {
    document.querySelector(".current").classList.remove("current");
    dotFirst.classList.add("current");
    siteWrapper.classList.remove("site-wrapper_2");
    siteWrapper.classList.remove("site-wrapper_3");
    siteWrapper.classList.add("site-wrapper_1");
    document.querySelector(".slide__item_current").classList.remove("slide__item_current");
    slideFirst.classList.add("slide__item_current");

});
dotSecond.addEventListener("click", function() {
    document.querySelector(".current").classList.remove("current");
    dotSecond.classList.add("current");
    siteWrapper.classList.remove("site-wrapper_1");
    siteWrapper.classList.remove("site-wrapper_3");
    siteWrapper.classList.add("site-wrapper_2");
    document.querySelector(".slide__item_current").classList.remove("slide__item_current");
    slideSecond.classList.add("slide__item_current");
});
dotThird.addEventListener("click", function() {
    document.querySelector(".current").classList.remove("current");
    dotThird.classList.add("current");
    siteWrapper.classList.remove("site-wrapper_1");
    siteWrapper.classList.remove("site-wrapper_2");
    siteWrapper.classList.add("site-wrapper_3");
    document.querySelector(".slide__item_current").classList.remove("slide__item_current");
    slideThird.classList.add("slide__item_current");
});
