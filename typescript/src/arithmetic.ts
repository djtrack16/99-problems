import { match } from 'ts-pattern';
import { array } from 'fp-ts';
import {
    dropLeft, 
    spanLeft,
    takeLeft,
    takeLeftWhile
  } from 'fp-ts/lib/Array'
import { Option, some, none } from 'fp-ts/lib/Option';

module Arithmetic {

//  -- P31 (**) Determine whether a given integer number is prime.
//  -- Prime numbers to test: http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php

  function isPrime (n: number): Boolean {
    const sqrt = Math.sqrt(n)
    const isDivisibleBy = ((m => n % m == 0))

    const range = Array.from(Array(sqrt).keys())

    return !range.some(isDivisibleBy)
  }

/*
  -- P32 (**) Determine the greatest common divisor of two positive integer numbers.
*/
  function gcd (a: number, b: number): number {
    return (b == 0) ? a : gcd(b, b % a)
  }

/*
  -- P33 (*) Determine whether two positive integer numbers are coprime.
*/

  function isCoprime(a: number, b: number): Boolean {
    return gcd(a,b) == 1
  }

/*
  -- P34 (**) Calculate Euler’s totient function ϕ(m). Euler’s so-called totient function 
  -- ϕ(m) is defined as the number of positive integers r(1<=r<=m) that are coprime to m.
    totient m = length (filter (`isCoprime` m) [1..m])

*/

  function totient (n: number): number {
    const range = Array.from(Array(n).keys())
    const func = (a: number): Boolean => { return isCoprime(a,n)}
    return range.filter(func).length
  }

}