let a = ['one','two', 'three'];
console.log(a);
localStorage.setItem('name','random');
localStorage.setItem('name1','aj');
localStorage.setItem('name2','vj');
localStorage.setItem('name3',JSON.stringify(a));

// localStorage.clear();

localStorage.removeItem('name');

let name1 = localStorage.getItem('name1');
name1 = JSON.parse(localStorage.getItem('name3'));
console.log(name1);
// console.log(name3);

let obj = {
    name : 'y',
    surname : 'document',
    mark : 20
}
localStorage.setItem('object',JSON.stringify(obj))
let obj1 = JSON.parse(localStorage.getItem('object'));
console.log(obj1);