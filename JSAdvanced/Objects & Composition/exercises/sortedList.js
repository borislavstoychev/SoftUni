function createSortedList(){
    return {
        size: 0,
        list: [],
        add(n){
            this.size ++
            this.list.push(n)
            this.list.sort((a,b) => a-b)
        },
        remove(i){
            if (i >= 0 && i < this.list.length){
            this.size --
            this.list.splice(i,1)
            }
        },
        get(i){
            if (i >= 0 && i < this.size){
                return this.list[i]
            }
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));