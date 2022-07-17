let obj = {
	name: 'jay vjljblj',
	age: 98,
	type: "good",
	language: "c"
}
for(let key in obj){
	console.log(`the ${key} of object is ${obj[key]}`);
}
for(let key in obj)
{
	console.log(`${key} : ${obj[key]}`);

}
let a = [2,3,5,4,6,87];
// for(i=0;i<a.length;i++)
// {
// 	console.log(a[i]);
// }
a.forEach(function(element, index, array)
{
	console.log(element,index,array);
});
