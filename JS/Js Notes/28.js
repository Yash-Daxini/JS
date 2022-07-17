let stu = {
    name : 'abc',
    surname : 'def',
    project : 'xyz'
}

function obj(givenname) {
    this.name = givenname;
}

obj.prototype.getName = function () {
    return this.name;
}
obj.prototype.setName = function (newName) {
    this.name = newName;
}
let obj2 = new obj('abc');
console.log(obj2);