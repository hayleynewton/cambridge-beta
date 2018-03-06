// sticky navigation bar
function scrollListener() {

    const navHeight = window.innerWidth < 768 ? 56 : 80;
    const windowHeight = window.innerHeight - navHeight;

    if(window.scrollY >= windowHeight) {
        document.querySelector('nav').classList = 'fixed-header';
    } else {
        document.querySelector('nav').classList = '';
    }
}

window.addEventListener('scroll', scrollListener);
window.addEventListener('touchmove', scrollListener);
