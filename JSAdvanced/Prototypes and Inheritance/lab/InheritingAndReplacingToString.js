function personAndTeacher() {
    class Person{
        constructor (name, email){
            this.name = name
            this.email = email
        }
        toString(){
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject
        }
        toString(){
            return super.toString().slice(0, -1) + `, subject: ${this.subject})`
        }
    }
    class Student extends Person{
        constructor (name, email, cours){
            super(name, email)
            this.cours = cours
        }
        toString(){
            return super.toString().slice(0, -1) + `, course: ${this.cours})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let teacher = personAndTeacher()
let result = new teacher.Teacher("Bobby", 'Stoychev', 'Math')
console.log(result.toString())