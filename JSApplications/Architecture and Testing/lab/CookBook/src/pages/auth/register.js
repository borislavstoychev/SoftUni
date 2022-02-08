import { register } from '../../services/authServices.js';


let main;
let section;
let setActiveNav;

export function setupRegister(targetMain, targetSection, onActiveNav) {
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;

    const form = section.querySelector('form')
    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        ev.currentTarget.reset();
        register(formData);
    }));
}


export function showRegister() {
    setActiveNav('registerLink');
    main.textContent = '';
    main.appendChild(section);
}