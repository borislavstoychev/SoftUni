import {setupLogin, showLogin} from './login.js'
import { setupMovie } from './movies.js';
import { setupHome, showHome } from './home.js';
import { setupRegister, showRegister } from './register.js';
import { setupDetails } from './details.js';
// import { setupEdit } from './edit.js';
import {setUserNav, setupNavigation} from './navigation.js'
import { setupAddButton } from './addButton.js';
import { setupCreate } from './addMovies.js';
import {logout} from './logout.js'

window.addEventListener('load', async () => {
    setUserNav();

    const main = document.querySelector('main');

    setupHome(main, document.getElementById('home-page'));
    setupAddButton(document.getElementById('add-movie-button'));
    setupMovie(document.getElementById('movie'));
    setupCreate(main, document.getElementById('add-movie'));
    setupLogin(main, document.getElementById('form-login'));
    setupRegister(main, document.getElementById('form-sign-up'));
    setupDetails(main, document.getElementById('movie-example'));
    // setupEdit(main, document.getElementById('edit-movie'));
    // document.getElementById('views').remove();

    
    const links = {
        'home': showHome,
        // 'createLink': showCreate,
        'loginLink': showLogin,
        'registerLink': showRegister,
        'logoutBtn': logout,
    };
    setupNavigation(links);
    
    // Start application in catalog view
    showHome();

})