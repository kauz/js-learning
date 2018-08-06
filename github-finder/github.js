class GitHub {
	constructor() {
		this.client_id = '9564fb1eba3b19058429';
		this.client_secret = '9f21d702644e6de91485689708d973940ce5842d';
	}

	async getUser(user) {
		let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
	
		let profileData = await profileResponse.json();

		return {
			profile: profileData
		}
	}

}