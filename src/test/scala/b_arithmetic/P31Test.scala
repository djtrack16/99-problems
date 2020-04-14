package b_arithmetic

import org.scalatest.{FunSpec, Matchers}

class P31Test extends FunSpec with Matchers {

  describe("P31 Find whether N is prime or not") {
    it("2 is prime") {
      P31.isPrime(2) should be(true)
    }

    it("491 is prime") {
      P31.isPrime(491) should be(true)
    }

    it("503 is prime") {
      P31.isPrime(503) should be(true)
    }

    it("16 is not prime") {
      P31.isPrime(16) should be(false)
    }

    it("501 is not prime") {
      P31.isPrime(501) should be(false)
    }

  }

}