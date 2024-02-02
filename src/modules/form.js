import { defaultValue } from "./defaultValue.js";

const form = () => {
    const dropDown = document.querySelector('.form-input-drop');
    const dropList = dropDown.querySelector('.service-list');
    const imgMod = dropDown.querySelector('.img-mod');
    const input = document.querySelectorAll('.form-input');
    const list = dropList.querySelectorAll('.service-name');
    const serviceName = document.querySelector('.service-select');
    const formTitle = document.querySelector('.form-title');
    const field = document.querySelectorAll('input, textarea');

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

        serviceName.textContent === 'Service' ? dropDown.style = "outline: 2px solid red" :
            input.forEach(e => {
                e.value = '';
            }) ? formTitle.textContent === "Want something?" : formTitle.textContent = "they are coming";
        serviceName.textContent = 'Service';

        setTimeout(() => {
            formTitle.textContent = "Want something?";
        }, 10000);
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