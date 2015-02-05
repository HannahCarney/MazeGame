var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var str = 'bar';


describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('welcome', function(){
    casper.then(function(){
      expect("body").to.have.text("Welcome to the MazeGame");
    });
  });

});