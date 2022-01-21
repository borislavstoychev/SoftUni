(async ()=>{
    const form = document.getElementById('form');
    const result = document.querySelector('tbody');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        ev.currentTarget.reset();
        onSubmit(formData);
    }));

    try{
        let response = await fetch('http://localhost:3030/jsonstore/collections/students');
        let data = await response.json();
        Object.values(data).forEach(({firstName, lastName, facultyNumber, grade, _id})=>{
            createTr(firstName, lastName, facultyNumber, grade, _id)
        })
    }catch (error){
        alert(error)
    }

    function createTr(firstName, lastName, facultyNumber, grade, _id){
        const tr = document.createElement('tr');
        tr.setAttribute('id', _id);
        const tdF = document.createElement('td');
        tdF.textContent = firstName;
        const tdL = document.createElement('td');
        tdL.textContent = lastName;
        const tdFac = document.createElement('td');
        tdFac.textContent = facultyNumber;
        const tdG = document.createElement('td');
        tdG.textContent = grade;
        [tdF, tdL, tdFac, tdG].forEach(el => tr.appendChild(el));
        result.appendChild(tr)
    }

    async function onSubmit(data){
        const body = JSON.stringify({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            facultyNumber: data.get('facultyNumber'),
            grade: data.get('grade'),
        });
        try{
            let response = await fetch(`http://localhost:3030/jsonstore/collections/students`, {
                method: "POST",
                headers: {
                    'Content-type': "aplication/json",
                },
                body
            });
            let data = await response.json();
            createTr(data.firstName, data.lastName, data.facultyNumber, data.grade, data._id)
        }catch(error){
            alert(error)
        }
    }
})();