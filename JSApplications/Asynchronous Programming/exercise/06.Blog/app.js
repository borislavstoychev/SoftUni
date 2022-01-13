function attachEvents() {
    const btnLoad = document.getElementById('btnLoadPosts');
    const btnView = document.getElementById('btnViewPost');
    const sectionPost = document.getElementById('posts');
    const h1Title = document.getElementById('post-title');
    const pBody = document.getElementById('post-body');
    const ulComent= document.getElementById('post-comments');

    btnLoad.addEventListener('click', fetchData)

    function fetchData(){
        fetch(`http://localhost:3030/jsonstore/blog/posts`)
        .then(response => response.json()
        .then(posts => {
            Object.entries(posts)
            .forEach(post => {
                const option = document.createElement("option");
                option.setAttribute('value', post[0])
                option.textContent = post[1].title;
                sectionPost.appendChild(option)
            })
            btnView.addEventListener('click', fetchComment)

            function fetchComment(){
                ulComent.innerText = '';
                fetch('http://localhost:3030/jsonstore/blog/comments')
                .then(response => response.json())
                .then(data => {
                    let id = sectionPost.value;
                    let comments = Object.values(data).filter(({postId}) => postId === id)
                    h1Title.textContent = posts[id]['title'];
                    pBody.textContent = posts[id]['body'];
                    comments.forEach(comment => {
                        const liComment = document.createElement('li');
                        liComment.id = comment.id;
                        liComment.textContent = comment.text;

                        ulComent.appendChild(liComment)
                    })

                })
            }
        }))
    }
    
}

attachEvents();