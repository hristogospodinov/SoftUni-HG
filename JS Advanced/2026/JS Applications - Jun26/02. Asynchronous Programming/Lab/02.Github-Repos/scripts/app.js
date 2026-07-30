function loadRepos() {
	// read input value from input id=username
	let userNameInput = document.getElementById('username');
	let userName = userNameInput.value;

	// clear current list
	let result = document.getElementById('repos');
	result.replaceChildren();

	// get user repos
	// if request is successful
	//     display repos
	// else
	//     display error
	fetch(`https://api.github.com/users/${userName}/repos`)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.status);
			}
			return response.json();
		})
		.then(repos => {
			repos.forEach(repo => {
				let li = document.createElement("li");
				let a = document.createElement('a');
				a.textContent = repo.full_name;
				a.href = repo.html_url;
				a.target='_blank';
				li.appendChild(a);
				result.appendChild(li);
			})
		})
		.catch(error => {
			let li = document.createElement("li");
			li.textContent = error;
			result.appendChild(li);
		});



}