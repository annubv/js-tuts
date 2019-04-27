var assert = require('assert');
var out = require('./exercise3.js');
describe("Most Repeated", function(){
    describe("Number, times", function(){
        it("should return 2", function(){
            assert.deepEqual(out().element, 2);
        });
        it("should return 4", function(){
            assert.equal(out().index, 4);
        });
    });   
});