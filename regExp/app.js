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