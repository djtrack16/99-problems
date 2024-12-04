import fc from 'fast-check'

import *  as A from '../src/arithmetic';

var expect = require('chai').expect;

describe('#isPrime', () => {
  it('should return true if prime', () => {
    //console.log("ASDFASDF")
    const result = A.isPrime(5)
    //console.log(result)
    expect(result).to.equal(true)
  });
});