import fc from 'fast-check'

import *  as A from '../src/arithmetic';

var expect = require('chai').expect;
const { assert } = require('chai')

describe('#isPrime', () => {
  it('should return true if prime', () => {
    const result = A.isPrime(5)
    expect(result).to.equal(true)
  });
  it('should return true if prime', () => {
    const result = A.isPrime(97)
    expect(result).to.equal(true)
  });
  it('should return false if composite', () => {
    const result = A.isPrime(10)
    expect(result).to.equal(false)
  });
});

describe('#gcd', () => {
  it('should return correct gcd', () => {
    const result = A.gcd(20, 15)
    expect(result).to.equal(5)
  });
  it('should return correct gcd', () => {
    const result = A.gcd(765, 25)
    expect(result).to.equal(5)
  });
  it('should return false if composite', () => {
    const result = A.gcd(2,3)
    expect(result).to.equal(1)
  });
});

describe('#primeFactors', () => {
  it('should return correct prime factors', () => {
    const result = A.primeFactors(97)
    assert.deepEqual(result, [97])
  });
  it('should return correct factors', () => {
    const result = A.primeFactors(100)
    assert.deepEqual(result, [2,2,5,5])
  });
  it('should return false if composite', () => {
    const result = A.primeFactors(55)
    assert.deepEqual(result,[5,11])
  });
});

describe('#primeFactorsMultiplicity', () => {
  it('should return correct prime factors', () => {
    const result = A.primeFactorsMultiplicity(97)
    assert.deepEqual(result, new Map<number, number>([
      [97, 1]
    ]))
  });
  it('should return correct factors', () => {
    const result = A.primeFactorsMultiplicity(100)
    assert.deepEqual(result, new Map<number, number>([
      [2,2], [5,2]
    ]))
  });
  it('should return false if composite', () => {
    const result = A.primeFactorsMultiplicity(66)
    assert.deepEqual(result,new Map<number, number>([
      [11,1], [2,1], [3,1]
    ]))
  });
});

describe('#listPrimesInRange', () => {
  it('should return correct primes in range', () => {
    const result = A.listPrimesInRange(50, 60)
    assert.deepEqual(result, [53, 59])
  });
  xit('should return correct primes in range', () => {
    const result = A.listPrimesInRange(0,9)
    assert.deepEqual(result, [2,3,5,7])
  });
  it('should return correct primes in range', () => {
    const result = A.listPrimesInRange(66,66)
    assert.deepEqual(result,[])
  });
})

describe('#goldbachNumbers', () => {
  xit('should return goldbach Numbers', () => {
    const result = A.goldbachNumbers(28)
    assert.deepEqual(result, [5, 23])
  });
  it('hould return goldbach Numbers', () => {
    const result = A.goldbachNumbers(9)
    assert.deepEqual(result, [2,7])
  });
  it('should return goldbach Numbers', () => {
    var result = A.goldbachNumbers(69)
    result.sort
    assert.deepEqual(result,[2,67])
  });
})

describe('#goldbachCompositions', () => {
  xit('should return goldbachCompositions', () => {
    const result = A.goldbachCompositions(20,30)
    assert.deepEqual(result, [
      [20,[3,17]],
      [22,[3,19]],
      [24,[5,19]],
      [26,[3,23]],
      [28,[3,25]] // <<-- 25 is not prime, bug, weird, todo
    ])
  });
  it('should return goldbachCompositions', () => {
    const result = A.goldbachCompositions(41,51)
    assert.deepEqual(result, [
      [42,[5,37]],
      [44,[3,41]],
      [46,[3,43]],
      [48,[5,43]],
    ])
  });
})