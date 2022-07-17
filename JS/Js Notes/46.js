let reg = /abc/;
reg = /abc/g;
// reg = /abc/i;

// console.log(reg);
// console.log(reg.source);

let s = "abc def ghi jkl abc Abc ABC" ;

let  result = reg.exec(s);
// result = reg.test(s);

// if(result){
//     console.log(result);
//     console.log(result.index);
//     console.log(result.input);
// }

result = s.match(reg);

result = s.search(reg);

result = s.replace(reg , 'xyz');

console.log(result);