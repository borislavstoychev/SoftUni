(()=>{
    const form = document.querySelector('form');
    const booksBody = document.querySelector('tbody');
    const btnLoad = document.getElementById('loadBooks');

    form.addEventListener('submit', (ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        let id = ev.target.children[0].id
        if (id){
            ev.target.children[0].removeAttribute('id')
            ev.target.children[0].textContent = "FORM"
            onEdit(formData, id)
        }else{
            onCreate(formData)
        }
        ev.currentTarget.reset();
    }));

    btnLoad.addEventListener('click', loadBook);

    async function loadBook(){
        booksBody.textContent = '';
        try{
            let response = await fetch('http://localhost:3030/jsonstore/collections/books');
            let data = await response.json();
            Object.entries(data).forEach((book)=>{
                Object.assign(book[1], {_id: book[0]})
                createTr(book[1])
            })
        }catch (error){
            alert(error)
        }
    }
    

    function createTr(book){
        const tr = document.createElement('tr');
        tr.setAttribute('id', book._id);
        const tdA = document.createElement('td');
        tdA.textContent = book.title;
        const tdT = document.createElement('td');
        tdT.textContent = book.author;
        const tdB = document.createElement('td');
        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        [btnEdit, btnDelete].forEach(el => tdB.appendChild(el));
        [tdA, tdT, tdB].forEach(el => tr.appendChild(el));
        booksBody.appendChild(tr);

        btnEdit.addEventListener('click', editBook);
        
        btnDelete.addEventListener('click', ()=>{
            fetch(`http://localhost:3030/jsonstore/collections/books/${book._id}`, {
                method: "DELETE",
            })
            .then(response=>{
                response.json()
                booksBody.removeChild(tr)
            })
            .catch(error=>alert(error.message))
        });
    }

    function editBook(e){
        let book = e.currentTarget.parentNode.parentNode
        let bookId = book.id;
        let title = book.firstChild;
        let author = book.children[1];
        form.children[0].textContent = 'EDIT';
        form.children[0].id = bookId;
        form.children[2].value = title.textContent;
        form.children[4].value = author.textContent;
        
    }

    async function onEdit(data, id){
        const body = JSON.stringify({
            author: data.get('author'),
            title: data.get('title'),
        });
        try{
            let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                method: "PUT",
                headers: {
                    'Content-type': "aplication/json",
                },
                body
            });
            loadBook()
        }catch(error){
            alert(error)
        }
    }

    async function onCreate(data){
        const body = JSON.stringify({
            author: data.get('author'),
            title: data.get('title'),
        });
        try{
            let response = await fetch(`http://localhost:3030/jsonstore/collections/books/`, {
                method: "POST",
                headers: {
                    'Content-type': "aplication/json",
                },
                body
            });
            let book = await response.json();
            createTr(book)
        }catch(error){
            alert(error)
        }
    }
})();