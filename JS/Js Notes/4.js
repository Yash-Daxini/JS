// date types 1) primitive 2) reference
//1) primitive - stack
/* string,numbers,boolean,null,undefined,symbol
2) reference - heap
  arrays,object literals,functions,dates
*/

// string
let name="jay"
console.log("name is "+name);
console.log("data type is "+(typeof name));

// numbers?
let marks=34.4
console.log("data type is "+ typeof marks);

// boolean
let bl=true;
console.log("data type is "+ typeof bl +' boolean is  '+bl);

// null
let nvar=null;
console.log("data type is "+ typeof nvar +' Null is '+nvar);

// undefined
let undef
console.log("data type is "+ typeof undef +' value is  '+undef);

// reference
// array
let a=[1,2,3,4,5,6];
console.log("data type is "+ typeof a +' value is  '+a);

// object literals
let student={
	name:'harsh',
	marks:35,
	class:'12th'
}
console.log("data type is "+ typeof student +' value is  '+student);
console.log(student);

// function
function j() {

}
console.log("data type is "+ typeof j +' value is  '+j);

// date
let date= new Date();
console.log("data type is "+ typeof date +' value is  '+date);