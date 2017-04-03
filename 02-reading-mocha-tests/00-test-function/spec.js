const expect = require('chai').expect;
const challenge = require('./challenge.js');

describe('linkTo', function() {
  it("devrait être defini" , function() {
    expect(challenge.linkTo).to.exist;
  });

  it("devrait retourner un lien valide pour simplon", function(){
    expect(challenge.linkTo("simplon", "http://simplon.co"))to.eql("<a href='http//simplon.co'>Simplon</a>");
  });
});
