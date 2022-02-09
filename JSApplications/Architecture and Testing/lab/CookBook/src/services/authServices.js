import { setUserNav } from "../navigation.js";
import { showCatalog } from "../pages/catalog.js";
import { get, post } from "./requester.js";

const endPoints = {
  register: "http://localhost:3030/users/register",
  login: 'http://localhost:3030/users/login',
  logout: 'http://localhost:3030/users/logout'
}


export function register(data) {
  if (data.get('password') != data.get('rePass')) {
      return alert('Passwords don\'t match');
  }

  const body = JSON.stringify({
      email: data.get('email'),
      password: data.get('password'),
  });
  post(endPoints.register, body)
  .then(response =>{
      if (response.status !== 200) {
          throw new Error('Username already exist');
      
      }
      return response.json()
  })
  .then(data => {
      sessionStorage.setItem('auth_token', data.accessToken);
      sessionStorage.setItem('userId', data._id);
      document.getElementById('user').style.display = 'inline-block';
      document.getElementById('guest').style.display = 'none';
      showCatalog()            
  })
  .catch (err => {
      alert(err.message);
  })
}


export function login(data) {
  const body = JSON.stringify({
      email: data.get('email'),
      password: data.get('password')
  });
  post(endPoints.login, body)
  .then(res=>{
      if (res.status == 403){
          throw new Error("User not found!")
      }
      return res.json()
  })
  .then(data => {
      sessionStorage.setItem('auth_token', data.accessToken);
      sessionStorage.setItem('userId', data._id);
      document.getElementById('user').style.display = 'inline-block';
      document.getElementById('guest').style.display = 'none';
      showCatalog()            
  })
  .catch(er => {
      alert(er.message)
  })
  
}

export async function logout() {
    const response = await get(endPoints.logout, null, sessionStorage.getItem('auth_token'))
    if (response.ok) {
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('userId');
        setUserNav()
        showCatalog();
    } else {
        console.error(await response.json());
    }
}

