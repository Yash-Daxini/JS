const marks=[51,58,78,89,99];
const name=['jay','yaj','sua','hjda'];
const mixed=[456,'fd','dfdfsd',458,[5,6]];

console.log(marks);
console.log(name);
console.log(mixed);

const arr= new Array(45,55,56,'jayfd');
console.log(arr);
console.log(arr.length);
console.log(Array.isArray(45));
arr[0]=52;
let arrelement = arr[0];
console.log(arr[0]);
console.log('element : ',arrelement);
console.log(arr);
let value = marks.indexOf(0);
console.log(value);

// mutating or modifying arrays
// marks.push(52);
// marks.unshift(52);
// marks.pop(52);
// marks.shift(52);
// marks.splice(2,3);
// marks.reverse();
console.log(marks);
let marks1=[4,5,6,7,8];
marks.concat(marks1);
console.log(marks);

let myobj = {
	name: 'abc',
	surname: 'def',
	rollno: 55,
	marks: [12,13,14,15,16]
}
console.log(myobj);
console.log(myobj['surname']);
console.log(myobj.surname);