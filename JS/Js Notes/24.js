let today = new Date();
console.log(today);
let otherdate = new Date('8-04-2020 04:04:04');
// otherdate = new Date('july 31 2004')
// otherdate = new Date('10/04/2020');
console.log(otherdate);

let a;
a = otherdate.getDay();
a = otherdate.getDate();
a = otherdate.getMinutes();
a = otherdate.getSeconds();
a = otherdate.getHours();
a = otherdate.getTime();
a = otherdate.getMilliseconds();
a = otherdate.getMonth();
console.log(a);
otherdate.setDate(23);
otherdate.setMonth(0);
otherdate.setUTCFullYear(2021);
otherdate.setMinutes(05);
otherdate.setSeconds(06);
otherdate.setHours(04);
console.log(otherdate);


