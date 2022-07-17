console.log('Loops');

let arr = ["avc fdf", 45, 's', [4, 5, 6]];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr.forEach(element => {
//    console.log(element);

// });

obj = {
    name: `abc`,
    "roll no": 101,
    marks: 45
}

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// for (const key in obj) {
//     const element = obj[key];
//     console.log(element);
// }

let str = " Hello  HI  How Are  You";


// for (const char in str) {
//     const element = str[char];
//     console.log(element);
// }

let stu = ["abc", "def", "gehi", "jkh", "mno"];

for (const key in stu) {
    console.log(key);
}

for (const name of stu) {
    console.log(name);
    
}