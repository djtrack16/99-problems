package b_arithmetic

import org.scalatest.{FunSpec, Matchers}

class P32Test extends FunSpec with Matchers {

  describe("P32 Find the greatest common divisor of a and b") {
    it("gcd of 2 and 100 is 2") {
      P32.gcd(2, 100) should be(2)
    }

    it("if b is 0, always a") {
      P32.gcd(99, 0) should be(99)
    }

    it("gcd of 99 and 11 is 11") {
      P32.gcd(11, 99) should be(11)
    }

    it("gcd of 0 and 100 is 0") {
      P32.gcd(10, 90) should be(10)
    }

    it("gcd of 99 and 100 is 1") {
      P32.gcd(99, 200) should be(1)
    }

  }

}