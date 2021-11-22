// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const sum = require('../sumOfNumbers');
const { expect } = require('chai');

// Test the following functionality:

// 1 Return the sum of the values of all elements inside the array.

describe('Sum function', () => {
   
    it('sums single number', () => {
         //Arange
        let input = [1]
        let expectedResult = 1
        // Act
        let actualResult = sum(input)
        // Assert
        expect(actualResult).to.equal(expectedResult);
    });

    // test overloading
    it('sums mutiple numbers', () => {
         //Arange
        let input = [1, 2, 3, 4 ,5]
        let expectedResult = 15
        // Act
        let actualResult = sum(input)
        // Assert
        expect(actualResult).to.equal(expectedResult);
    });

    it('sums string numbers', () => {
         //Arange
        let input = ['1', '2', '3', '4' ,'5']
        let expectedResult = 15
        // Act
        let actualResult = sum(input)
        // Assert
        expect(actualResult).to.equal(expectedResult);
    });
});