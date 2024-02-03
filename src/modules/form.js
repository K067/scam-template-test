import { defaultValue } from "./defaultValue.js";
import validatePlus from "./validatePlus.js";

const form = () => {
    const dropDown = document.querySelector('.form-input-drop');
    const dropList = dropDown.querySelector('.service-list');
    const imgMod = dropDown.querySelector('.img-mod');
    const input = document.querySelectorAll('input[name=user_name],input[name=user_mail]');
    const inputGroup = document.querySelectorAll('.form-input, .service-select')
    const list = dropList.querySelectorAll('.service-name');
    const serviceName = document.querySelector('.service-select');
    const formTitle = document.querySelector('.form-title');
    const field = document.querySelectorAll('input');
    const error = document.querySelector('.error');
    const errorCheck = document.querySelector('.error-check');
    const check = document.querySelector('#checkbox');

    const errorFunc = () => {
        input.forEach(e => {
            if (!e.value) {
                e.style = "outline: 2px solid red";
                error.style.display = 'block';
            }
        })
    }

    dropDown.addEventListener('click', e => {
        const open = dropList.classList.toggle('active');
        if (open) {
            imgMod.style = "transform: rotate(180deg)";
            dropDown.style = "outline: 1px solid rgb(14 59 108 / 47%)";
        } else {
            defaultValue();
        }
    });

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();

        if (!check.checked) {
            errorCheck.style.display = 'block';

            errorFunc();

            return;
        }

        errorCheck.style.display = 'none';

        if (serviceName.textContent === 'Service') {
            dropDown.style = "outline: 1px solid red";
            input.forEach(e => {
                e.style = "outline: 2px solid red";
            })
            error.style.display = 'block';
        } else {
            if (validatePlus(inputGroup)) {
                input.forEach(e => {
                    e.value = '';
                }) ? formTitle.textContent === "Want something?" : formTitle.textContent = "they are coming";

                serviceName.textContent = 'Service';

                setTimeout(() => {
                    formTitle.textContent = "Want something?";
                }, 10000);
            } else {
                errorFunc();
            }
        }
    });

    check.addEventListener('click', () => {
        errorCheck.style.display = 'none';
    })

    input.forEach(e => e.addEventListener('input', () => {
        error.style.display = 'none';
    }));


    list.forEach(e => {
        e.addEventListener('click', e => {
            serviceName.textContent = e.target.textContent;
        })
    });

    field.forEach(e => {
        e.addEventListener('click', () => defaultValue())
    });
}

export default form;