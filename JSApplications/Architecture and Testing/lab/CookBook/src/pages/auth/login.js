import { login } from "../../services/authServices.js";

let main;
let section;
let setActiveNav;

export function setupLogin(targetMain, targetSection, onActiveNav){
    main = targetMain;
    section = targetSection;
    setActiveNav = onActiveNav;

    const form = section.querySelector('form');
    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        form.reset();
        login(formData);
    }));
}

export function showLogin() {
    setActiveNav('loginLink');
    main.textContent = '';
    main.appendChild(section);
}