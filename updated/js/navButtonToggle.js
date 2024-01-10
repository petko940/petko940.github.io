function buttonToggle() {
    const navToggleBtn = document.getElementById('nav-toggle');
    const mainMenu = document.getElementById('main-nav');
    const menuLI = document.getElementsByClassName('scroll-link');

    Array.from(menuLI).forEach(element => {
        element.addEventListener('click', () => {
            mainMenu.classList.remove('in');
        })
    });

}

buttonToggle();

