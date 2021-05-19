function companyUsers(arr) {
    let obj  = {};
    arr.forEach(element => {
       let [company, id] = element.split(" -> ");
       if (obj[company] === undefined) obj[company] = [];
       let key = obj[company];
       if (!key.includes(id))  key.push(id);
       obj[company] = key; 
    });
    Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(element => {
        console.log(`${element[0]}
-- ${element[1].join("\n-- ")}`);
    });
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);