var assert = require('assert');
var out = require('./exercise2');
describe('Slice', function(){
    it("Should return Anubhav", function(){
        assert.equal(out()[0],'Anubhav');
    });
    it("Should return Champion", function(){
        assert.equal(out()[1],'Champion');
    });
    it("Should return Singh", function(){
        assert.equal(out()[2],'Singh');
    });
});