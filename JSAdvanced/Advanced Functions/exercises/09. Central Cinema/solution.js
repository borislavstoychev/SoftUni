function solve() {
    const movieList = document.querySelector('#movies > ul');
    const archiveList = document.querySelector('#archive > ul');
    const clearButton = document.querySelector('#archive > button');
    const onScreenButton = document.querySelector('#container > button');

    onScreenButton.addEventListener('click', addMovie);
    clearButton .addEventListener('click', () => (archiveList.innerHTML = ''))

    function addMovie(e) {
        e.preventDefault();
        let data = [...document.querySelectorAll('#container > input')];
        let [name, hall, price] = data.map(el => el.value);

        if (isValid(name, hall, price)) {
            createLi(name, hall, price);
            data.forEach(el => el.value = "")
        } else return;

        function createLi(name, hall, price) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = name;
            const strong1 = document.createElement('strong');
            strong1.textContent = `Hall: ${hall}`;
            const div = document.createElement('div');
            const strong2 = document.createElement('strong');
            strong2.textContent = Number(price).toFixed(2);
            const input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            const buttonArchive = document.createElement('button');
            buttonArchive.textContent = 'Archive';
            buttonArchive.addEventListener('click', archive);
            [strong2, input, buttonArchive].forEach(el => {
                div.appendChild(el)
            });
            [span, strong1, div].forEach(el => {
                li.appendChild(el)
            });
            movieList.appendChild(li)

            function archive() {
                const soldTickets = input.value;
                input.value = '';
        
                if (
                    !isNaN(Number(soldTickets)) &&
                    soldTickets.trim() !== ""
                ) {
                    const archivLi = document.createElement('li')
        
                    const totalBill = createElement(
                        'strong',
                        `Total amount: ${(
                            Number(price) * Number(soldTickets)
                        ).toFixed(2)}`,
                        null
                    );
        
                    const deleteBtn = createElement('button', 'Delete', null);
                    deleteBtn.addEventListener('click', () =>
                        archivLi.remove()
                    );
                    archivLi.appendChild(span);
                    archivLi.appendChild(totalBill);
                    archivLi.appendChild(deleteBtn);
                    
                    movieList.removeChild(li);
                    archiveList.appendChild(archivLi);
                } else return;
            }
        }

    }

    function createElement(type, txt) {
        const el = document.createElement(type);
        if (txt) el.textContent = txt;
        return el;
    }

    function isValid(name, hall, price) {
        return name.trim() != '' &&
        hall.trim() != '' &&
        price.trim() !==''&&
        !isNaN(Number(price))
    }
}