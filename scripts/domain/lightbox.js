const firstBox = document.getElementById('lightbox');
const secondBox = document.getElementById('lightbox2');
const thirdBox = document.getElementById('lightbox3');

const closeButton = document.querySelectorAll('closebutton');

function openFirst() {
    firstBox.classList.remove('invisible');
}

function closeFirst() {
    firstBox.classList.add('invisible');
}

function openSecond() {
    secondBox.classList.remove('invisible');
}

function closeSecond() {
    secondBox.classList.add('invisible');
}

function openThird() {
    thirdBox.classList.remove('invisible');
}

function closeThird() {
    thirdBox.classList.add('invisible');
}

