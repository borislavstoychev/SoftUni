function loadCommits() {
    // Try it with Fetch API
    const ulElement = document.getElementById('commits');
    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    ulElement.innerText = '';
    fetch(url)
    .then(response =>{
        if (response.status == 404){
            throw new Error('404(Not Found)')
        }
        return response.json()
    })
    .then(data => {
        data.forEach(repo => {
			const liElement = document.createElement('li')
			liElement.textContent = `${repo.commit.author.name}: ${repo.commit.message}`

			ulElement.append(liElement)
		})
    })
    .catch(error =>{
        const li = document.createElement('li');
        li.textContent = `Error: ${error.message}`
        ulElement.appendChild(li);
    })
}
