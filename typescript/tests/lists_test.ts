import fc from 'fast-check'

import * as L from '../src/lists';
import { length, penultimate } from '../src/lists'
import { none, toNullable } from 'fp-ts/Option';

module ListsTest {

  var expect = require('chai').expect
  const { assert } = require('chai')

  describe('#length', () => {
    it('should work any list of natural numbers', () => {
      fc.assert(
        fc.property(fc.array(fc.nat()), arr => {
          expect(length(arr)).equal(arr.length);
        })
      );
    });

    it('should work any list of lists', () => {
      fc.assert(
        fc.property(fc.array(fc.array(fc.boolean())), arr => {
          expect(length(arr)).equal(arr.length);
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

  describe('#penultimate', () => {
    it('should return second to last if exists', () => {
      const result = penultimate([1,2,3,4]);
      expect(toNullable(result)).to.equal(3);
    })

    xit('should return none if does not exist', () => {
      const result = penultimate([1]);
      expect(toNullable(result)).to.equal(none);
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

  describe('#isPalindromeRecur', () => {
    it('should return true if palindrome', () => {
      const result = L.isPalindromeRecur(['a', 'b', 'c', 'b', 'a']);
      expect(result).to.equal(true);
    })

    it('should return true if palindrome (even length)', () => {
      const result = L.isPalindromeRecur(['a', 'b', 'b', 'a']);
      expect(result).to.equal(true);
    })

    it('should return false if not palindrome', () => {
      const result = L.isPalindromeRecur(['a', 'b', 'b']);
      expect(result).to.equal(false);
    })
  })

  describe('#removeConsecutiveDuplicates', () => {
    it('should remove dupes if exists', () => {
      const result = L.removeConsecutiveDuplicates([1,2,2,4,4,5])
      assert.deepEqual(result,[1,2,4,5])
    });
  });

  xdescribe('#pack', () => {
    it('should pack dupes into sublists', () => {
      const result = L.pack([1,1,1,2,2,4,4,5])
      assert.deepEqual(result,[
        [1,1,1],
        [2,2],
        [4,4],
        [5]
      ]
      )
    });
  });

  describe('#decode', () => {
    it('should decode an proper encoding', () => {
      const result = L.decode([[1,2],[2,3],[4,1]])
      assert.deepEqual(result,[1,1,2,2,2,4])
    });
  });

  xdescribe('#encodeDirect', () => {
    it('should encode a list using run length', () => {
      const result = L.encodeDirect([1,1,2,2,4,4,4,5,6])
      assert.deepEqual(result,[
        [1,2],
        [2,2],
        [4,3],
        [5,1],
        [6,1]]
      )
    });
  });


  describe('#duplicateN', () => {
    it('should return kth element if exists', () => {
      const result = L.duplicateN([1,2,3], 2);
      assert.deepEqual(result, [1,1,2,2,3,3]);
    });
  });

  describe('#dropN', () => {
    it('should drop the Nth element if exists', () => {
      const result = L.dropN([1,2,3], 2);
      assert.deepEqual(result, [1,3]);
    });

    it('should not drop the Nth element if not exists', () => {
      const result = L.dropN([1], 2);
      assert.deepEqual(result, [1]);
    });

    xit('should drop the Nth element if exists', () => {
      const result = L.dropN([1,2,3], 1);
      assert.deepEqual(result, [2,3]);
    });
  });

}