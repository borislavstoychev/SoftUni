class Company{
    constructor(){
        this.departments = new Map()
    }
    addEmployee(username, salary, position, department){
        let valid = [Boolean(username), Boolean(salary), Boolean(position), Boolean(department)]
        .includes(false) || salary < 0 
        ? false 
        : true
        if (valid){
            if (!this.departments[department]){
                this.departments[department] = []
            }
            this.departments[department].push({username, salary, position})
            return `New employee is hired. Name: ${username}. Position: ${position}`
        }
        throw new Error('Invalid input!')
        
    }
    bestDepartment(){
        let besty = {}
        Object.entries(this.departments).forEach(element => {
            let [key, value] = element
            let average = value.reduce((a,b) => a + b.salary, 0) / value.length
            besty[key] = average
        });
        let best = Object.entries(besty).sort((a, b) => b[1] - a[1])[0]
        let result = this.departments[best[0]].sort((a,b)=> b.salary - a.salary || a.username.localeCompare(b.username))
        let employees = []
        result.forEach(element => {
            employees.push(`${element.username} ${element.salary} ${element.position}`)
        })
        return `Best Department is: ${best[0]}\nAverage salary: ${best[1].toFixed(2)}\n${employees.join('\n')}`
    }
    
}

let c = new Company();
c.addEmployee('Stanimir', 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment())