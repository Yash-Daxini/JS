let element = document.createElement('li');
let text = document.createTextNode('It is a text node');
console.log(element);
element.appendChild(text);
element.className = 'child1';
element.id = 'childnode1';
element.setAttribute('title','mytitle');
element.innerText = 'It is a text node';
element.innerHTML = '<b>It is a text node</b>'

let ul = document.querySelector('ul.list1');
ul.appendChild(element);
console.log(ul);
console.log(element);

let element2 = document.createElement('h1');
let text2 = document.createTextNode('This is a head');
element2.appendChild(text2);

let div = document.querySelector('div.container');
div.appendChild(element2);

let pr = element2.hasAttribute('href');
console.log(pr);
element2.removeAttribute('id');
element2.setAttribute('title','element2title');
console.log(element2);

let element3 = document.createElement('h1');
let text3 = document.createTextNode('CodWitH');
element3.appendChild(text3);
console.log(element3);

let element4 = document.createElement('a');
// element4.appendChild()
element4.setAttribute('href','https://www.codewithharry.com');
element4.setAttribute('id','a');
element4.removeAttribute('id');
console.log(element4);

let list = document.getElementById('ul');
list.removeChild(document.getElementById('zero'));

let element5 = document.createElement('li');
let text5 = document.createTextNode('hellofive');
element5.appendChild(text5);
let ul2 = document.getElementById('ul');
ul2.replaceChild(element5,element);


