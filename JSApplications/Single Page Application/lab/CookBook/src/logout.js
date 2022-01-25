import { setUserNav } from "./navigation.js";
import { showCatalog } from "./catalog.js";

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
        setUserNav();
        showCatalog();
    } else {
        console.error(await response.json());
    }
}
