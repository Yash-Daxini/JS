let a = document;
a = document.all;
console.log(a);
a = document.body;
a = document.forms;
Array.from(a).forEach(function(element)
{
	console.log(element);
});
a = document.links[0];
console.log(a);