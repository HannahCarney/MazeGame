var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var str = 'bar';
// var casper = require('casper');

// describe('basic test', function(){
//   it('should do simple arithmetic', function(){
//     str.should.equal('bar');
//   });
// });



describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('welcomes', function(){
    casper.then(function(){
      expect("body").to.have.text("Welcome to the MazeGame");
    });
  });

});