const nav = () => {
    const nav = document.querySelectorAll('a');
    const section = document.querySelectorAll('section');

    const activeToggle = e => {
        e.preventDefault();

        nav.forEach(e => {
            e.classList.remove('actual-page');
        })

        e.target.classList.add('actual-page')
    }

    nav.forEach(e => {
        e.addEventListener('click', activeToggle);
    })
}

export default nav;