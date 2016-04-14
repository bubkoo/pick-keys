'use strict';

var expect = require('chai').expect;


describe('pick-keys: ', function () {

  var pickKeys = require('../../');

  it('common', function () {

    expect(pickKeys()).to.be.eql([]);
    expect(pickKeys(null)).to.be.eql([]);
    expect(pickKeys(1)).to.be.eql([]);
    expect(pickKeys('a')).to.be.eql([]);
    expect(pickKeys([])).to.be.eql([]);

    expect(['0', '1', '2']).to.include.members(pickKeys(['a', 'b', 'c']));
    expect(['a', 'b', 'c']).to.include.members(pickKeys({ a: 1, b: 1, c: 1 }));

    expect(pickKeys({ a: 1, b: 1, c: 1 })).to.have.length.most(3);
    expect(pickKeys({ a: 1, b: 1, c: 1 }, 1)).to.have.length(1);

  });
});
