console.log("callback function");  

const students = [
    {name: "harry", subject:"js"},
    {name: "barry", subject:"java"}
]

function enrollStudent(student,callback) {
    setTimeout(function() {
        students.push(student);
        console.log("student have been enrolled");
        callback();
    }, 4000);
}

function getStudents() {
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li>${student.name}</li>`
        });
        document.getElementById('student').innerHTML = str;
        console.log("student have been fetched");
    }, 1000);
}
let newStudents = {name : "jerry" , subject : "jq"}
enrollStudent(newStudents,getStudents);
// getStudents();