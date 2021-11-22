const { expect } = require('chai');
const rgbToHexColor = require('../rgbToHex');

//     • Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
//     • Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
//     • Return undefined if any of the input parameters are of an invalid type or not in the expected range
describe('rgb to hex', () =>{
    it('should return white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('should return black to hex', () =>{
        expect(rgbToHexColor(0,0,0)).to.equal('#000000')
    });
    it ('should return undefined first var out of range', ()=> {
        expect(rgbToHexColor(-1, 0, 0)).to.undefined
    });
    it('sholud return undefined when second var is out of range', ()=>{
        expect(rgbToHexColor(0, -1, 0)).to.undefined
    });
    it('should return undefined when last var is out of range', ()=>{
        expect(rgbToHexColor(0, 0, 300)).to.undefined
    });
    it('sholud return indefined when invalid type of args', ()=>{
        expect(rgbToHexColor(0, 1, "brb")).to.undefined
    });
    it ('should return #77A9EF', ()=>{
        expect(rgbToHexColor(119, 169, 239)).to.equal('#77A9EF')
    })
});