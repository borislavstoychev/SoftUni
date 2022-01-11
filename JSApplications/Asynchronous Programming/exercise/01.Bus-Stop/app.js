function getInfo() {
    const busIdInput = document.getElementById('stopId');
    let busId = busIdInput.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`
    const ul = document.getElementById('buses');
    const divName = document.getElementById('stopName');

    
    ul.innerText = "";
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data =>{
        divName.textContent = data.name;
        Object.entries(data.buses)
        .forEach(el =>{
            let li = document.createElement('li');
            li.textContent = `Bus ${el[0]} arrives in ${el[1]} minutes`
            ul.appendChild(li)
        })

    })
    .catch(error => {
        divName.textContent = 'Error'
    })
}