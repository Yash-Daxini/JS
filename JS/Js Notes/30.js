const proto = {
    slogan: function() {
        return 'This is the best company';
    },
    changeName: function(newName) {
        this.name = newName
    }
}
// crete Object like this
const y = Object.create(proto);
y.name = 'ya';
y.role = 'programmer';
y.changeName('yas');
y.changeName = 'yas';
// also create object like this
// const y1 = Object.create(proto,{
//     name : {value : 'ya',writable : true},
//     role : {value : "programmer" },
// })
// y1.changeName("yas");
// y1.changeName = 'yas';
console.log(y);

