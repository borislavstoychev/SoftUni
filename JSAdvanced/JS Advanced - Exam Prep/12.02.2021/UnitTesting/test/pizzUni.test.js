let pizzUni = require('../pizza');
let {assert, expect} = require('chai');

describe("Tests pizza", function() {
    describe("test make an order", function() {

        it("should throw an Error when obj doesn’t have orderedPizza", function() {
            let expectedError = 'You must order at least 1 Pizza to finish the order.'
            assert.throw(()=> pizzUni.makeAnOrder({}), expectedError)

        });
        it('check result without order dring', function(){
            let obj = {};
            obj.orderedPizza = 'Margarita'
            let result = `You just ordered ${obj.orderedPizza}`
            expect(pizzUni.makeAnOrder(obj)).to.equal(result)
        });
        it('check result with orderedDring', function(){
            let obj = {};
            obj.orderedPizza = 'Margarita'
            obj.orderedDrink = 'Fanta'
            let result = `You just ordered ${obj.orderedPizza} and ${obj.orderedDrink}.`
            expect(pizzUni.makeAnOrder(obj)).to.equal(result)

        })
     });

     describe("test get remaining work", function() {
        it('check result with all status pizza is ready', function(){
            let statusArr = [{pizzaName: 'Margarita', status: 'ready'}, {pizzaName: 'Kaprichoza', status: 'ready'}]
            let result = 'All orders are complete!'
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(result)
        });
        it('check result when status on pizza Martgarita is not ready', function(){
            let statusArr = [{pizzaName: 'Margarita', status: 'preparing'}, {pizzaName: 'Kaprichoza', status: 'ready'}];
            let result = `The following pizzas are still preparing: ${statusArr[0].pizzaName}.`
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(result)
        })
     });

     describe("test order type", function() {
        it('check result when type of order is Carry Out', function(){
            let typeOfOrder = 'Carry Out';
            let totalSum = 20;
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(18)
        });
        it('check result when tyupe of order is Delivery', function(){
            let typeOfOrder = 'Delivery';
            let totalSum = 20;
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(20)
        })
     });
 
});