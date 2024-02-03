export const defaultValue = () => {
    const dropDown = document.querySelector('.form-input-drop');
    const dropList = dropDown.querySelector('.service-list');
    const imgMod = dropDown.querySelector('.img-mod');
    const input = document.querySelectorAll('input');

    dropList.classList.remove('active');
    imgMod.style = "transform: none";

    input.forEach(elem => {
        elem.addEventListener('input', e => {
            e.target.style = "outline:none";
        })
    })

}