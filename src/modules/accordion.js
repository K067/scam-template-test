const accordion = () => {
    const acc = document.querySelectorAll('.accordion');
    const panel = document.querySelectorAll('.panel');

    acc.forEach(e => {
        e.addEventListener("click", () => {

            panel.forEach(e => {
                e.classList.remove('active');
            });
            e.nextElementSibling.classList.add('active');
        })
    });
}

export default accordion;