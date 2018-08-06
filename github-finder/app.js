// Init GitGub
const github = new GitHub;
// Init UI
const ui = new UI;

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
					ui.showAlert('User not found', 'alert alert-danger')
				} else {
					// Show profile
					ui.showProfile(data.profile);
				}
			});
	} else {
		// Clear profile
		ui.clearProfile();
	}
})