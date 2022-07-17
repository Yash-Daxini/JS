// Character Set
let regex = /h[a-z]llo/;
regex = /h[ei]/;
regex = /h[^ae]/;
regex = /h[a-zA-Z]ll[o0-9][10]/;

// Quantifier
regex  = /hel{1}o/;
regex  = /hel{0,2}o/;

// Groupings

regex = /(he){1}l{2}o([0-9]{2})/;

let str = `hello10 hi`;

let result = regex.exec(str);

result = str.match(regex);

console.log("The result form Exec :",result);

if(regex.test(str)){
    console.log(`The string ${str} match with expression ${regex.source} `);
}
else{
    console.log(`The string ${str} not  match with expression ${regex.source} `);
}
