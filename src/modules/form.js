import { defaultValue } from "./defaultValue.js";

const form = () => {
    const dropDown = document.querySelector('.form-input-drop');
    const input = document.querySelectorAll('.form-input');
    const dropList = dropDown.querySelector('.service-list');
    const imgMod = dropDown.querySelector('.img-mod');
    const list = dropList.querySelectorAll('.service-name');
    const serviceName = document.querySelector('.service-select');
    const formTitle = document.querySelector('.form-title');
    const field = document.querySelectorAll('input, textarea');

    dropDown.addEventListener('click', e => {
        const open = dropList.classList.toggle('active');
        if (open) {
            imgMod.style = "transform: rotate(180deg)";
            dropDown.style = "outline: 1px solid #0E3B6C";

        } else {
            defaultValue();
        }
    });

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();

        serviceName.textContent === 'Service' ? dropDown.style = "outline: 2px solid red" :
            input.forEach(e => {
                e.value = '';
            }) ? formTitle.textContent === "Join us" : formTitle.textContent = "That's more like it!";
        serviceName.textContent = 'Service';

        setTimeout(() => {
            formTitle.textContent = "Join us";
        }, 5000);
    });

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