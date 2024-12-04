"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = isPrime;
const Array_1 = require("fp-ts/lib/Array");
function range(start, end, step = 1) {
    const result = [];
    for (let i = start; i < end; i += step) {
        result.push(i);
    }
    return result;
}
//  -- P31 (**) Determine whether a given integer number is prime.
//  -- Prime numbers to test: http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php
function isPrime(n) {
    const sqrt = Math.sqrt(n);
    const isDivisibleBy = ((m) => n % m == 0);
    return !range(2, sqrt).some(isDivisibleBy);
}
/*
-- P32 (**) Determine the greatest common divisor of two positive integer numbers.
*/
function gcd(a, b) {
    return (b == 0) ? a : gcd(b, b % a);
}
/*
-- P33 (*) Determine whether two positive integer numbers are coprime.
*/
function isCoprime(a, b) {
    return gcd(a, b) == 1;
}
/*
-- P34 (**) Calculate Euler’s totient function ϕ(m). Euler’s so-called totient function
-- ϕ(m) is defined as the number of positive integers r(1<=r<=m) that are coprime to m.
  totient m = length (filter (`isCoprime` m) [1..m])

*/
function totient(n) {
    const func = (a) => { return isCoprime(a, n); };
    return range(0, n).filter(func).length;
}
/*
-- P35 (**) Determine the prime factors of a given positive integer.
-- Construct a flat list containing the prime factors in ascending order.
primeFactors :: Int -> [Int]
primeFactors n = let divs    = filter (\k -> mod n k == 0) [2..n]
                      factor = if null divs then 0 else head divs
                  in if factor == 0 then [] else factor : primeFactors (div n factor)
*/
function primeFactors(n) {
    const divs = range(0, n).filter((k) => n % k == 0);
    const factor = (divs.length == 0) ? 0 : divs[0];
    return (factor == 0) ? [] : primeFactors(n / factor);
}
/*
-- P36 (**) Determine the prime factors of a given positive integer
-- Construct a list containing the prime factors and their multiplicity.
*/
function primeFactorsMultiplicity(n) {
    const pFactors = primeFactors(n);
    const grouped = new Map;
    for (const factor of pFactors) {
        var value = grouped.get(factor);
        if (!value) {
            grouped.set(factor, 0);
        }
        else {
            grouped.set(factor, value + 1);
        }
    }
    return Array.from(grouped);
}
/*
-- P37 (**) Calculate Euler’s totient function ϕ(m) (improved).
-- See problem P34 for the definition of Euler’s totient function.  If the list of the prime factors of a number
-- m is known in the form of problem P36 then the function ϕ(m) can be efficiently calculated as follows
-- https://aperiodic.net/pip/scala/s-99/#p37


function totientImproved (n: number): number {
  const factorsMultiplicity = primeFactorsMultiplicity(n)
  const func = (
    ([factor, multiplicity]): number =>
        (factor - 1)*(factor^(multiplicity - 1))
  )
  return factorsMultiplicity.map(func).reduce((acc, val) => acc * val, 1)
}
*/
/*

-- P39 (*) A list of prime numbers.
-- Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
*/
function listPrimesInRange(a, b) {
    return range(a, b).filter((n) => isPrime(n));
}
/*
-- P40 (**) Goldbach’s conjecture.
-- Goldbach’s conjecture says that every positive even number greater than 2 is the sum of two prime numbers.
-- E.g. 28=5+23.  It is one of the most famous facts in number theory that has not been proved to be correct in the general case.
-- It has been numerically confirmed up to very large numbers (much larger than Scala’s Int can represent).
-- Write a function to find the two prime numbers that sum up to a given even integer.
*/
function goldbachNumbers(n) {
    const primes = range(2, n).filter((m) => isPrime(m) && isPrime(n - m));
    if (primes.length == 0) {
        [];
    }
    let m = (0, Array_1.takeLeft)(1)(primes)[0];
    return [m, n - m];
}
/*
-- P41 (**) A list of Goldbach compositions.
-- Given a range of integers by its lower and upper limit, print a list of all even numbers and their Goldbach composition.
goldbachCompositions :: Int -> Int -> [(Int, [Int])]
goldbachCompositions low high = let lo = if even low then low else succ low
                                    hi = if even high then high else pred high
                                in map (\n -> (n, goldbachNumbers n)) [lo,lo+2..hi]
*/
function goldbachCompositions(low, high) {
    let lo = (low % 2 == 0) ? low : low + 1;
    let hi = (high % 2 == 0) ? high : high - 1;
    return range(lo, hi, 2).map((n) => [n, goldbachNumbers(n)]);
}
