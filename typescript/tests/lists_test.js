"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_check_1 = __importDefault(require("fast-check"));
const L = __importStar(require("../src/lists"));
const lists_1 = require("../src/lists");
const Option_1 = require("fp-ts/Option");
var ListsTest;
(function (ListsTest) {
    var expect = require('chai').expect;
    const { assert } = require('chai');
    describe('#length', () => {
        it('should work any list of natural numbers', () => {
            fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.array(fast_check_1.default.nat()), arr => {
                expect((0, lists_1.length)(arr)).equal(arr.length);
            }));
        });
        it('should work any list of lists', () => {
            fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.array(fast_check_1.default.array(fast_check_1.default.boolean())), arr => {
                expect((0, lists_1.length)(arr)).equal(arr.length);
            }));
        });
    });
    describe('#reverse', () => {
        it('should work any list of lists of strings', () => {
            fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.array(fast_check_1.default.array(fast_check_1.default.string())), arr => {
                var original = arr;
                var result = L.reverse(arr);
                original.reverse;
                expect(result).equal(original);
            }));
        });
        it('should work any list of lists of booleans', () => {
            fast_check_1.default.assert(fast_check_1.default.property(fast_check_1.default.array(fast_check_1.default.array(fast_check_1.default.boolean())), arr => {
                var original = arr;
                var result = L.reverse(arr);
                original.reverse;
                expect(result).equal(original);
            }));
        });
    });
    describe('#kthElement', () => {
        it('should return kth element if exists', () => {
            const result = L.kthElement([1, 2, 3, 4], 2);
            expect((0, Option_1.toNullable)(result)).to.equal(3);
        });
    });
    describe('#penultimate', () => {
        it('should return second to last if exists', () => {
            const result = (0, lists_1.penultimate)([1, 2, 3, 4]);
            expect((0, Option_1.toNullable)(result)).to.equal(3);
        });
        xit('should return none if does not exist', () => {
            const result = (0, lists_1.penultimate)([1]);
            expect((0, Option_1.toNullable)(result)).to.equal(Option_1.none);
        });
    });
    describe('#isPalindrome', () => {
        it('should return true if palindrome', () => {
            const result = L.isPalindrome(['a', 'b', 'c', 'b', 'a']);
            expect(result).to.equal(true);
        });
        it('should return true if palindrome (even length)', () => {
            const result = L.isPalindrome(['a', 'b', 'b', 'a']);
            expect(result).to.equal(true);
        });
        it('should return false if palindrome', () => {
            const result = L.isPalindrome(['a', 'b', 'b']);
            expect(result).to.equal(false);
        });
    });
    describe('#isPalindromeRecur', () => {
        it('should return true if palindrome', () => {
            const result = L.isPalindromeRecur(['a', 'b', 'c', 'b', 'a']);
            expect(result).to.equal(true);
        });
        it('should return true if palindrome (even length)', () => {
            const result = L.isPalindromeRecur(['a', 'b', 'b', 'a']);
            expect(result).to.equal(true);
        });
        it('should return false if not palindrome', () => {
            const result = L.isPalindromeRecur(['a', 'b', 'b']);
            expect(result).to.equal(false);
        });
    });
    describe('#removeConsecutiveDuplicates', () => {
        it('should remove dupes if exists', () => {
            const result = L.removeConsecutiveDuplicates([1, 2, 2, 4, 4, 5]);
            assert.deepEqual(result, [1, 2, 4, 5]);
        });
    });
    xdescribe('#pack', () => {
        it('should pack dupes into sublists', () => {
            const result = L.pack([1, 1, 1, 2, 2, 4, 4, 5]);
            assert.deepEqual(result, [
                [1, 1, 1],
                [2, 2],
                [4, 4],
                [5]
            ]);
        });
    });
    describe('#decode', () => {
        it('should decode an proper encoding', () => {
            const result = L.decode([[1, 2], [2, 3], [4, 1]]);
            assert.deepEqual(result, [1, 1, 2, 2, 2, 4]);
        });
    });
    xdescribe('#encodeDirect', () => {
        it('should encode a list using run length', () => {
            const result = L.encodeDirect([1, 1, 2, 2, 4, 4, 4, 5, 6]);
            assert.deepEqual(result, [
                [1, 2],
                [2, 2],
                [4, 3],
                [5, 1],
                [6, 1]
            ]);
        });
    });
    describe('#duplicateN', () => {
        it('should return kth element if exists', () => {
            const result = L.duplicateN([1, 2, 3], 2);
            assert.deepEqual(result, [1, 1, 2, 2, 3, 3]);
        });
    });
    describe('#dropN', () => {
        it('should drop the Nth element if exists', () => {
            const result = L.dropN([1, 2, 3], 2);
            assert.deepEqual(result, [1, 3]);
        });
    });
})(ListsTest || (ListsTest = {}));
