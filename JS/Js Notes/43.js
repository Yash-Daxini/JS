async function f(){
    console.log("Inside function");
    const respose = await fetch('42.txt');
    console.log('Before response');
    const data = await respose.text();
    console.log('Data resolved');
    return data;
}

console.log('Before Calling');
let a = f();
console.log('After Calling');
a.then(data => console.log(data));
console.log('Last line Of file');