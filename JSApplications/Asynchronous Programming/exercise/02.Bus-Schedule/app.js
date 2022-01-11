function solve() {
    let nextStopId = 'depot'
    const divInfo = document.getElementById('info');
    const stopInfoSpan = document.querySelector('#info .info')
    const buttonDepart = document.getElementById('depart');
    const buttonArrive = document.getElementById('arrive');


    function depart() {
        if (stopInfoSpan.getAttribute('next-stop-id') !== null){
            nextStopId = stopInfoSpan.getAttribute('next-stop-id')
        };
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`)
        .then(response => response.json())
        .then(data => {
            stopInfoSpan.setAttribute('data-stop-name', data.name);
            stopInfoSpan.setAttribute('next-stop-id', data.next)
            buttonDepart.disabled = true;
            buttonArrive.disabled = false;
            divInfo.textContent = `Next stop ${data.name}`
        })
        .catch(error =>{
            divInfo.textContent = "Error";
            buttonDepart.disabled = true;
            buttonArrive.disabled = true;
        })
    }

    function arrive() {
        let name = stopInfoSpan.getAttribute('data-stop-name')
        divInfo.textContent = `Arriving ${name}`;
        buttonDepart.disabled = false;
        buttonArrive.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();