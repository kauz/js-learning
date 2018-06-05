let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val=document.forms;
val=document.forms[0];
val=document.forms[0].id;

val=document.links;
val=document.images;
val=document.scripts;

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach( function(script, index) {
	console.log(`${index}: ${script.getAttribute('src')}`)
});

console.log(val);