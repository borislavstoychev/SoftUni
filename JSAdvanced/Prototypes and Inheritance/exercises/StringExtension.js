(function(){
    String.prototype.ensureStart = function (str){
        if (this.startsWith(str)){
            return this + ''
        };
        return str + this
    };
    String.prototype.ensureEnd = function(str){
        if (this.endsWith(str)){
            return this + '';
        };
        return this + str
    };
    String.prototype.isEmpty = function(){
        return this.length === 0;
    };
    String.prototype.truncate = function (n) {
      if (this.length < n) {
        return this + "";
      }
      let value = this;
      while (value.length > n) {
        const index = value.lastIndexOf(" ");
        if (index > -1) {
          value = value.slice(0, index) + "...";
        } else {
          value = n >= 4 ? this.slice(0, n - 3) + "..." : ".".repeat(n);
        }
      }
      return value + "";
    };
    // Constraints: 'format' method needs to be static, therefore
    // is attached to the String Object instead of it's prototype
    String.format = function (str, ...params) {
        params.forEach((key, index) => {
            str = str.replace(`{${index}}`, key);
        });
        return str;
    };
}());

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
  'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}',
  'dog');
console.log(str)

var testString = 'quick brown fox jumps over the lazy dog';
console.log(String.prototype.hasOwnProperty('ensureStart'));
var answer = testString.ensureStart('the ');
console.log(answer)//('the quick brown fox jumps over the lazy dog', 'Incorrect ensureStart() functionality');
answer = answer.ensureStart('the ');
console.log(answer)//('the quick brown fox jumps over the lazy dog', 'Ignored existing start of string');