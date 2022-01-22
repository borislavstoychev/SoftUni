(() =>{
    window.addEventListener('load', async () => {
        document.querySelector('button.load').addEventListener('click', loadCatches);
        if (sessionStorage.getItem('auth_token') != null) {
            const btnAdd = document.querySelector('button.add');
            document.getElementById('user').style.display = 'inline-block';
            document.getElementById('logout').addEventListener('click', logout);
            btnAdd.disabled = false;
            btnAdd.addEventListener("click", createCatch);
            document.querySelector('p.email > span').textContent = sessionStorage.getItem('user')
        } else {
            document.getElementById('guest').style.display = 'inline-block';
        }
        const div = document.getElementById('catches').textContent = "";    
    
    });

    async function getCatches() {
        const response = await fetch('http://localhost:3030/data/catches');
        const catches = await response.json();
    
        return catches;
    }

    async function loadCatches(){
        const div = document.getElementById('catches');
    
        const catches = await getCatches();
        const divCatche = catches.map(createHtmlCatches);
    
        div.textContent = '';
        divCatche.forEach(c => div.appendChild(c));
    }
    
    async function createCatch(ev){
        ev.preventDefault();
        const form = document.querySelector('form')
        const newCatch = new FormData(form);
        form.reset()
        const body = JSON.stringify({
            angler: newCatch.get('angler'),
            weight: newCatch.get('weight'),
            species: newCatch.get('species'),
            location: newCatch.get('location'),
            bait: newCatch.get('bait'),
            captureTime: newCatch.get('captureTime'),
        });
        const token = sessionStorage.getItem('auth_token');
        const response = await fetch(`http://localhost:3030/data/catches`, {
            method: 'POST',
            headers: {
                "Content-Type": "aplicaton/json",
                'X-Authorization': token,
            },
            body
        });
        const curCatch = await response.json();
        const divCatch = createHtmlCatches(curCatch);
        document.getElementById('catches').appendChild(divCatch)
    
    }
    
    async function updateCatch(e){
        const divCatch = e.target.parentNode
        const id = e.target.getAttribute('data-id');
        const body = JSON.stringify({
            angler: divCatch.children[1].value,
            weight: divCatch.children[3].value,
            species: divCatch.children[5].value,
            location: divCatch.children[7].value,
            bait: divCatch.children[9].value,
            captureTime: divCatch.children[11].value,
        });
        const token = sessionStorage.getItem('auth_token');
        await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "aplicaton/json",
                'X-Authorization': token,
            },
            body
        });
        loadCatches()
    }
    
    async function deleteCatch(e){
        const id = e.target.getAttribute('data-id');
        const token = sessionStorage.getItem('auth_token');
        await fetch(`http://localhost:3030/data/catches/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "aplicaton/json",
                'X-Authorization': token,
            }
        });
    
        const divCatch = e.target.parentNode
        const divCatches = e.target.parentNode.parentNode
        divCatches.removeChild(divCatch)
    
    }

    function createHtmlCatches(catches){
        const lableAngler = e('lable', undefined, "Angler");
        const inputAngler = e('input', {type: 'text', class: 'angler'}, catches.angler);
        const lableWeight = e('lable', undefined, "Weight");
        const inputWeight = e('input', {type: 'text', class: 'weight'}, catches.weight);
        const lableSpecies = e('lable', undefined, "Species");
        const inputSpecies = e('input', {type: 'text', class: 'species'}, catches.species);
        const lableLocation = e('lable', undefined, "Location");
        const inputLocation = e('input', {type: 'text', class: 'location'}, catches.location);
        const lableBait = e('lable', undefined, "Bait");
        const inputBait = e('input', {type: 'text', class: 'bait'}, catches.bait);
        const lableCaptureTime = e('lable', undefined, "Capture Time");
        const inputCaptureTime = e('input', {type: 'text', class: 'captureTime'}, catches.captureTime);
        const btnUpdate = e('button', {'data-id': catches._id, class: 'update'}, "Update");
        btnUpdate.disabled = sessionStorage.getItem('userId') !== catches._ownerId;
        const btnDelete = e('button', {'data-id': catches._id, class: 'delete'}, "Delete");
        btnDelete.disabled = sessionStorage.getItem('userId') !== catches._ownerId;
        btnUpdate.addEventListener('click', updateCatch);
        btnDelete.addEventListener('click', deleteCatch);
        const divCatch = e(
            "div", 
            {class: 'catch', id: catches._ownerId}, 
            lableAngler, 
            inputAngler, 
            lableWeight, 
            inputWeight,
            lableSpecies,
            inputSpecies,
            lableLocation,
            inputLocation,
            lableBait,
            inputBait,
            lableCaptureTime,
            inputCaptureTime,
            btnUpdate,
            btnDelete
        )
        return divCatch
    }
    
    function e(tag, attributes, ...content) {
        const result = document.createElement(tag);
        let firstValue = content[0];
        if(content.length === 1 && typeof(firstValue) !== 'object'){
            if(['input', 'textarea'].includes(tag)){
                result.value = firstValue;
            }else{
                result.textContent = firstValue
            };
        }else{
            result.append(...content)
        }
    
        if (attributes !== undefined){
            Object.keys(attributes).forEach(key=>{
                result.setAttribute(key, attributes[key]);
            })
        }
        return result
    }

    async function logout() {
        const token = sessionStorage.getItem('auth_token');
        const response = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: { 'X-Authorization': token },
        });
        if (!response.ok) {
            const error = await response.json();
            return alert(error.message);
        }
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('userId');
        window.location = 'index.html';
    }
})();




