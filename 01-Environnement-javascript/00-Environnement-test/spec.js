const assert = require('assert');
const expect = require('chai').expect;
const _ = require('underscore');
const rosie  =require('rosie');


describe('Environnement Check',() => {
  it('Nous devrions être capable de trouver toutes les dépendance de notre environnement', () => {
    assert.notEqual(undefined, expect);
    assert.notEqual(undefined, _);
    assert.notEqual(undefined, rosie);
  });
});
