let menu = document.querySelector('.menu');
let changed = false;

menu.addEventListener('click', () => {
    if (!changed) {
        menu.className = 'menuA'
        changed = true;
        menu = document.querySelector('.menuA');
    }
    else{
        menu.className = 'menu'
        changed = false;
        menu = document.querySelector('.menu');
    }
})