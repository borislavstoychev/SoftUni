import { setUserNav } from "./navigation.js";
import { showHome } from "./home.js";

export async function logout() {
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'X-Authorization': sessionStorage.getItem('auth_token')
        },
    });
    if (response.ok) {
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        setUserNav();
        showHome();
    } else {
        console.error(await response.json());
    }
}
