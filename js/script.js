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

// auto scroller
// function autoScroller() {

//     const contentDiv = document.querySelector('ul[aria-label="featured"]');
//     const features = contentDiv.querySelectorAll('li');
//     const currentPage = document.querySelector('.home');
//     const active = true;
//     const counter = 1;

//     while(currentPage) {
//         setInterval(() => {
//             if(counter <= features.length) {
//                 //contentDiv.style.left = "-100%";
//             }
//         }, 5000);
//     }
// }

window.addEventListener('scroll', scrollListener);
window.addEventListener('touchmove', scrollListener);


