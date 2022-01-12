function attachEvents() {
    const button = document.getElementById('submit');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
    const forcastDiv = document.getElementById('forecast');
    button.addEventListener('click', search)
    const symbols = {
        "Sunny": "☀",
        "Partly sunny": "⛅",
        "Overcast": '☁',
        "Rain": "☂",
        "Degrees": "°"
    }

    function search(){
        const searchLocation = document.getElementById('location').value;
        fetch('http://localhost:3030/jsonstore/forecaster/locations')
        .then(response => response.json())
        .then(data => {
        const searchinData = data.find(({name}) => name == searchLocation)
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${searchinData.code}`)
        .then(response => response.json())
        .then(data => {
            currentDiv.innerText = "";
            const divForecasts = document.createElement('div');
            divForecasts.classList.add('forecasts')

            const symbolSpan = document.createElement('span');
            symbolSpan.classList.add('condition', 'symbol');
            symbolSpan.textContent = symbols[data.forecast.condition];

            const conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');

            const citySpan = document.createElement('span');
            citySpan.classList.add("forecast-data");
            citySpan.textContent = data.name;

            const degreeSpan = document.createElement('span');
            degreeSpan.classList.add('forecast-data');
            degreeSpan.textContent = data.forecast.low + symbols['Degrees'] + '/' + data.forecast.high + symbols['Degrees'];

            const spanCondition = document.createElement('span');
            spanCondition.classList.add('forecast-data');
            spanCondition.textContent = data.forecast.condition;

            conditionSpan.appendChild(citySpan);
            conditionSpan.appendChild(degreeSpan);
            conditionSpan.appendChild(spanCondition);

            divForecasts.appendChild(symbolSpan);
            divForecasts.appendChild(conditionSpan);

            currentDiv.appendChild(divForecasts);
            forcastDiv.style.display = "block";


        })
        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${searchinData.code}`)
        .then(response => response.json())
        .then(data =>{
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('forecast-info');
            upcomingDiv.innerText = "";
            data.forecast.forEach(el => {
                const spanUpcoming = document.createElement('span');
                spanUpcoming.classList.add('upcoming');

                const symbolSpan = document.createElement('span');
                symbolSpan.classList.add('symbol');
                symbolSpan.textContent = symbols[el.condition];

                const degreeSpan = document.createElement('span');
                degreeSpan.classList.add('forecast-data');
                degreeSpan.textContent = el.low + symbols['Degrees'] + "/" + el.high + symbols['Degrees'];
                
                const conditionSpan = document.createElement('span');
                conditionSpan.classList.add('forecast-data');
                conditionSpan.textContent = el.condition;

                spanUpcoming.appendChild(symbolSpan);
                spanUpcoming.appendChild(degreeSpan);
                spanUpcoming.appendChild(conditionSpan);

                infoDiv.appendChild(spanUpcoming);

                upcomingDiv.appendChild(infoDiv);
            })
            

        })
    })
    .catch(error =>{
        alert('Error - the server doesn’t respond, or the location name cannot be found, or the data is not in the correct format')

    })
    }
    
}

attachEvents();