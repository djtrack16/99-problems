import fc from 'fast-check'

import * as L from '../src/lists';
import { toNullable } from 'fp-ts/Option';

module ListsTest {

  var expect = require('chai').expect;

  describe('#length', () => {
    it('should work any list of natural numbers', () => {
      fc.assert(
        fc.property(fc.array(fc.nat()), arr => {
          expect(L.length(arr)).equal(arr.length);
        })
      );
    });

    it('should work any list of lists', () => {
      fc.assert(
        fc.property(fc.array(fc.array(fc.boolean())), arr => {
          expect(L.length(arr)).equal(arr.length);
        })
      );
    });
  });

  describe('#reverse', () => {
    it('should work any list of lists of strings', () => {
      fc.assert(
        fc.property(fc.array(fc.array(fc.string())), arr => {
          var original = arr
          var result = L.reverse(arr)
          original.reverse
          expect(result).equal(original);
        })
      );
    });

    it('should work any list of lists of booleans', () => {
      fc.assert(
        fc.property(fc.array(fc.array(fc.boolean())), arr => {
          var original = arr
          var result = L.reverse(arr)
          original.reverse
          expect(result).equal(original);
        })
      )
    })
  });

  describe('#kthElement', () => {
    it('should return kth element if exists', () => {
      const result = L.kthElement([1,2,3,4], 2);
      expect(toNullable(result)).to.equal(3);
    })
  });

  describe('#isPalindrome', () => {
    it('should return true if palindrome', () => {
      const result = L.isPalindrome(['a', 'b', 'c', 'b', 'a']);
      expect(result).to.equal(true);
    })

    it('should return true if palindrome (even length)', () => {
      const result = L.isPalindrome(['a', 'b', 'b', 'a']);
      expect(result).to.equal(true);
    })

    it('should return false if palindrome', () => {
      const result = L.isPalindrome(['a', 'b', 'b']);
      expect(result).to.equal(false);
    })
  });
/*
  describe('#isPalindromeRecur', () => {
    it('should return true if palindrome', () => {
      const result = L.isPalindromeRecur(['a', 'b', 'c', 'b', 'a']);
      expect(result).to.equal(true);
    })

    it('should return true if palindrome (even length)', () => {
      const result = L.isPalindromeRecur(['a', 'b', 'b', 'a']);
      expect(result).to.equal(true);
    })

    it('should return false if palindrome', () => {
      const result = L.isPalindromeRecur(['a', 'b', 'b']);
      expect(result).to.equal(false);
    })
  })

  describe('#removeConsecutiveDuplicates', () => {
    it('should remove dupes if exists', () => {
      const result = L.removeConsecutiveDuplicates([1,2,2,4,4,5])
      expect(result).to.equal([1,2,4,5])
    });
  });
  */

  describe('#duplicateN', () => {
    it('should return kth element if exists', () => {
      const result = L.duplicateN([1,2,3], 2);
      expect(result).to.equal([1,1,2,2,3,3]);
    });
  });
}