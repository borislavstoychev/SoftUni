function result() { 
    let proto = {};
    let extObj = Object.create(proto);
    extObj.extend = function(template){
        for (const key in template){
            if (typeof template[key] === 'function'){
                let proto = Object.getPrototypeOf(this);
                proto[key] = template[key];
            }else{
                this[key] = template[key];
            };
        };
    };
    return extObj
};


const myObj = result(); 
const template1 = { 
      extensionMethod: function () {}, 
      extensionProperty: 'someString' 
    } 
    myObj.extend(template1);

console.log(myObj.extensionMethod())

var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};

var testObject = result();
testObject.extend(template);
console.log(testObject.extensionMethod())
// expect(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod')).to.equal(true, "Object's prototype was not extended");
