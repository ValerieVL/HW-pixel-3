'use strict';

window.onload= function() {

    var close = document.getElementById('close');
    var feedback = document.getElementById('feedback');
    var feedbackButton = document.getElementById('feedback-button');

    close.onclick = function() {
        feedback.style.zIndex = -1;
        feedback.style.opacity = 0;
    };

    feedbackButton.onclick = function() {
        feedback.style.zIndex = 10;
        feedback.style.opacity = 1;
    };

};

// Validation
function showError(container, errorMessage) {
    container.className = 'error';
    container.placeholder = errorMessage;
}

function resetError(container) {
    container.className = '';
    // if (container.lastChild.className == "error-message") {
    //     container.removeChild(container.lastChild);
    // }
}

function validate(form) {

    var elems = form.elements;

    resetError(elems.name);
    if (!elems.name.value) {
        showError(elems.name, "Поле обязательно для заполнения");
    } else if(/^[a-zA-Zа-яА-Я]+$/.test(elems.name.value) === false) {
        elems.name.value = '';
        showError(elems.name, "Введите только буквы (А-Я, A-Z)");
    }

    resetError(elems.phone);
    if (!elems.phone.value) {
        showError(elems.phone, "Поле обязательно для заполнения");
    } else if (isNaN(elems.phone.value)) {
        elems.phone.value = '';
        showError(elems.phone, "Введите только цифры (0-9)");
    }

    resetError(elems.email);
    if (!elems.email.value) {
        showError(elems.email, "Поле обязательно для заполнения");
    }

}
