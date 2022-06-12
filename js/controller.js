'use strict'

function controller() {
    const arr = [];
    const form = '#todoForm';
    const htmlForm = document.querySelector(form);

    const inputs = htmlForm.querySelectorAll('input, textarea');
    const input = Array.from(inputs);

    let i = 0;

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const data = input.reduce((acc,input) => {
            acc[input.name] = input.value;
            return acc;
        },{});

        arr.push(data);
        localStorage.setItem(form, JSON.stringify(arr));

        const data2 = JSON.parse(localStorage.getItem(form));
        view(data2[i], htmlForm);
        i += 1;
    };

    htmlForm.addEventListener('submit', handleSubmit);

    return {

    }
}
