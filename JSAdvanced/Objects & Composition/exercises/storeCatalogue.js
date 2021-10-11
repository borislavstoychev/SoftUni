function catalogue(arr){
    let catalogues = {};
    arr.forEach(element => {
        let [el, price] = element.split(" : ")
        if (!catalogues[element.charAt(0)]){
            catalogues[element.charAt(0)] = {}
        }else if (catalogues[element.charAt(0)][el]){
            catalogues[element.charAt(0)][el] = 0;
        }
        catalogues[element.charAt(0)][el] = price
        
    });
    
    sorted = Object.keys(catalogues).sort((a, b) => a.localeCompare(b))
    for (let key of sorted){
        let element = Object.entries(catalogues[key]).sort((a,b)=> a[0].localeCompare(b[0]))
        console.log(key)
        element.forEach(el => {console.log(`  ${el[0]}: ${el[1]}`)});
        
    }
    
}

catalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])