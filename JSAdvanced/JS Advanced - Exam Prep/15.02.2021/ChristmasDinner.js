class ChristmasDinner{
    constructor (budget){
        Object.assign(this, {
            budget,
            dishes: [],
            products: [],
            guests: {},
        })
    };
    
    get budget(){
        return this._budget
    }

    set budget(value){
        if (value < 0){
            throw new Error('The budget cannot be a negative number')
        }
        this._budget = value
    }

    shopping(product){
        let [type, money] = product;
        if (money > this.budget){
            throw new Error("Not enough money to buy this product")
        }
        this.budget -= Number(money);
        this.products.push(type);
        return `You have successfully bought ${type}!`
    };

    recipes(recipe) {
        if (!this.checkProduct(recipe.productsList)) {
            throw new Error(`We do not have this product`);
        }

        this.dishes.push(recipe);

        return `${recipe.recipeName} has been successfully cooked!`;
    };

    checkProduct(array){
        for (let i=0; i < array.length; i++){
            if(!this.products.includes(array[i])){
                return false
            }
        }
        return true
    };

    inviteGuests(name, dish){
        if (!this.checkDish(dish)){
            throw new Error("We do not have this dish")
        }
        else if (this.guests.hasOwnProperty(name)){
            throw new  Error("This guest has already been invited")
        }
        this.guests[name] = dish
        return `You have successfully invited ${name}!`
    }

    checkDish(name){
        let result = this.dishes.filter((a) => a.recipeName == name)
        return result[0]
    }

    showAttendance(){
        let result = []
        for (const [name, dish] of Object.entries(this.guests)){
            let products = this.dishes.filter(a => a.recipeName == dish)[0].productsList
            result.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`)
        }
        return result.join('\n')
    }

}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
