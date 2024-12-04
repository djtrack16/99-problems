"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.penultimate = penultimate;
exports.kthElement = kthElement;
exports.length = length;
exports.reverse = reverse;
exports.isPalindrome = isPalindrome;
exports.isPalindromeRecur = isPalindromeRecur;
exports.removeConsecutiveDuplicates = removeConsecutiveDuplicates;
exports.pack = pack;
exports.decode = decode;
exports.encodeDirect = encodeDirect;
exports.duplicateN = duplicateN;
exports.dropN = dropN;
exports.lsort = lsort;
//import { match } from 'ts-pattern';
const Array_1 = require("fp-ts/lib/Array");
const Option_1 = require("fp-ts/lib/Option");
function isEmpty(arr) {
    return arr.length == 0;
}
function lastElem(arr) {
    if (arr.length == 0) {
        return Option_1.none;
    }
    else {
        return (0, Option_1.some)(arr[arr.length - 1]);
    }
}
// PO2. Find the penultimate element in a list
function penultimate(arr) {
    if (arr.length <= 1) {
        return Option_1.none;
    }
    else {
        return (0, Option_1.some)(arr[arr.length - 2]);
    }
}
// P03. Find the K'th element of a list. The first element in the list is number 1.
function kthElement(arr, k) {
    return (arr.length >= k) ? (0, Option_1.some)(arr[k]) : Option_1.none;
}
// P04. Find the number of elements of a list (besides built in fns)
function length(arr) {
    const [head, ...tail] = arr;
    //match(arr)
    //  .with([], 0)
    //   .otherwise(1 + length(tail))
    if (head == null) {
        return 0;
    }
    else {
        return 1 + length(tail);
    }
}
// P05. Reverse a list.
function reverse(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start += 1;
        end -= 1;
    }
    return arr;
}
// P06. Find out whether a list is a palindrome.
function isPalindrome(arr) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        if (arr[start] != arr[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    return true;
}
function isPalindromeRecur(arr) {
    if (arr.length <= 1) {
        return true;
    }
    const [first, ...rest] = arr;
    const last = rest[rest.length - 1];
    return first == last && isPalindromeRecur(rest.slice(0, rest.length - 1));
}
//-- P07. Flatten a nested list structure.
function flattenList(list) {
    // match(list)
    //  .with(t,)
    //  .with({ type: 'rectangle' }, ({ width, height }) => width * height)
    //  .exhaustive();
    // const [head, ...tail] = list
    //if (Array.isArray(head)) {
    //   return flattenList(head).concat(flattenList(tail))
    // } else {
    // }
    //if(list.length == 0) {
    //   return list.flat
    // } else {
    //   return []
    //  }
    return [];
}
// P08 (**) Eliminate consecutive duplicates of list elements.
// If a list contains repeated elements they should be replaced with a single copy of the element.
// The order of the elements should not be changed.
function removeConsecutiveDuplicates(list) {
    if (list.length <= 1) {
        return list;
    }
    else {
        const [head, ...tail] = list;
        var i = 0;
        while (tail[i] == tail[i + 1]) {
            i += 1;
        }
        const rest = removeConsecutiveDuplicates(list.slice(i + 1));
        return [head].concat(rest);
    }
}
// P09 Pack consecutive duplicates of list elements into sublists.
// If a list contains repeated elements they should be placed in separate sublists.
function pack(list) {
    if (list.length == 0) {
        return [];
    }
    if (list.length == 1) {
        return [list];
    }
    const [head, ...tail] = list;
    var i = 0;
    while (tail[i] == tail[i + 1]) {
        i += 1;
    }
    const duplicates = list.slice(0, i + 1);
    const rest = pack(list.slice(i + 1));
    return [duplicates].concat(rest);
}
// P10 Run-length encoding of a list.
// Use the result of problem P09 to implement the so-called run-length encoding data compression method.
// Consecutive duplicates of elements are encoded as tuples (N, E) where N is the number of duplicates of the element
function encode(list) {
    return list.map((elem) => {
        return [elem[0], elem.length];
    });
}
// P12 Decode a run-length encoded list.
// Given a run-length code list generated as specified in problem P10, construct its uncompressed version.
function decode(encoding) {
    return encoding.flatMap((tuple) => {
        const [elem, amount] = tuple;
        return Array(amount).fill(elem);
    });
}
// P13 (**) Run-length encoding of a list (direct solution).
// Implement the so-called run-length encoding data compression method directly.
// I.e. don’t use other methods you’ve written (like P09’s pack); do all the work directly.
function encodeDirect(list) {
    if (list.length == 0) {
        return [];
    }
    const [head, ...tail] = list;
    const isElem = ((t) => t == head);
    const spanned = (0, Array_1.spanLeft)(isElem)(tail);
    const duplicates = spanned.init;
    const first_pair = [head, 1 + spanned.init.length];
    const next_pairs = spanned.rest;
    //return [first_pair].concat(encodeDirect(next_pairs))
    return [];
}
// P15 (**) Duplicate the elements of a list a given number of times.
function duplicateN(list, n) {
    const duplicateT = (t) => Array(n).fill(t);
    return list
        .map(duplicateT)
        .reduce((acc, t) => acc.concat(t), []);
}
//P16 (**) Drop every Nth element from a list.
function dropN(list, n) {
    if (list.length == 0 || n == 0) {
        return [];
    }
    const head = (0, Array_1.takeLeft)(n - 1)(list);
    const tail = dropN((0, Array_1.dropLeft)(n)(list), n);
    return head.concat(tail);
}
/*
  -- P18 (**) Extract a slice from a list. Given two indices, I and K,
  -- the slice is the list containing the elements from and including the
  -- Ith element up to but not including the Kth element of the original list.
  -- Start counting the elements with 0.
*/
function slice(i, k, list) {
    return (0, Array_1.takeLeft)(k - i)((0, Array_1.dropLeft)(i)(list));
}
/*
  -- P19 (**) Rotate a list N places to the left.
  -- Use remainder (aka if n is 8 and length of xs is 4, do nothing)
  -- But if n is 9 and length of xs is 4, rotate by 1 .... wraparound logic
*/
function rotate(list, n) {
    const remainder = list.length % n;
    const pivot = (remainder < 0) ? remainder + list.length : remainder;
    return (0, Array_1.dropLeft)(pivot)(list).concat((0, Array_1.takeLeft)(pivot)(list));
}
/*
  -- P26 (**) Generate the combinations of K distinct objects chosen from the N elements of a list.
  -- In how many ways can a committee of 3 be chosen from a group of 12 people?  We all know that there are
  -- C(12,3)= 220 possibilities
  -- C(N,K) denotes the well-known binomial coefficient). For pure mathematicians, this result may be great.
  -- But we want to really generate all the possibilities.
*/
function combinations(list, k) {
    if (k == 0) {
        return [];
    }
    if (list.length == 0) {
        return [[]];
    }
    const [head, ...tail] = list;
    // return combinations with the first elem
    const with_first_elem = combinations(tail, k - 1).map((e) => [head].concat(e));
    // return combinations without first elem
    const without_first_elem = combinations(tail, k);
    return with_first_elem.concat(without_first_elem);
}
/*
  -- P28 (**) Sorting a list of lists according to length of sublists.
  -- a) We suppose that a list contains elements that are lists themselves.
  -- The objective is to sort the elements of the list according to their length.
  -- E.g. short lists first, longer lists later, or vice versa.

*/
function lsort(list) {
    return list.sort((a, b) => (a.length == b.length) ? 0 : ((a.length > b.length) ? 1 : -1));
}
/*
  -- P28b) Again, we suppose that a list contains elements that are lists themselves.
  -- But this time the objective is to sort the elements according to their length frequency;
  -- i.e. in the default, sorting is done ascendingly, lists with rare lengths are placed first,
  -- others with a more frequent length come later.


  function lsortFreq <T> (lists: T[][]): T[][] {
    
    var map = groupedListsByLength(lists)
    const keys = Object.keys(map).sort
    var listsByFrequency: T[][] = []
    for (const key in keys) {
      listsByFrequency.concat(map[key])
    }
    return listsByFrequency
  }

  function groupedListsByLength <T> (lists: T[][]): { [key: number]: T[][] } {
    const grouped: { [key: number]: T[][] } = {};
  
    for (const list of lists) {
      const length = list.length
      if (!grouped[length]) {
        grouped[length] = []
      }
      grouped[length].push(list)
    }
  
    return grouped
  }
*/ 
