class List{
    constructor (){
        this.list = []
        this.size = 0
    }

    add (elemenent) {
        this.list.push(elemenent)
        this.list.sort((a,b) => a - b)
        this.size++
    }

    remove(index) {
        if (index >= this.list.length || index < 0){
            throw new Error('Index out of range')
        }
        this.list.splice(index, 1)
        this.size--
    }

    get (index){
        if (index >= this.list.length || index < 0){
            throw new Error('Index out of range')
        }
        return this.list[index]
    }

}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.size);
