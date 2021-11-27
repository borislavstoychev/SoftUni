let PaymentPackage = require('../PaymentPackage')
let {expect, assert} = require('chai')


describe('Payment package tests', () => {
    let instance = undefined;
   
    it('constructor', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.equal(instance._name, 'Name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);
    });

    it('name', () => {
        let instance = new PaymentPackage('Name', 100);
        let expectedError = 'Name must be a non-empty string'
        assert.equal(instance.name, 'Name');


        instance.name = 'Pesho';

        assert.equal(instance.name, 'Pesho');
        assert.throw(() => { instance.name = '' }, expectedError);
        assert.throw(() => { instance.name = 2 }, expectedError);

    });

    it('VAT', () => {
        let instance = new PaymentPackage('Name', 100);
        let expectedError = 'VAT must be a non-negative number'
        assert.equal(instance.VAT, 20);


        instance.VAT = 40;

        assert.equal(instance.VAT, 40);
        assert.throw(() => { instance.VAT = -2 }, expectedError);
        assert.throw(() => { instance.VAT = '2' }, expectedError);
        assert.throw(() => { instance.VAT = 'asdasda' }, expectedError);
        assert.throw(() => { instance.VAT = undefined }, expectedError);
    });
    it('value', () => {
        let instance = new PaymentPackage('Name', 100);
        let expectedError = 'Value must be a non-negative number'
        assert.equal(instance.value, 100);


        instance.value = 40;

        assert.equal(instance.value, 40);
        assert.throw(() => { instance.value = -2 }, expectedError);
        assert.throw(() => { instance.value = '2' }, expectedError);
        assert.doesNotThrow(() => instance.value = 0);
    });

    it('active', () => {
        let instance = new PaymentPackage('Name', 100);
        let expectedError = 'Active status must be a boolean'
        assert.equal(instance.active, true);


        instance.active = false;

        assert.isFalse(instance.active);
        assert.throw(() => { instance.active = -2 }, expectedError);
        assert.throw(() => { instance.active = '2' }, expectedError);
    });

    it('toString', () => {
        function expectedString(name, value, active = true, VAT = 20) {
            return [
                `Package: ${name}` + (active === false ? ' (inactive)' : ''),
                `- Value (excl. VAT): ${value}`,
                `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join("\n");
        }
        let instance = new PaymentPackage('Name', 100);



        assert.equal(instance.toString(), expectedString("Name", 100));
        instance.active = false;
        assert.equal(instance.toString(), expectedString("Name", 100, false, 20));
        instance.VAT = 100;
        assert.equal(instance.toString(), expectedString("Name", 100, false, 100));
        instance.name = 'Gosho';
        assert.equal(instance.toString(), expectedString("Gosho", 100, false, 100));
        instance.value = 2;
        assert.equal(instance.toString(), expectedString("Gosho", 2, false, 100));

    });
})