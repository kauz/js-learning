let Singleton = (function() {
	let instance;

	function createInstance() {
		let object = new Object({name: 'Brad'});
		return object;
	}

	return {
		getInstance: function() {
			if(!instance) {
				instance = createInstance();
			} 
			return instance;
		}
	}
})();


let instanceA = Singleton.getInstance();
let instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceA === instanceB);