
//inheritance
/*
class Parent{
    constructor(){
        this.motherName = "Dilwara Khanam"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.ChildName = name;
    }

    getFullName(){
        return this.ChildName + " " + this.motherName
    }
}
const ChildName1 = new Child ('Kashfi hasan');
const ChildName2 = new Child ('Sumiya Khanam')
console.log(ChildName1.getFullName());
console.log(ChildName2);
*/


/////////////////////////////
class Parent{
    constructor(){
        this.motherName = "Dilwara Khanam"
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.childName = name;
    }

    getName(){
        return this.childName + " " + this.motherName;
    }
}
const childName1 = new Child("Kashfi Hasan");
const childName2 = new Child ("Sumiya Khanam");
console.log(childName1.getName());
console.log(childName2);