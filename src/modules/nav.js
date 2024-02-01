const nav = () => {
    const nav = document.querySelectorAll('a');
    const section = document.querySelectorAll('section');

    const activeToggle = e => {
        const regex = /^[^#]*#/g;

        e.preventDefault();

        section.forEach(tab => {
            tab.id === e.target.href.replace(regex, '') ?
                tab.style.display = 'block' :
                tab.style.display = 'none';
        })

        nav.forEach(e => {
            e.classList.remove('actual-page');
        })

        e.target.classList.add('actual-page');
    }

    nav.forEach(e => {
        e.addEventListener('click', activeToggle);
    })
}

export default nav;