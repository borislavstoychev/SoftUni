window.addEventListener('load', solve);

function solve() {
    let genreInput = document.getElementById('genre');
    let nameInput = document.getElementById('name');
    let authorInput = document.getElementById('author');
    let dateInput = document.getElementById('date');
    let addButtonInput = document.getElementById('add-btn');

    addButtonInput.addEventListener('click', collectSong);

    //colection of song
    let divHitsContainer = document.querySelector('div .all-hits-container');
    console.log(divHitsContainer)
    //likes section
    let totalLike = document.querySelector('.likes > p');
    let likes = 0;

    // saved-container
    let savedDiv = document.querySelector('div .saved-container');

    function collectSong(e){
        e.preventDefault();
        let [genre, name, author, date] = [genreInput.value, nameInput.value, authorInput.value, dateInput.value];
        if (genre && name && author && date){
            [genreInput.value, nameInput.value, authorInput.value, dateInput.value] = ['', '', '', ''];
            createDivInfo(genre, name, author, date)

        }
    };

    function createDivInfo(genre, name, author, date){
        let divInfo = document.createElement('div');
        divInfo.classList.add('hits-info');
        let img = document.createElement('img');
        img.src = './static/img/img.png'
        let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genre}`;
        let h2Name = document.createElement('h2');
        h2Name.textContent = `Name: ${name}`;
        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${author}`;
        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${date}`;
        let buttonSave = document.createElement('button');
        buttonSave.classList.add('save-btn');
        buttonSave.textContent = 'Save song';
        let buttonLike = document.createElement('button');
        buttonLike.classList.add('like-btn');
        buttonLike.textContent = 'Like song';
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'Delete';

        [
            img, 
            h2Genre, 
            h2Name, 
            h2Author, 
            h3Date, 
            buttonSave, 
            buttonLike, 
            buttonDelete
        ]
        .forEach(element => {
            divInfo.appendChild(element)
        });
        divHitsContainer.appendChild(divInfo)

        buttonLike.addEventListener('click', () =>{
            likes ++
            totalLike.textContent = `Total Likes: ${likes}`
            buttonLike.disabled = true

        });

        buttonSave.addEventListener('click', ()=>{
            divInfo.removeChild(buttonSave);
            divInfo.removeChild(buttonLike)
            savedDiv.appendChild(divInfo);
        });

        buttonDelete.addEventListener('click', ()=>{
            divHitsContainer.children.length > 1 
            ? divHitsContainer.removeChild(divInfo) 
            : savedDiv.removeChild(divInfo)
        })
    }
}