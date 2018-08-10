console.log('Cleared message');

//Clears console so the above log will not be displayed
console.clear();

//Table output for objects and arrays
console.table({a:1, b:2, c:3});

//Error and warning grouped under collapsed level
console.groupCollapsed('Group');
console.error('This is some error');
console.warn('This is some warning');
console.groupEnd('Group');

//Shows time to execute some code
console.time('Counter');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.timeEnd('Counter');

//Shows object properties
console.dir(document.location);

//Shows call trace to reach to current point
function foo() {
    function bar() {
        console.trace();
    }
    bar();
}

foo();