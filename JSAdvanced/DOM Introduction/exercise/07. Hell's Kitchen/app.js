function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restorantStaff = {}
      let resturant  = {}
      let staffSalary = {}
      let text = document.querySelector('textarea').value
      for (el of JSON.parse(text)){
         let [restorant,data] = el.split(" - ")
         data = data.split(", ")
         if (!restorantStaff[restorant]){
            restorantStaff[restorant] = []
            staffSalary[restorant] = {}
         }
         for (let p of data){
            let[person, salary] = p.split(' ')
            restorantStaff[restorant].push({'person': person}, {'salary': salary})
            staffSalary[restorant][person] = Number(salary)
         };

      }
      Object.entries(restorantStaff).forEach(el =>{
         let total = []
         for (let i = 1; i < el[1].length; i += 2){
            total.push(Number(el[1][i].salary))
         }
         
         let max = Math.max(...total)
         let av = total.reduce((a,b) => a + b, 0) / total.length
         resturant[el[0]] = {'average': av, 'salary': max}
      })
      
      let sorted = Object.entries(resturant).sort((a,b) => b[1].average - a[1].average)[0]
      let sortedBest = Object.entries(staffSalary[sorted[0]]).sort((a,b) => b[1] - a[1])

      let fields = document.querySelectorAll('p')
      fields[0].innerHTML = `Name: ${sorted[0]} Average Salary: ${sorted[1].average.toFixed(2)} Best Salary: ${sorted[1].salary.toFixed(2)}`
      let worker = ''
      for (let index = 0; index < sortedBest.length; index ++){
      worker += `Name: ${sortedBest[index][0]} With Salary: ${sortedBest[index][1]} `
      };
      fields[1].innerHTML = worker;
   }
}