function movie(arr) {
    let array  = [];
    function searchingObj(array, n) {
        let res;
        array.forEach(element => {
            if (element["name"] === n){
                res = element;
            }
        });
        return res;
    }
    arr.forEach(element => {
        let result = {};
        if (element.includes("addMovie")) {
            let [, name] = element.split("addMovie ");
            result["name"] = name;
            array.push(result);
        } else if(element.includes("directedBy")){
            let [movie, director] = element.split(" directedBy ");
            result = searchingObj(array, movie);
            if (result !== undefined) {
                result["director"] = director;
            }
        } else if (element.includes("onDate")) {
            let [movie, date] = element.split(" onDate " );
            result = searchingObj(array, movie);
            if (result !== undefined){
                result["date"] = date;
            }
        }
    });
    array.forEach(element => {
        if (element.director && element.date){
            console.log(JSON.stringify(element))
        }
        
    });
}

movie([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);