var assert = require('assert');
var out = require('./exercise2.js');
describe("First n elements", function(){
    describe("indexOf", function(){
        it("should return 3,4,5", function(){
            assert.deepEqual(out(), [3,4,5]);
        });
        it("should return 3 when asked for length", function(){
            assert.equal(out().length, 3);
        });
        it("should return 0 when asked for index of 3", function(){
            assert.equal(out().indexOf(3), 0);
        });
    });   
});