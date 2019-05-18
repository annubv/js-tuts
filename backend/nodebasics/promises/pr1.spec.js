let chai = require("chai");
let except = chai.expect;
let pro1 = require("./pr1");

describe("PR1", () => {
  it("it should return the string", done => {
    pro1.prfn("konfinity", false).then(function(result) {
      result += "Now";
      except(result).to.equal("KONFINITYNow");
      done();
    });
  });

  it("it should return the string", done => {
    pro1.prfn("konfinity", true).catch(function(result) {
      except(result).to.equal("Error occured!");
      done();
    });
  });
});
