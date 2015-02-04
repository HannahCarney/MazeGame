var chai = require(chai)

var expect = chai.expect;

describe('basic test' function(){
  it('should do simple arithmetic', function(){
    expect(1+1).toequal(2)
  });
});

describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('hello worlds', function(){
    casper.then(function(){
      expect("body").to.have.text("Hello world");
    });
  });

});