
const nav = document.querySelector('nav');
export function setUserNav() {
    if (sessionStorage.getItem('auth_token') != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

export function setActiveNav(targetId) {
    [...nav.querySelectorAll('a')].forEach(a => a.id == targetId ? a.classList.add('active') : a.classList.remove('active'));
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