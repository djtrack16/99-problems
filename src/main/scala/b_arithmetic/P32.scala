package b_arithmetic


object P32 {

/*
P32 (**) Determine the greatest common divisor of two positive integer numbers.
Use Euclid's algorithm.
scala> gcd(36, 63)
res0: Int = 9
*/

  def gcd(a: Int, b: Int): Int = {
    if(b == 0) a else gcd(b, a % b)
  }

}