// Maps = key-value pairs = can use ANY type as a key or value

let map1 = new Map();

// Set keys
let key1 = 'some string',
	key2 = {},
	key3 = function() {};

// Set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// Get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));
// Count values
console.log(map1.size);

// ITERATING MAPS
// Loop using for...of to get keys and values

for (let [key, value] of map1) {
	console.log(`${key} = ${value}`);
}

// Iterate keys only 
for (let key of map1.keys()) {
	console.log(key);
}

// Iterate values only 
for (let value of map1.values()) {
	console.log(value);
}

// Using forEach
map1.forEach( function(value, key) {
	console.log(`${key} = ${value}`);
});