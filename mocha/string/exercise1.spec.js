var assert = require('assert');
var out = require('./exercise1');
describe('EMAILID', function(){
    it("Should return hidden id", function(){
        assert.equal(out(),'anub....@live.com');
    });
});