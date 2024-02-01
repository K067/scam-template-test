const accordion = () => {
    const acc = document.querySelectorAll('.accordion');
    const panel = document.querySelectorAll('.panel');

    acc.forEach(e => {
        e.addEventListener("click", () => {
            if (e.nextElementSibling.classList.contains('active')) {
                panel.forEach(e => {
                    e.classList.remove('active');
                });
            } else {
                e.nextElementSibling.classList.add('active');
                panel.forEach(e => {
                    e.classList.remove('active');
                });
                e.nextElementSibling.classList.add('active');
            }
        })
    });
}

export default accordion;