const numbers = [34,34,12,2,43,87,5,56];
const numbers2 = new Array(23,43,87,3);
let fruits = ['Orange', 'Apple', 'Pear', 'Mango', 'Kiwi', 'Tangerine'];

let val;

//Check arrays length
val = numbers.length;
//Check if is array
val = Array.isArray(numbers);
//Get single value
val = numbers[3];
//Insert into array
numbers[2] = 100;
//Find index of value
val = numbers.indexOf(87);


//MUTATING ARRAYS
//Push to end of an array
numbers.push(250);
//Push to front of an array
numbers.unshift(120);
//Take off from end
numbers.pop();
// Take off from front
numbers.shift();
//Splice values 
numbers.splice(1,1);
// Reverse array
numbers.reverse();


// Concatenate arrays
val = numbers.concat(numbers2);


// Sorting arrays
val = fruits .sort(); //strings sorted by alphabet
val = numbers.sort(); //numbers sorted by the FIRST DIGIT

//Use 'compare function' to sort numbers in a proper way
val = numbers.sort(function(x, y){
	return x - y;
	// Reverse sort
	// return y - x;
});

// Find
function under50(number) {
	return number < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);