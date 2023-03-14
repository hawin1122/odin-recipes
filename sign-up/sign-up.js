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


const password = (() => {
    const pwInput = document.querySelector('#password');
    const confirmPwInput = document.querySelector('#confirmPassword');

    document.querySelector('form').addEventListener('submit', (e) => {
        if (pwInput.value !== confirmPwInput.value) { //Ensure passwords match before submitting form
            e.preventDefault();
        }
    })

    const validate = () => { //Show error CSS when passwords don't match
        if (!confirmPwInput.value) return
        if (pwInput.value === confirmPwInput.value) {
            pwInput.classList.remove("error");
            confirmPwInput.classList.remove("error");
        } else {
            pwInput.classList.add("error");
            confirmPwInput.classList.add("error");
        }
    }
    const pwInputs = document.querySelectorAll('.passwordField input');
    for (let input of pwInputs) {
        input.addEventListener('keyup', validate)
    }

    const eyes = document.querySelectorAll('.passwordField i');
    for (let eye of eyes) {
        eye.addEventListener('click', () => { //Toggle password visibility
            eye.classList.toggle('bx-hide');
            eye.classList.toggle('bx-show');
            if (eye.previousElementSibling.type === 'password') {
                eye.previousElementSibling.type = 'text';
            } else {
                eye.previousElementSibling.type = 'password';
            }
        });
    }
})();


const tel = (() => {
    const isNum = (e) => {
        return Number.isInteger(parseInt(e.key));
    };
    const isModifier = (e) => {
        return (
            e.key === 'Backspace' ||
            e.key === 'Delete' ||
            e.key === 'Home' ||
            e.key === 'End' ||
            e.key === 'ArrowUp' ||
            e.key === 'ArrowRight' ||
            e.key === 'ArrowDown' ||
            e.key === 'ArrowLeft'
        );
    };

    const checkKey = (e) => {
        if (!isNum(e) && !isModifier(e)) { //If NaN & not a modifier key
            e.preventDefault(); //Cancel keydown
        }
    };

    const format = (e) => {
        if (isModifier(e)) return;
        const input = e.target.value.replace(/\D/g, '').substring(0, 10); // First 10 digits
        const zip = input.substring(0, 3);
        const middle = input.substring(3, 6);
        const last = input.substring(6, 10);

        if (input.length > 6) {
            e.target.value = `(${zip}) ${middle} - ${last}`;
        }
        else if (input.length > 3) {
            e.target.value = `(${zip}) ${middle}`;
        }
        else if (input.length > 0) {
            e.target.value = `(${zip}`;
        }
    };
    const telInput = document.querySelector('#tel');
    telInput.addEventListener('keydown', checkKey);
    telInput.addEventListener('keyup', format);
})();