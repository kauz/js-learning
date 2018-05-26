const firstName = 'William';
const lastName = 'Johnson';
const tags = 'web design,web development,programming'

let val;

val = `${firstName} ${lastName}`;
val += ` sucks!`;
let str = val;

//val = val.length;
val = val.toLowerCase();
val = val.toUpperCase();

val = firstName[0]; // W
val = firstName.charAt(0); // W
val = firstName.indexOf('W'); // iterates from start, returns first W - 0
val = firstName.lastIndexOf('l'); // starts iterating from the end

val = firstName.charAt(firstName.length - 1); // Returns last character of a string;
val = firstName.substring(0, 4); // Will
val = firstName.slice(0, 4); // Will

val = str.split(' ');
val = tags.split(',');

val = str.replace('sucks', 'is great')
val = str.includes('sucks');

console.log(val);