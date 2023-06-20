//complete this code
class Person {
	constructor(naem,age){
		this._name=name;
		this._age=age;
	}
	get name(){return this._name;}
	set age(age){this._age=age;}
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
		tech(){
		console.log(`${this._name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
