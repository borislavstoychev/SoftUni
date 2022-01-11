function loadRepos() {
	const username = document.getElementById('username').value;
  	const url = `https://api.github.com/users/${username}/repos`;
	fetch(url)
	.then(response => {
		if (response.status == 404){
			throw new Error('User not found!');
		}
		return response.json()
	})
	.then(data =>{
		const ulElement = document.getElementById('repos')
		ulElement.innerHTML = ''
		console.log(data)
		data.forEach(repo => {
			const liElement = document.createElement('li')
			const aElement = document.createElement('a')
			aElement.setAttribute('href', repo.html_url)
			aElement.textContent = repo.full_name

			liElement.append(aElement)
			ulElement.append(liElement)
		})
	})
	.catch(error => {
		alert(error.message)
	})
}