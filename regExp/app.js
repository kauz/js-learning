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



/*// [Part 2, 3, 4]

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
re = /gre?a?y\?/i;	// Escape characters 


// Brackets [] - Character Sets
re = /gr[ae]y/i;	// Must be an a or e
re = /[GF]rey/;		// Must be an G or F
re = /[^GF]ray/i;	// Match anything except G or F
re = /[A-Z]ray/;	// Can be any uppercase letter
re = /[a-z]ray/;	// Can be any lowercase letter
re = /[A-Za-z]ray/;	// Can be any letter
re = /[0-9]ray/; 	// Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i;	// Must occur exactly {n} amount of times 
re = /Hel{2,4}o/i;	// Between {n,m} amount of times
re = /Hel{2,}o/i;	// Must occur at least {n} amount of times 


// Parentheses () - Grouping
re = /([0-9]x){3}/;


// Shorthand Character Classes
re = /\w/;			// Word character - alphanumeric (letter || number) or _
re = /\w+/;			// One or more word character
re = /\W/;			// NON-word characters
re = /\d/;			// Any digit
re = /\d+/;			// One or more digit
re = /\D+/;			// Any non-digit
re = /\s/;			// Match whitespace
re = /\S+/;			// Match Non-wthitespace
re = /Hell\b/i;		// Word boundary


// Assertions
re = /x(?=y)/;		// Match x only if its followed by y
re = /x(?!y)/;		// Match x only if its NOT followed by y





// String to match
let str = 'Hello Wolrd, 3x5x7xy mr. Gray?';

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

reTest(re, str);*/