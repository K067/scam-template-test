const bread = () => {
    const video = document.querySelector('video');
    const breadBtn = document.querySelectorAll('.accordion')[2];

    breadBtn.addEventListener('click', () => {
        breadBtn.nextElementSibling.classList.contains('active') ?
            video.play() :
            video.pause();
    })

}

export default bread;