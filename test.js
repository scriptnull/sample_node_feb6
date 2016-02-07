var superagent = require("superagent"),
    chai = require("chai"),
    expect = chai.expect,
    should = require("should"),
    assert = require("assert");

describe("Index", function () {
  it("renders HTML", function (done) {
    superagent.get("http://localhost:3000/")
      .end(function (e, res) {
        (e === null).should.equal(true);
        res.text.should.equal("Hey buddy!");
        //res.text.should.equal("Test is going to fail. Sorry !");
        done();
      });
  });
  
  it("run fake test", function() {
    assert.ok(1 == 1);
  });
  
});

