function toggleImgRepeat() {
    const side = document.querySelector('#side');
    if (window.innerWidth / window.innerHeight > 1.4) {
        side.style['background-size'] = 'cover'
    } else {
        side.style['background-size'] = 'contain'
    }
}
window.addEventListener('DOMContentLoaded', toggleImgRepeat);
window.addEventListener('resize', toggleImgRepeat);

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    const pwInput = document.querySelector('#password');
    const confirmPwInput = document.querySelector('#confirmPW');
    const inputs = document.querySelectorAll('input');
    if (pwInput.value !== confirmPwInput.value) {
        e.preventDefault();
        pwInput.classList.add("error");
        confirmPwInput.classList.add("error");
    } else {
        pwInput.classList.remove("error");
        confirmPwInput.classList.remove("error");
    }
})