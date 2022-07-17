console.log('Destructring');

let a,b ;

[a,b] = [11,12];

console.log(a , b);

[a,b,c,d,e] = [1,2,3,4,5];

[a,b,c, ...d] = [1,2,3,4,5];

console.log(a,b,c,d,e);

({a,b,c,...d} = {a:34,b:35,c:36,d:37,e:38});

console.log(a,b,c,d);

const name = ["abc","def","ghi"];

[a,b,c] = name;

console.log(a,b,c);

let stu = {
    sname : "abc",
    age : 38,
    marks : 98,
    work : function() {console.log("Working");
    }
}

const {sname,age,marks,work} = stu;

console.log(sname,age,marks,work);

