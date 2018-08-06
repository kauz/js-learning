// Init GitGub
const github = new GitHub;

// Search input
let searchUser = document.querySelector('#search-user');

// Search unput event listener
searchUser.addEventListener('keyup', (e) => {
	// Get input text
	let userText = e.target.value;
	if(userText !== '') {
		// Make http call
		github.getUser(userText)
			.then(data => {
				if (data.profile.message === 'Not Found') {
					// Show alert
				} else {
					// Show profile
				}
			});
	} else {
		// Clear profile
		
	}
})