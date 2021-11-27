let StringBuilder = require('../StringBuilder');
let {assert, expect, should} = require('chai');

describe('String Bilder test', ()=>{
    let bilder = undefined;

    describe('constructor', ()=>{
        it('should return string when parametar is valid', ()=>{
            let bilder = new StringBuilder('hello')
            let expected = 'hello'

            assert.equal(bilder.toString(), expected)
            expect(bilder._stringArray).to.not.empty

        });
        it ("should throw error when parametar is not string", ()=>{
            let expectedError = 'Argument must be a string'

            assert.throw(()=> new StringBuilder(250), expectedError)
            assert.throw(()=> new StringBuilder(null), expectedError)

        });
        it ('should return empty array when is undifined', ()=> {
            let bilder = new StringBuilder(undefined);

            expect(bilder._stringArray).to.empty
            expect(bilder.toString()).to.empty

        });

    });
    describe('append', ()=> {
        it('should throw error when invalid parametar to append', ()=>{
            let bilder = new StringBuilder('hello')
            let string = undefined;
            let string1 = 25;
            let expectedError = 'Argument must be a string'

            assert.throw(()=> bilder.append(string), expectedError)
            assert.throw(()=> bilder.append(string1), expectedError)
        });
        it('should append valid parametar', ()=>{
            let bilder = new StringBuilder('hello')
            let string = 'undefined';
            bilder.append(string)
            let expected = 'helloundefined'
            let expected2 = 'heloundefined'

            assert.equal(bilder.toString(), expected)
            bilder.remove(3,1)
            assert.equal(bilder.toString(), expected2)
        });
    });
    describe('prepend', ()=>{
        it('should throw error when invalid parametar to prepend', ()=>{
            let bilder = new StringBuilder('hello')
            let string = undefined;
            let string1 = 25;
            let expectedError = 'Argument must be a string'
    
            assert.throw(()=> bilder.prepend(string), expectedError)
            assert.throw(()=> bilder.prepend(string1), expectedError)
        });
        it('should prepend valid parametar', ()=>{
            let bilder = new StringBuilder('hello')
            let string = 'undefined';
            bilder.prepend(string)
             let expected = 'undefinedhello'
             let expected2 = 'undefinedhelo'
    
            assert.equal(bilder.toString(), expected)
            bilder.remove(11,1)
            assert.equal(bilder.toString(), expected2)
        });
    });
    describe('insertAt', ()=>{
        it('should return string when parametar to insert is valid', ()=>{
            let bilder = new StringBuilder('hello')
            let string = ' world'
            bilder.insertAt(string, 5)
            let expected = 'hello world'
            let expected2 = 'helloworld'

    
            assert.equal(bilder.toString(), expected)
            expect(bilder._stringArray).to.not.empty
            bilder.remove(5,1)
            assert.equal(bilder.toString(), expected2)
    
        });
        it ("should throw error when parametar is not string", ()=>{
            let expectedError = 'Argument must be a string'
    
            assert.throw(()=> new StringBuilder('hello').insertAt(255, 5), expectedError)
            assert.throw(()=> new StringBuilder('hello').insertAt(undefined, 5), expectedError)
    
        });
    });
    describe('remove', ()=>{
        it('should remove given length from string', ()=>{
            let bilder = new StringBuilder('hello');
            let startIndex = 3;
            let length = 3
            bilder.remove(startIndex, length)
            let expected = 'hel'
    
            assert.equal(bilder.toString(), expected)
            expect(bilder._stringArray).to.not.empty
    
        });  
    });
  
    describe ('toString', ()=>{
        it ('should retun expected or empty string',()=>{
            let arr = ['h', 'e', 'l', 'l', 'o'];

            function expectedString(arr) {
                return arr.join("");
            };

            let bilder = new StringBuilder('hello');
    
    
    
            assert.equal(bilder.toString(), expectedString(arr));
            assert.equal(new StringBuilder(undefined), '');
        });
            
    });
    
    
});