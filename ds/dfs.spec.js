var assert = require("assert");
var out = require("./dfs.js");
describe("DFS Algo", function() {
  it("should return 3,2,0,1", function() {
    assert.deepEqual(out(), [3, 2, 0, 1]);
  });
  it("should return 4 when asked for length", function() {
    assert.equal(out().length, 4);
  });
  it("should return 3 when asked for index of 1", function() {
    assert.equal(out().indexOf(1), 3);
  });
});
