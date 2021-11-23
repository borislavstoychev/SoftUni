let lookupChar = require('../charLookup');
let {expect, assert} = require('chai');

//    • lookupChar(string, index) - accepts a string and an integer (the index of the char we want to lookup) :
//◦ If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
//◦ If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
//◦ If both parameters have correct types and values - return the character at the specified index in the string.

describe('function lookupChar', ()=>{
    it('should return undefined when first parametar is not string', ()=>{
        expect(lookupChar(undefined, 1)).to.undefined
        expect(lookupChar(5, 1)).to.undefined
        expect(lookupChar(Object, 1)).to.undefined
    });
    it('should return undefined when second parametar is not number', ()=>{
        expect(lookupChar('some', undefined)).to.undefined
        expect(lookupChar('five', 1.5)).to.undefined
    });
    it ('should retun Incorect index when index is out of index range', ()=>{
        assert.equal(lookupChar('some', 4), "Incorrect index")
        assert.equal(lookupChar('some', -1), "Incorrect index")
    });
    it ('should return character at specified index', ()=>{
        assert.equal(lookupChar('some', 2), "m")
        assert.equal(lookupChar('some', 1), "o")
    })
})