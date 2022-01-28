const nav = document.querySelector('nav');
const a = nav.querySelector('a.nav-link');

export function setUserNav() {
    if (sessionStorage.getItem('auth_token') != null) {
        [...document.getElementsByClassName('user')].forEach(el=>{
            el.style.display = 'inline-block';
        });
        [...document.getElementsByClassName('guest')].forEach(el=>{
            el.style.display = 'none';
        });
        a.textContent = `Welcome, ${sessionStorage.getItem('email')}`
    } else {
        [...document.getElementsByClassName('user')].forEach(el=>{
            el.style.display = 'none';
        });
        [...document.getElementsByClassName('guest')].forEach(el=>{
            el.style.display = 'inline-block';
        });
    }
}

export function setupNavigation(links) {
    nav.addEventListener('click', (ev) => {
        if (ev.target.tagName == 'A') {
            ev.preventDefault();
            const handler = links[ev.target.id];
            if (handler) {
                ev.preventDefault();
                handler();
            }
        }
    });
}