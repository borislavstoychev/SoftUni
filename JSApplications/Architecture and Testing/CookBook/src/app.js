import {setupLogin, showLogin} from './pages/auth/login.js'
import { setupCatalog, showCatalog } from './pages/catalog.js';
import { setupCreate, showCreate } from './pages/createRecipe.js';
import { setupRegister, showRegister } from './pages/auth/register.js';
import { setupDetails } from './pages/details.js';
import { setupEdit } from './pages/edit.js';
import {setUserNav, setActiveNav, setupNavigation} from './navigation.js'
import {logout} from './services/authServices.js'

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