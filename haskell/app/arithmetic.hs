{-# OPTIONS_GHC -Wno-overlapping-patterns #-}
{-# LANGUAGE MonoLocalBinds #-}
{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}


module Arithmetic where

  import qualified Data.List as L

  -- P31 (**) Determine whether a given integer number is prime.
  -- Prime numbers to test: http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php

  isPrime :: Int -> Bool
  isPrime n = not (any (\m -> mod n m == 0) [2.. sqrtT n])

  sqrtT :: Int -> Int
  sqrtT = floor . sqrt . fromIntegral

  -- P32 (**) Determine the greatest common divisor of two positive integer numbers.
  gcdNew :: Int -> Int -> Int
  gcdNew a b = if b == 0 then a else gcdNew b (mod a b)

  -- P33 (*) Determine whether two positive integer numbers are coprime.
  isCoprime :: Int -> Int -> Bool
  isCoprime a b = gcdNew a b == 1

  -- P34 (**) Calculate Euler’s totient function ϕ(m). Euler’s so-called totient function 
  -- ϕ(m) is defined as the number of positive integers r(1<=r<=m) that are coprime to m.
  totient :: Int -> Int
  totient m = length (filter (`isCoprime` m) [1..m])

  -- P35 (**) Determine the prime factors of a given positive integer.
  -- Construct a flat list containing the prime factors in ascending order.
  primeFactors :: Int -> [Int]
  primeFactors n = let divs    = filter (\k -> mod n k == 0) [2..n]
                       factor = if null divs then 0 else head divs
                   in if factor == 0 then [] else factor : primeFactors (div n factor)

  -- P36 (**) Determine the prime factors of a given positive integer
  -- Construct a list containing the prime factors and their multiplicity.
  primeFactorsMultiplicity :: Int -> [(Int, Int)]
  primeFactorsMultiplicity n = map (\facs -> (head facs, length facs)) (L.group (primeFactors n))

  -- P37 (**) Calculate Euler’s totient function ϕ(m) (improved).
  -- See problem P34 for the definition of Euler’s totient function.  If the list of the prime factors of a number 
  -- m is known in the form of problem P36 then the function ϕ(m) can be efficiently calculated as follows
  -- https://aperiodic.net/pip/scala/s-99/#p37
  -- '^' only works for positive exponents, should be OK here
  totientImproved :: Int -> Int
  totientImproved n = product (
      map (
        \(factor, multiplicity) -> (factor - 1)*(factor^(multiplicity - 1))
      )
      (primeFactorsMultiplicity n)
    )

  -- P39 (*) A list of prime numbers.
  -- Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
  listPrimesInRange :: Int -> Int -> [Int]
  listPrimesInRange low high = filter isPrime [low..high]

  -- P40 (**) Goldbach’s conjecture.
  -- Goldbach’s conjecture says that every positive even number greater than 2 is the sum of two prime numbers.
  -- E.g. 28=5+23.  It is one of the most famous facts in number theory that has not been proved to be correct in the general case.
  -- It has been numerically confirmed up to very large numbers (much larger than Scala’s Int can represent).
  -- Write a function to find the two prime numbers that sum up to a given even integer.
  goldbachNumbers :: Int -> [Int]
  goldbachNumbers n = let pairs = filter (\m -> isPrime m && isPrime (n - m)) [2..n]
                          m = if null pairs then 0 else m
                      in if m > 0 then [] else [m, n - m]

  -- P41 (**) A list of Goldbach compositions.
  -- Given a range of integers by its lower and upper limit, print a list of all even numbers and their Goldbach composition.
  goldbachCompositions :: Int -> Int -> [(Int, [Int])]
  goldbachCompositions low high = let lo = if even low then low else succ low
                                      hi = if even high then high else pred high
                                  in map (\n -> (n, goldbachNumbers n)) [lo,lo+2..hi]
{-

-}