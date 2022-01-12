function lockedProfile() {
    const main = document.getElementById('main');
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    fetch(url)
    .then(respose => respose.json())
    .then(data =>{
        const users = Object.values(data);
        users.forEach(user => {
            const divProfile = document.createElement('div');
            divProfile.classList.add('profile');
            
            const img = document.createElement('img');
            img.src = './iconProfile2.png';
            img.classList.add('userIcon');
            

            const lableLock = document.createElement('label');
            lableLock.textContent = "Lock";

            const inputLock = document.createElement('input');
            inputLock.type = "radio";
            inputLock.name = `${user._id}Loked`;
            inputLock.value = 'lock';
            inputLock.checked = true;

            const lableUnlock = document.createElement('label');
            lableUnlock.textContent = "Unlock";

            const inputUnlock = document.createElement('input');
            inputUnlock.type = 'radio';
            inputUnlock.name = `${user._id}Loked`;
            inputUnlock.value = 'unlock';

            const br = document.createElement('br');

            const hr = document.createElement('hr');

            const lableUsername = document.createElement('label');
            lableUsername.textContent = "Username";

            const inputUser = document.createElement('input');
            inputUser.type = 'text';
            inputUser.name = `${user.username}Username`;
            inputUser.setAttribute('value', user.username)
            inputUser.style.display = 'inline-block'
            inputUser.style.width = "100%"
            inputUser.disabled = true;
            inputUser.readOnly = true;

            const hidenDiv = document.createElement('div');
            hidenDiv.id = `${user.username}HidenFields`;
            hidenDiv.style.display = 'none';

            const hr2 = document.createElement('hr');

            const emailLabel = document.createElement('label');
            emailLabel.textContent = "Email:";

            const inputEmail = document.createElement('input');
            inputEmail.type = 'email';
            inputEmail.name = `${user.username}Email`;
            inputEmail.value = user.email;
            inputEmail.style.width = '100%';
            inputEmail.disabled = true;
            inputEmail.readOnly = true;

            const ageLabel = document.createElement('label');
            ageLabel.textContent = 'Age:';

            const ageInput = document.createElement('input');
            ageInput.type = 'number';
            ageInput.name = `${user.username}Age`;
            ageInput.value = user.age;
            ageInput.style.width = '100%';
            ageInput.disabled = true;
            ageInput.readOnly = true;
            
            const button = document.createElement('button');
            button.textContent = "Show more";
            button.addEventListener('click', ()=>{
                if (inputUnlock.checked === true){
                    hidenDiv.style.display = button.textContent === 'Hide it' ? 'none' : 'block';
                    button.textContent = button.textContent === 'Show more' ? 'Hide it' : 'Show more';
                }
                
            })

            hidenDiv.appendChild(hr2);
            hidenDiv.appendChild(emailLabel);
            hidenDiv.appendChild(inputEmail);
            hidenDiv.appendChild(ageLabel);
            hidenDiv.appendChild(ageInput);

            divProfile.appendChild(img);
            divProfile.appendChild(lableLock);
            divProfile.appendChild(inputLock);
            divProfile.appendChild(lableUnlock);
            divProfile.appendChild(inputUnlock);
            divProfile.appendChild(br);
            divProfile.appendChild(hr);
            divProfile.appendChild(lableUsername);
            divProfile.appendChild(inputUser);
            divProfile.appendChild(hidenDiv);
            divProfile.appendChild(button);

            main.appendChild(divProfile);

        })
    })
    .catch(error =>{
        alert('Error')
    })
}