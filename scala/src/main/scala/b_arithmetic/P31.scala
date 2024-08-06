package b_arithmetic


object P31 {

/*
P31 (**) Determine whether a given integer number is prime.
scala> 7.isPrime
res0: Boolean = true
Prime numbers to test: http://compoasso.free.fr/primelistweb/page/prime/liste_online_en.php
*/

  def isPrime(n: Int): Boolean = {
    Range(
      2, Math.sqrt(n).toInt
    ).view.filter(n % _ == 0).isEmpty
  }

}