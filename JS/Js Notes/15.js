let count = document.querySelector('.red');
count = document.querySelector('.container');
let nodeName = count.childNodes[0].nodeName;
nodeName = count.childNodes[3].nodeType;
console.log(nodeName);
// console.log(count);
/*
Node Types
1.Element
2.Attribute
3.Text Node
8.Comment
9.document
10.docType
*/
console.log(count.childNodes);
// console.log(count.children);
let container = document.querySelector('.container');
console.log(container);
console.log(container.firstChild);
console.log(container.firstElementChild);
let so = document.querySelector('#containerone')
console.log(so);