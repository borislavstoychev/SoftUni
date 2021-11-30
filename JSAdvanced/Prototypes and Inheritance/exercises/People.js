function solution(){
    class Employee{
        constructor(name, age){
            if (new.target === Employee) {
                throw new Error('Cannot instantiate directly.');
            }
            Object.assign(this, {
                name,
                age,
                salary: 0,
                tasks: [],
            });
        };
        work(){
            const currentTask = this.tasks.shift();
            console.log(this.name + currentTask);
            this.tasks.push(currentTask);
        };
        collectSalary() {
            console.log(
                `${this.name} received ${this.getSalary()} this month.`
            );
        };
        getSalary(){
            return this.salary
        };
    }
    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks.push(` is working on a simple task.`);
        };
    };
    class Senior extends Employee{
        constructor(name, age){
            super(name, age)
            let seniorTasks = [" is working on a complicated task.",
            " is taking time off work.",
            " is supervising junior workers."]
            seniorTasks.forEach(element => {
                this.tasks.push(element)
            });
        };
    };
    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            let managerTasks = [
                " scheduled a meeting.",
                " is preparing a quarterly report."
            ]
            managerTasks.forEach(element => {
                this.tasks.push(element)
            });
        };
        getSalary(){
            return super.getSalary() + this.dividend
        };
    };

    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
};

const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();