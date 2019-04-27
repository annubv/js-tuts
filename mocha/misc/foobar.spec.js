var assert = require('chai').assert;
var out = require('./foobar');
describe('FOOBAR', function(){
    it("Should return foobar", function(){
        assert.equal(out(),"foobar");
    });
});