var assert = require('assert');
var out = require('./exercise3');
describe('Slice', function(){
    it("Should return I am such a champion", function(){
        assert.equal(out(),'I am such a champion');
    });
    it("Should return I", function(){
        assert.equal(out()[0],'I');
    });
    it("Should return S", function(){
        assert.equal(out()[5],'s');
    });
});