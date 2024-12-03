import { match } from 'ts-pattern';
import { array } from 'fp-ts';
//import { takeWhile } from 'fp-ts/lib/Array'


module Lists {

  type NestedList<T> = T | Array<NestedList<T>>


  function isEmpty <T> (arr: T[]): Boolean  {
    return arr.length == 0;
  }

  function last <T> (arr: T[]): T  {
    return arr[arr.length - 1];
  }

  //const takeWhile = (arr: any[], func: Boolean) =>
  //  arr.reduce((acc, el) => (func(el) ? acc : acc.concat(el)), []);
  //}
  // P01. Find the last element in a list

  function lastElem <T> (arr: T[]): T {
    //if isEmpty(arr) { 
    //  return null;
   // } else {
      return arr[arr.length - 1]
   // }
  }

  // PO2. Find the penultimate element in a list

  function penultimate <T> (arr: T[]): T {

    return arr[arr.length - 2]
  }

  // P03. Find the K'th element of a list. The first element in the list is number 1.

  function kthElement <T> (arr: T[], k: number): T {
    return arr[k]
  }

  // P04. Find the number of elements of a list (besides built in fns)

  function length <T> (arr: T[]): number {
    const [head, ...tail] = arr;

    //match(arr)
    //  .with([], 0)
   //   .otherwise(1 + length(tail))
   if(head == null) {
    return 0
   } else {
    return 1 + length(tail)
   }

  }

  // P05. Reverse a list.

  function reverse <T> (arr: T[]): T[] {
    var start = 0;
    var end = arr.length - 1;

    while (start < end) {
      arr[start], arr[end] = arr[end], arr[start]
      start += 1;
      end -= 1;
   }
   return arr
  }

  // P06. Find out whether a list is a palindrome.

  function isPalindrome <T> (arr: T[]): Boolean {
    var start = 0;
    var end = arr.length - 1;

    while (start < end) {
      if (arr[start] != arr[end]) {
        return false
      }
      start += 1;
      end -= 1;
   }
   return true
  }

  function isPalindromeRecur <T> (arr: T[]): Boolean {
    if (arr.length <= 1) {
      return true
    }
    const [first, ...rest] = arr;
    const last = lastElem(rest)

    return first == last && isPalindromeRecur(rest.slice(0, rest.length - 1))
  }

  //-- P07. Flatten a nested list structure.

  function flattenList <T> (list: T[][]): T[] {
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
    return []
  }

  // P08 (**) Eliminate consecutive duplicates of list elements.
  // If a list contains repeated elements they should be replaced with a single copy of the element.
  // The order of the elements should not be changed.

  function removeConsecutiveDuplicates <T> (list: T[]): T[] {
    if (list.length <= 1) {
      return list
    } else {
      const [head, ...tail] = list
      var i = 0
      while (tail[i] == tail[i+1]) {
        i += 1
      }
      const rest = removeConsecutiveDuplicates(list.slice(i+1))
      return [head].concat(rest)
    }
  }

  // P09 Pack consecutive duplicates of list elements into sublists.
  // If a list contains repeated elements they should be placed in separate sublists.

  function pack <T> (list: T[]): T[][] {
    if (list.length == 0) {
      return []
    }
    if (list.length == 1) {
      return [list]
    }
    const [head, ...tail] = list
    var i = 0
    while (tail[i] == tail[i+1]) {
      i += 1
    }
    const duplicates = list.slice(0,i+1)
    const rest = removeConsecutiveDuplicates(list.slice(i+1))
    return [duplicates].concat(rest)
  }

  // P10 Run-length encoding of a list.
  // Use the result of problem P09 to implement the so-called run-length encoding data compression method.
  // Consecutive duplicates of elements are encoded as tuples (N, E) where N is the number of duplicates of the element

  function encode <T> (list: T[][]): [T, number][] {
    return list.map((elem: T[]): [T, number] => {
      return [elem[0], elem.length]
    })
  }

  // P12 Decode a run-length encoded list.
  // Given a run-length code list generated as specified in problem P10, construct its uncompressed version.

  function decode <T> (encoding: [T, number][]): T[] {
    return encoding.flatMap((tuple: [T, number]): T[] => {
      const [elem, amount] = tuple
      return Array(amount).fill(elem);
    })
  }

  // P13 (**) Run-length encoding of a list (direct solution).
  // Implement the so-called run-length encoding data compression method directly.
  // I.e. don’t use other methods you’ve written (like P09’s pack); do all the work directly.

  
}