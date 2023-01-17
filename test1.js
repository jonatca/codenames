const Test2 = require('./test2');
class Test1 {
    constructor() {
        this.test = 'test1';
        this.test2 = new Test2();
    }
}
// Path: test2.js

var test1 = new Test1();
console.log(test1.test2.test);