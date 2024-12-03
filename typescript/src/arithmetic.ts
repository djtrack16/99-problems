import { match } from 'ts-pattern';
import { array, group } from 'fp-ts';
import {
    dropLeft, 
    spanLeft,
    takeLeft,
    takeLeftWhile
  } from 'fp-ts/lib/Array'
import { Option, some, none } from 'fp-ts/lib/Option';
import { groupBy } from 'fp-ts/lib/NonEmptyArray';
import { pipe } from 'fp-ts/lib/function';

module Arithmetic {

//  -- P31 (**) Determine whether a given integer number is prime.
//  -- Prime numbers to test: http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php

  function range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
    
  function isPrime (n: number): Boolean {
    const sqrt = Math.sqrt(n)
    const isDivisibleBy = ((m => n % m == 0))

    return !range(2,sqrt).some(isDivisibleBy)
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
    const func = (a: number): Boolean => { return isCoprime(a,n)}
    return range(0,n).filter(func).length
  }

/*
 -- P35 (**) Determine the prime factors of a given positive integer.
  -- Construct a flat list containing the prime factors in ascending order.
  primeFactors :: Int -> [Int]
  primeFactors n = let divs    = filter (\k -> mod n k == 0) [2..n]
                       factor = if null divs then 0 else head divs
                   in if factor == 0 then [] else factor : primeFactors (div n factor)
*/

  function primeFactors (n: number): number[] {
    const divs = range(0,n).filter((k): Boolean => n % k == 0)
    const factor = (divs.length == 0) ? 0 : divs[0];

    return (factor == 0) ? [] : primeFactors(n / factor)
  }

/*
  -- P36 (**) Determine the prime factors of a given positive integer
  -- Construct a list containing the prime factors and their multiplicity.
*/

  function primeFactorsMultiplicity (n: number): [number, number][] {
    const pFactors = primeFactors(n)
    const grouped = new Map<number, number>

    for (const factor of pFactors) {
      if (!grouped[factor]) {
        grouped[factor] = 0
      } else {
        grouped[factor] += 1
      }
    }
  
    return Array.from(grouped)
  }

  /*
  -- P37 (**) Calculate Euler’s totient function ϕ(m) (improved).
  -- See problem P34 for the definition of Euler’s totient function.  If the list of the prime factors of a number 
  -- m is known in the form of problem P36 then the function ϕ(m) can be efficiently calculated as follows
  -- https://aperiodic.net/pip/scala/s-99/#p37
*/

  function totientImproved (n: number): number {
    const factorsMultiplicity = primeFactorsMultiplicity(n)
    const func = (
      ([factor, multiplicity]): number =>
          (factor - 1)*(factor^(multiplicity - 1))
    )
    return factorsMultiplicity.map(func).reduce((acc, val) => acc * val, 1)
    //pipe(
    //  factorsMultiplicity,
   //   map(func),
   //   reduce((acc, val) => acc * val, 1)
   // )
  }

  /*

  -- P39 (*) A list of prime numbers.
  -- Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
  */

  function listPrimesInRange (a: number, b: number): number[] {
    return range(a,b).filter((n: number): Boolean => isPrime(n))
  }
}


