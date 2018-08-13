/*
@[Part 1]

let re;
re = /hello/;
re = /hello/g; // g- global search
re = /hello/i; // i = case insensitive

// console.log(re);
// console.log(re.source);

// exec() - Retrun result in an array or null
let result = re.exec('hello world');
console.log(result);


// test() - Returns true or false
result = re.test('Hello world');
console.log(result);

// match() - Returns result array or null
let str = 'Hello There';
result = str.match(re);
console.log(result);

// search() - Returns index of the first match or -1;
result = str.search(re);
console.log(result);

result = str.replace(re, 'STAY FUCKIN RIGHT');
console.log(result.toUpperCase());
*/



// [Part 2]

let re;
// Literal Characters
re = /hello/;

// Metacharacter Symblos
re = /^h/i; 		// Must start with
re = /d$/i; 		// Must ends with
re = /^hello$/i; 	// Must begin & end with
re = /.ello/; 		// Matches any single character
re = /h*o/i;		// Matches any character 0 or more times
re = /gre?a?y/i;	// Optinal character (could be gray, grey or gry)
re = /gre?a?y\?/i;			// Escape characters 


// String to match
let str = 'Hello Wolrd, mr. Grey?';

// Log results
let result = re.exec(str);
console.log(result);

function reTest (re, str) {
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	} else {
		console.log(`${str} does NOT match ${re.source}`);
	}
}

reTest(re, str);