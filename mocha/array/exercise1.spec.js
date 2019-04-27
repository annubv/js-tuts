var assert = require('assert');
var out = require('./exercise1.js');
describe("First n elements", function(){
    describe("indexOf", function(){
        it("should return 1,2,3", function(){
            assert.deepEqual(out(), [1,2,3]);
        });
        it("should return 3 when asked for length", function(){
            assert.equal(out().length, 3);
        });
        it("should return 0 when asked for index of 1", function(){
            assert.equal(out().indexOf(1), 0);
        });
    });   
});