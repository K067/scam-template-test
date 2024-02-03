export const defaultValue = e => {
    const dropDown = document.querySelector('.form-input-drop');
    const dropList = dropDown.querySelector('.service-list');
    const imgMod = dropDown.querySelector('.img-mod');

    dropList.classList.remove('active');
    imgMod.style = "transform: none";
    dropDown.style = "outline:none";
    e.style = "outline:none";
}