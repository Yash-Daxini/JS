let regex = /\wi/; // word charcater - _ or alphabet or numbers
regex = /\w+i/; // one or more word characters
regex = /\Wi/; // Non word character
regex = /\W+i/; // one or more non word characters
regex = /\di/; // digit
regex = /\d+i/; // one or more digit
regex = /\Di/; // non  digit
regex = /\D+i/; // one or more non digit
regex = /\si/; // whitspace character
regex = /\s+i/; // one or more whitspace character
regex = /hih\b/; // word boundary

// Assertation

regex = /hi(?=h)/;
regex = /hi(?!h)/;

let str = `hi`;

let result = regex.exec(str);

console.log("The result form Exec :",result);

if(regex.test(str)){
    console.log(`The string ${str} match with expression ${regex.source} `);
}
else{
    console.log(`The string ${str} not  match with expression ${regex.source} `);
}
