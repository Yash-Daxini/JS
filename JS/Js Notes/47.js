console.log('Hello');


let regex = /^abc/;

regex = /def$/;

regex = /a.bc/;

regex = /a*bc/;

regex = /ae?bce?/;

regex = /abc\*/;  // \* Escape 



let str = "abc def";

let result = regex.exec(str);

console.log("The result form Exec :",result);

if(regex.test(str)){
    console.log(`The string ${str} match with expression ${regex.source} `);
}
else{
    console.log(`The string ${str} not  match with expression ${regex.source} `);
}
