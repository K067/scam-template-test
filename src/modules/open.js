import { activeToggle } from './head.js'

const open = () => {
    const btn = document.querySelector('.cool-button');

    btn.addEventListener('click', e => {
        activeToggle(e);
    });
}

export default open;