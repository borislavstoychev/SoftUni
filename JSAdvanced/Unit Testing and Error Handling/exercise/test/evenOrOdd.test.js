let isOddOrEven = require('../evenOrOdd');
let {expect} = require('chai')


describe('isOddOrEven function', ()=>{
    it('should return undefined when parametar is not string', ()=>{
        expect(isOddOrEven(Object)).to.undefined
        expect(isOddOrEven(5)).to.undefined
    });
    it ('should return even', ()=>{
        expect(isOddOrEven('some')).to.equal('even')
    });
    it ('should return odd', ()=>{
        expect(isOddOrEven('some1')).to.equal('odd')
    });
});