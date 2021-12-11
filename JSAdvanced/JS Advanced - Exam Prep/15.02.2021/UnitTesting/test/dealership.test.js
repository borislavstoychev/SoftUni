let dealership = require('../dealership');
let {assert, expect} = require('chai');

describe("dealership tests", function() {
    describe("test newCarCost", function() {

        it("should return final price, recived discoun from old car ", function() {
            let oldCarModel = 'Audi A4 B8'
            let  newCarPrice = 25000
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(10000)
        });
        it('should return new car price, without discount', function(){
            let oldCarModel = 'Audi A3 B7'
            let  newCarPrice = 25000
            expect(dealership.newCarCost(oldCarModel, newCarPrice)).to.equal(25000)
        });
     });

     describe("test carEquipment", function() {

        it("should return list with selected extras", function() {
            let extrasArr = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let  indexArr = [0, 2, 3]
            expect(dealership.carEquipment(extrasArr,  indexArr)).to.eql(['heated seats', 'sport rims', 'navigation'])
        });
     });

     describe("test euroCategory", function() {

        it("should return 5% discount when category is bigger or equal to 4", function() {
            let expectedResuld = `We have added 5% discount to the final price: 14250.`
            expect(dealership.euroCategory(4)).to.equal(expectedResuld)
        });
        it('should return expected message for less then 4 category', function(){
            let expectedResuld = 'Your euro category is low, so there is no discount from the final price!'
            expect(dealership.euroCategory(3)).to.equal(expectedResuld)
        });
     });
});