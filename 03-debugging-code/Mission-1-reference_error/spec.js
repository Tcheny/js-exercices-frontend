const expect = require('chai').expect;
const challenge = require('.challenge.js');

describe('Hello', function(){
  it('devrait être defini', function(){
    expect(challenge.hello).to.exist;
  });
  it("devrait retourner "Hello World" quand on lui passe l'argument "World"", function() {
    expect(challenge.hello('World')).to.equal("Hello World");
  });
  it("devrait retourner "Hello Bob" quand on lui passe l'argument "Bob"",function () {
    expect.(challenge.hello("Bob")).to.equal("Hello Bob");
  });
});
