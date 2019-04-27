var assert = require('chai').assert;
var out = require('./gcd'); //change this to gcd2 to check the wrong algo submission
describe('Euc', function(){
    it("Should return 1", function(){
        assert.equal(out()[0],1);
    });
    it("Should return 6", function(){
        assert.equal(out()[1],6);
    });
});
