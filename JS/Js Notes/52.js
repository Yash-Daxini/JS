console.log('Generator');

function* numbersGenerator(){
    let i  = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    // yield 5;
    // yield 5;
    while (true) {
        yield i++;
    }
}

const gen = numbersGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

