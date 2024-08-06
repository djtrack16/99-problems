package a_lists

import org.scalatest.{FunSpec, Matchers}

class P16Test extends FunSpec with Matchers {

  describe("P16 Drop every Nth element in a list") {
    it("should work for non empty inputs") {
      P16.drop(3, List('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i, 'j, 'k)) should be(
        List('a, 'b, 'd, 'e, 'g, 'h, 'j, 'k)
      )
      P16.drop(2, List('a, 'b, 'c, 'c, 'd, 'e)) should be(
        List('a, 'c, 'd)
      )
      P16.drop(1, List('a, 'b, 'c, 'c, 'd, 'e)) should be(List())
    }

    it("should work for empty inputs") {
      P16.drop(4, List()) should be(List())
    }

    it("should return same list for n <= 1") {
      for(n <- List(-2, -1, 0)) {
        an [IllegalArgumentException] should be thrownBy P16.drop(n, List('a, 'b, 'c, 'c, 'd))
      }
    }

  }

}