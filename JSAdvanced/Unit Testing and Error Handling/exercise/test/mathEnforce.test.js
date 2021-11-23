let mathEnforcer = require("../mathEnforcer");
let {assert, expect} = require('chai');


describe('function mathEnforcer', ()=>{
    describe('function addFive', ()=>{
        it('should return undefined when patrametar is not a number', ()=>{
            expect(mathEnforcer.addFive(undefined)).to.undefined
            expect(mathEnforcer.addFive('5')).to.undefined
        });
        it ('should return number icreases by 5', ()=>{
            assert.strictEqual(mathEnforcer.addFive(5), 10)
            assert.closeTo(mathEnforcer.addFive(5.5), 10.5, 0.01)
            assert.strictEqual(mathEnforcer.addFive(-10), -5)
        })
    });
    describe('function SubstractTen', ()=>{
        it('should return undefined when patrametar is not a number', ()=>{
            expect(mathEnforcer.subtractTen(undefined)).to.undefined
            expect(mathEnforcer.subtractTen('5')).to.undefined
        });
        it ('should return number subtracted by 10', ()=>{
            assert.strictEqual(mathEnforcer.subtractTen(25), 15)
            assert.closeTo(mathEnforcer.subtractTen(15.5), 5.5, 0.01)
            assert.strictEqual(mathEnforcer.subtractTen(-10), -20)
        });
    });
    describe('function sum', ()=>{
        it('should return undefined when first patrametar is not a number', ()=>{
            expect(mathEnforcer.sum(undefined, 4)).to.undefined
            expect(mathEnforcer.sum('5', 4)).to.undefined
            expect(mathEnforcer.sum(null, 4)).to.undefined

        });
        it('should return undefined when second patrametar is not a number', ()=>{
            expect(mathEnforcer.sum(4, undefined)).to.undefined
            expect(mathEnforcer.sum(5, null)).to.undefined
            expect(mathEnforcer.sum(6, '4')).to.undefined

        });
        it ('should return number subtracted by 10', ()=>{
            assert.strictEqual(mathEnforcer.sum(25, 5), 30)
            assert.closeTo(mathEnforcer.sum(15.5, 5.5), 21, 0.01)
            assert.strictEqual(mathEnforcer.sum(-10, -5), -15)
        });
    });
});