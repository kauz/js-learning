// Module pattern basic structure
/*
( function () {
	// Declare private vars and functions

	return {
		// Declare public vars and funcs
	}
})();*/





/*// STANDARD MODULE PATTERN
let UICtrl = (function() {
	let text = 'Hello World';
	let changeText = function() {
		let element = document.querySelector('h1');
		element.textContent = text;
	}

	return {
		callChangeText: function() {
			changeText();
		}
	}
})();

UICtrl.callChangeText();
*/




// REVEALING MODULE PATTERN
let itemCtrl = (function() {
	let data = [];

	function add(item) {
		data.push(item);
		console.log('Item Added...');
	}

	function get(id) {
		return data.find(item => {
			return item.id === id;
		});
	}


	return {

		add: add,
		get: get
	}

})();

itemCtrl.add({id: 1, name: 'John'});