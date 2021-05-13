function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    arr.forEach(element => {
        let [name, age] = element.split(" ");
        new Cat(name, age).meow()
    });
}
cats(['Mellow 2', 'Tom 5'])