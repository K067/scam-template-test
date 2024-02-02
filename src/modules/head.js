const nav = document.querySelectorAll('.nav-item a');
const section = document.querySelectorAll('section');
const banner = document.querySelector('.banner');
const title = banner.querySelector('h1');
const sub = banner.querySelector('p');
const regex = /^[^#]*#/g;

const bnHead = e => {
    banner.style.backgroundImage = `url(../image/picture/${e.target.href.replace(regex, '')}.jpg)`;

    switch (true) {
        case e.target.href.replace(regex, '') === 'order':
            title.textContent = 'You want something?';
            sub.textContent = 'Let us know!';
            break;
        case e.target.href.replace(regex, '') === 'contact':
            title.textContent = 'Want to see us?';
            sub.textContent = 'Let them know!';
            break;
        default:
            title.textContent = 'What we can do?';
            sub.textContent = `Let's find out!`;
            break;
    }
}

const activeToggle = e => {
    e.preventDefault();

    section.forEach(tab => {
        tab.id === e.target.href.replace(regex, '') ?
            tab.style.display = 'block' :
            tab.style.display = 'none';
    })

    nav.forEach(e => {
        e.classList.remove('actual-page');
    })

    e.target.parentElement.className !== 'nav-item' ?
        nav[1].classList.add('actual-page') :
        e.target.classList.add('actual-page');

    bnHead(e);
}

const toggle = () => {
    nav.forEach(e => {
        e.addEventListener('click', activeToggle);
    })
}

export { toggle, activeToggle };