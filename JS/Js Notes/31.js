class Employee {
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName;
        this.experience  = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `${this.name} likes this company`;
    }
    joiningdate(){
        return 2022-this.experience;
    }
    static add(a,b){
        return a+b;
    }
}
y = new Employee('inf',22,'pro');
console.log(y.joiningdate());
console.log(y.slogan());
console.log(Employee.add(15,15));

class programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,givenLanguage){
        super(givenName,givenExperience,givenDivision);
        this.language = givenLanguage;
    }
    favoritelang(){
        if(this.language == 'java')
        {
            return 'java';
        }
        else if(this.language == 'javascript')
        {
            return 'javascript';
        }
        else if(this.language == 'python')
        {
            return 'python';
        }
        else if(this.language == 'c')
        {
            return 'c';
        }
    }
    static multi(a,b)
    {
        return a*b;
    }
}
y1 = new programmer('inf2',23,'pro+','javascript')
console.log(y1.experience);
console.log(y1.favoritelang());
console.log(programmer.multi(15,15));
