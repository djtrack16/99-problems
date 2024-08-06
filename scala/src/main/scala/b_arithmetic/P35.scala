package b_arithmetic


object P35 {

/*
P35 (**) Determine the prime factors of a given positive integer.
Construct a flat list containing the prime factors in ascending order.
scala> 315.primeFactors
res0: List[Int] = List(3, 3, 5, 7)
*/
/*
  def primeFactors(n: Int): List[Int] = {
    if(n <= 1) {
      List()
    } else {
      Range(2, Math.sqrt(n).toInt).filter(n % _ == 0).toList.flatMap {
        div => List(div) ::: primeFactors(n/div)
      }
    }
  }


  def factorize(n: Int): List[Int] = {
    def primeFactors(n: Int, div: Int = 2, factors: List[Int] = Nil): List[Int] = {
      if (div*div > n) {
        div :: factors
      } else {
        if (n % div == 0) {
          primeFactors(n / div, div,div :: factors)
        } else {
          primeFactors(n, div + 1, factors)
        }
      }
    }
    primeFactors(n)
  }
}
*/
}