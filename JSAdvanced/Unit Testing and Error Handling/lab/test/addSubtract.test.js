const createCalculator = require('../addSubtract');
const { assert } = require('chai');

//    • Return a module (object), containing the functions add(), subtract() and get() as properties
//    • Keep an internal sum that can’t be modified from the outside
//    • The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum
//    • The function get() returns the value of the internal sum


describe('Symmetry function', () =>{
    it('should return expected object', ()=>{
        const expected = {
            add: function(num) { value += Number(num); },
            subtract: function(num) { value -= Number(num); },
            get: function() { return value; }
        }
        assert((createCalculator()),expected)
    });
    it("should return expected result", () => {
        const calc = createCalculator();
        const expected = 2
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        assert.strictEqual(calc.get(), expected);
    });

    it('should not change the internal state from outside', () => {
        const res = createCalculator();
        res.value = 10;
        assert.equal(res.get(), 0);
    });

    

});