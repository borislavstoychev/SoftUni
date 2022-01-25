import {setupLogin, showLogin} from './login.js'
import { setupCatalog, showCatalog } from './catalog.js';
import { setupCreate, showCreate } from './createRecipe.js';
import { setupRegister, showRegister } from './register.js';
import { setupDetails } from './details.js';
import { setupEdit } from './edit.js';
import {setUserNav, setActiveNav, setupNavigation} from './navigation.js'
import {logout} from './logout.js'

window.addEventListener('load', async () => {
    setUserNav();

    const main = document.querySelector('main');

    setupCatalog(main, document.getElementById('catalog'), setActiveNav);
    setupCreate(main, document.getElementById('create'), setActiveNav);
    setupLogin(main, document.getElementById('login'), setActiveNav);
    setupRegister(main, document.getElementById('register'), setActiveNav);
    setupDetails(main, document.getElementById('details'), setActiveNav);
    setupEdit(main, document.getElementById('edit'), setActiveNav);
    document.getElementById('views').remove();

    
    const links = {
        'catalogLink': showCatalog,
        'createLink': showCreate,
        'loginLink': showLogin,
        'registerLink': showRegister,
        'logoutBtn': logout,
    };
    setupNavigation(links);
    
    // Start application in catalog view
    showCatalog();

})