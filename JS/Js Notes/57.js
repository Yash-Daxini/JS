console.log('Map');

const Map1 = new Map();

Map1.set('s1','this is the first string');
Map1.set('s2','this is the second string');
Map1.set('s3','this is the third string');

console.log(Map1);

console.log(Map1.get('s3'));

console.log(Map1.size);

// for (const key of Map1) {
//     console.log(key);
// }

// for (const key of Map1.keys()) {
//     console.log(key);
// }

// for (const value of Map1.values()) {
//     console.log(value);
// }

Map1.forEach((value,key) =>{
    console.log(value + " " + key);
})

let arr = Array.from(Map1);

console.log(arr);

let arr1 = Array.from(Map1.keys());
console.log(arr1);

let arr2 = Array.from(Map1.values());
console.log(arr2);



