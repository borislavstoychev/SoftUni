const isSymmetric = require('../checkForSymmetry');
const { expect } = require('chai');

describe('Symmetry function', () =>{
    it('return false for non-valid input', () => {
        expect(isSymmetric('a')).to.false;
    });

    it('return true for symmetric input', () => {
        expect(isSymmetric([1, 1])).to.true;
    });

    it('return false for non-symmetric input', () => {
        expect(isSymmetric([1, 2])).to.false;
    });

    it('return false for comparing different value types', () => {
        expect(isSymmetric(['1', 1])).to.false;
    });

    // test overloading
    it('return true for symmetric array with odd number of elements', () => {
        expect(isSymmetric([1, 1, 1])).to.true;
    });

    it('return true for non-numeric values', () => {
        expect(isSymmetric(['a', 'a', 'a'])).to.true;
    });

    it('return false for valid non-symmetric string array', () => {
        expect(isSymmetric(['a', 'b'])).to.false;
    });
});