class Person{
    constructor (firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        Object.defineProperty(this, 'fullName', {
            enumerable: true,
            configurable: true,
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            set(value) {
                let [first,second] = value.split(' ');
                if (first && second){
                    [this.firstName, this.lastName] = value.split(' ');
                }
            },
        });
    }
    
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
let person1 = new Person("Albert", "Simpson");
console.log(person1.fullName); //Albert Simpson
person1.firstName = "Simon";
console.log(person1.fullName); //Simon Simpson
person1.fullName = "Peter";
console.log(person1.firstName);  // Simon
console.log(person1.lastName);  // Simpson