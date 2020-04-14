package a_lists

import org.scalatest.{FunSpec, Matchers}

class P15Test extends FunSpec with Matchers {

  describe("P15 Duplicate each element in a list N times") {
    it("should work for non empty inputs") {
      P15.duplicateN(3, List('a, 'b, 'c, 'c, 'd)) should be(
        List('a, 'a, 'a, 'b, 'b, 'b, 'c, 'c, 'c, 'c, 'c, 'c, 'd, 'd, 'd)
      )
      P15.duplicateN(2, List('a, 'b, 'c, 'c, 'd)) should be(
        List('a, 'a, 'b, 'b, 'c, 'c, 'c, 'c, 'd, 'd)
      )
    }

    it("should work for empty inputs") {
      P15.duplicateN(4, List()) should be(List())
    }

    it("should return same list for n <= 1") {
      for(n <- List(-1, 0, 1)) {
        P15.duplicateN(n, List('a, 'b, 'c, 'c, 'd)) should be(
          List('a, 'b, 'c, 'c, 'd)
        )
      }
    }

  }

}