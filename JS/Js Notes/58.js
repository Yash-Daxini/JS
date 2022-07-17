console.log('Set');


// let mySet = new Set();

let mySet = new Set([10,15,12,12,15]);

mySet.add('this');
mySet.add('that');
mySet.add('those');
mySet.add('there');
mySet.add('these');
mySet.add('this');

console.log(mySet);

console.log(mySet.size);

mySet.delete(10);
console.log(mySet);

console.log(mySet.has(10));

mySet.forEach(Element=>{
    console.log(Element);
    
})
