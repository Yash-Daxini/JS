console.log("This is an arrow function");
function greet(name) {
    console.log(`Hello ${name}`);
}
greet('yash');

var y = (name)=>{
    console.log(`Hello ${name}`);
}

y('hab');

// const gre = () => "Good Morning ";
// const gre = () => ({name : h});


const gree = name => "Good Morning " + name;

console.log(gree('arry'));