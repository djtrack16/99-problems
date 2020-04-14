package a_lists

import org.scalatest.{FunSpec, Matchers}

class P19Test extends FunSpec with Matchers {

  describe("P19 Drop every Nth element in a list") {
    it("should work for 0 < n < xs.length ") {
      P19.rotate(3, List('a, 'b, 'c, 'd, 'e, 'f, 'k)) should be(
        List('d, 'e, 'f, 'k, 'a, 'b, 'c)
      )
    }

    it("should work for n < 0 ") {
      P19.rotate(-3, List('a, 'b, 'c, 'd, 'e, 'f, 'k)) should be(
        List('e, 'f, 'k, 'a, 'b, 'c, 'd)
      )
    }

    it("should work for n > xs.length") {
      P19.rotate(30, List('a, 'b, 'c, 'd, 'e, 'f, 'k)) should be(
        List('c, 'd, 'e, 'f, 'k, 'a, 'b)
      )
    }

    it("should work for n < xs.length but absolute value of n is") {
      P19.rotate(-15, List('a, 'b, 'c, 'd, 'e, 'f, 'k)) should be(
        List('k, 'a, 'b, 'c, 'd, 'e, 'f)
      )
    }

    it("should do nothing if n % xs.length == 0 ") {
      val list = List('a, 'b, 'c, 'd, 'e, 'f, 'k)
      P19.rotate(84, list) should be(list)

      P19.rotate(7, list) should be(list)

      P19.rotate(0, list) should be(list)
    }

  }

}