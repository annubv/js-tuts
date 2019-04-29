var assert = require("assert");
var out = require("./bfs.js");
describe("BFS Algo", function() {
  it("should return 2,0,3,1", function() {
    assert.deepEqual(out(), [2, 0, 3, 1]);
  });
  it("should return 4 when asked for length", function() {
    assert.equal(out().length, 4);
  });
  it("should return 3 when asked for index of 1", function() {
    assert.equal(out().indexOf(1), 3);
  });
});
