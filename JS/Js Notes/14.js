let element = document.getElementById('first');
console.log(element);
// element = element.className;
// console.log(element);
// element = element.childNodes;
// console.log(element);
// element = element.parentNode;
// console.log(element);
element.style.color = 'red';
element.innerText = 'hi hello how are you';
element.innerHTML = '<b> hi hello how are you';

let sel = document.querySelector('first');
console.log(sel);
sel = document.querySelector('child');
console.log(sel);
sel = document.querySelector('div');
console.log(sel);
sel.style.color = 'green';
console.log(sel);

let ele = document.getElementsByClassName('red');
console.log(ele);
ele = document.getElementsByClassName('container');
console.log(ele);
ele = document.getElementsByTagName('div');
console.log(ele);
