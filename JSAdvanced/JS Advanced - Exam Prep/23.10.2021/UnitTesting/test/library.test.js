let library = require('../library');
let {assert, expect} = require('chai');


describe("Tests library", function() {
    describe("test calc price of book", function() {
        it("should throw an error when name of book is not string", function() {
            let nameOfBook = undefined;
            let year = 2021;
            let expectedError = "Invalid input"
            assert.throw(() => library.calcPriceOfBook(nameOfBook, year), expectedError)
        });
        it("should throw an error when year of book is not number", function() {
            let nameOfBook = "undefined";
            let year = 'brbrb';
            let expectedError = "Invalid input"
            assert.throw(() => library.calcPriceOfBook(nameOfBook, year), expectedError)
        });
        it("should return expected result when year is less than or equal to 1980", function() {
            let nameOfBook = "undefined";
            let year = 1979;
            let total = 10
            let expectedResult = `Price of ${nameOfBook} is ${total.toFixed(2)}`
            assert.equal(library.calcPriceOfBook(nameOfBook, year), expectedResult)
            assert.equal(library.calcPriceOfBook(nameOfBook, year + 1), expectedResult)

        });
        it("should return expected result when year is greater than 1980", function() {
            let nameOfBook = "undefined";
            let year = 2021;
            let price = 20;
            let expectedResult = `Price of ${nameOfBook} is ${price.toFixed(2)}`
            assert.equal(library.calcPriceOfBook(nameOfBook, year), expectedResult)
        });
     });
     describe("test find book", function(){
        it('should throw an error when given array is empty', function(){
            let booksArr = [];
            let desiredBook = "Bobby";
            let expectedError = 'No books currently available';
            assert.throw(() => library.findBook(booksArr, desiredBook), expectedError)
        });
        it('should return expected result when find the book', function(){
            let booksArr = ["Bobby"];
            let desiredBook = "Bobby";
            let expectedResult = 'We found the book you want.';
            assert.strictEqual(library.findBook(booksArr, desiredBook), expectedResult)
        });
        it('should return expected result when did not find the book', function(){
            let booksArr = ["Borcho"];
            let desiredBook = "Bobby";
            let expectedResult = "The book you are looking for is not here!";
            assert.strictEqual(library.findBook(booksArr, desiredBook), expectedResult)
        });
     });
     describe("test arrange the books", function(){
        it('should throw an error when count book is not number', function(){
            let countBooks = 'undefined'
            let expectedError = 'Invalid input';
            assert.throw(()=> library.arrangeTheBooks(countBooks), expectedError)
        });
        it('should throw an error when count book is negative number', function(){
            let countBooks = -20
            let expectedError = 'Invalid input';
            assert.throw(()=> library.arrangeTheBooks(countBooks), expectedError)
        });
        it('should return expected result when available space is greater ot equal to count book', function(){
            let countBooks = 20
            let expectedResult = 'Great job, the books are arranged.';
            assert.strictEqual(library.arrangeTheBooks(countBooks), expectedResult)
            assert.strictEqual(library.arrangeTheBooks(countBooks + 20), expectedResult)
        });
        it('should return expected result when not available space', function(){
            let countBooks = 60
            let expectedResult = 'Insufficient space, more shelves need to be purchased.';
            assert.strictEqual(library.arrangeTheBooks(countBooks), expectedResult)
        });
     })
});