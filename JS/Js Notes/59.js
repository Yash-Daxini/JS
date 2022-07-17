console.log('Symbol');

const sym1 = Symbol('Symbol1');

const sym2 = Symbol('Symbol2');

console.log(sym1 === sym2);

const s1 = Symbol('s1');

const s2 = Symbol('s2');

let myObj = {};

myObj[s1] = "Hello";

myObj[s2] = "Hi";

myObj["name"] = "abc";

myObj[4] = "Four";

// console.log(myObj);

// console.log(myObj[s1]);
// console.log(myObj[s2]);

// console.log(myObj.s2);

for (key in myObj) {
    console.log(myObj[key]);
}





