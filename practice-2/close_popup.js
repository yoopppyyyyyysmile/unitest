const popupCloseIcon = document.getElementsByClassName(popup__close);
if (popupCloseIcon.length > 0) {
    el.addEventListener('click', function (e) {
        popupClose(el.close('.popup'));
        e.preventDefault();
    });
}
