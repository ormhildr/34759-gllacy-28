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


var feedbackLink = document.querySelector(".contacts-all__button");
var feedbackModal = document.querySelector(".modal-feedback");
if (feedbackModal !== null) {
    var feedbackClose = feedbackModal.querySelector(".modal__close");
    var feedbackForm = feedbackModal.querySelector(".modal-feedback__form");
    var feedbackName = feedbackModal.querySelector(".feedback-name");
    var feedbackMail = feedbackModal.querySelector(".feedback-mail");
    var feedbackMessage = feedbackModal.querySelector(".feedback-message");

    var isStorageSupport = true;
    var storageName = "";
    var storageMail = "";

    try {
        storageName = localStorage.getItem("login");
        storageMail = localStorage.getItem("mail");
    } catch (err) {
        isStorageSupport = false;
    }

    feedbackLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        feedbackModal.classList.add("modal-show");

        if (storageName) {
            feedbackName.value = storageName;
            feedbackMail.focus();
        }
        if (storageMail) {
            feedbackMail.value = storageMail;
            feedbackMessage.focus();
        } else {
            feedbackName.focus();
        }

    });

    feedbackClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal-show");
        feedbackModal.classList.remove("modal-error");
    });

    feedbackForm.addEventListener("submit", function(evt) {
        if (!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal-error");
            feedbackModal.offsetWidth = feedbackModal.offsetWidth;
            feedbackModal.classList.add("modal-error");
        } else {
            localStorage.setItem("name", feedbackName.value);
            localStorage.setItem("mail", feedbackMail.value);
        }

    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            if (feedbackModal.classList.contains("modal-show")) {
                evt.preventDefault();
                feedbackModal.classList.remove("modal-show");
                feedbackModal.classList.remove("modal-error");
            }
        }
    });
};
