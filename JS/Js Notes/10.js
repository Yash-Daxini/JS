// function greet(name,thank='thank you')
// {
// 	let msg=`Happy Birthday to ${name} and ${thank}`
// 	return msg;
// }

function greet(name,thank='thank you')
{
	let msg=`Happy Birthday to ${name} and ${thank}`
	console.log(msg);	
}
greet('jay','welcome');

const myobj = {
	name : 'abc',
	game : function(g){
		return g;
	}
}
console.log(myobj.game('gta'));

arr = ['abc','def','ghi','jkl','mno'];

arr.forEach(function(element,index,array)
{
	console.log(element,index);
});
