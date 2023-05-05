const navbar = document.querySelector('nav');
const links = navbar.querySelectorAll('.link-halaman');

window.addEventListener('scroll', () => {
    links.forEach((link) => {
        const target = document.querySelector(link.hash);
        if (target && target.getBoundingClientRect().top < window.innerHeight * 0.5) {
            links.forEach((link) => {
                link.classList.remove('active');
            });
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
