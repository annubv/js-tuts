var assert = require('chai').assert;
var out = require('./ex1');
describe('EMAILID', function(){
    it("Should return hidden id", function(){
        assert.equal(out(),'anub....@live.com', 'returned correct answer');
    });
});