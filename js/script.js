    // sticky navigation bar
    window.addEventListener('scroll', () => {

        const windowHeight = window.innerHeight - 80;
    
        if(window.scrollY >= windowHeight) {

            document.querySelector('nav').classList = 'fixed-header';
        } else {
            document.querySelector('nav').classList = '';
        }
    });

