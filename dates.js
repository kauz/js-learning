let val;

const today = new Date();
let birthday = new Date('9-8-1993 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1994');

val = today.getMonth(); // zero-based (january = 0, not 1)
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1986);
birthday.setHours(3);

console.log(val);