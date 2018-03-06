// sticky navigation bar
function scrollListener() {

    const windowHeight = window.innerHeight - 80;

    if(window.scrollY >= windowHeight) {
        document.querySelector('nav').classList = 'fixed-header';
    } else {
        document.querySelector('nav').classList = '';
    }
}

window.addEventListener('scroll', scrollListener);
window.addEventListener('touchmove', scrollListener);
