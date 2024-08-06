package a_lists

import org.scalatest.{FunSpec, Matchers}

class P12Test extends FunSpec with Matchers {

  describe("P12 Decode a Run length encoding of tuples (count, element) to a single list") {
    it("should work for non empty inputs") {
      P12.decode(List((4,'a), (1, 'b), (2,'c), (2,'a), (1, 'd), (4,'e))) should be(
        List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'd, 'e, 'e, 'e, 'e)
      )
      P12.decode(List((1, 'a), (2, 'b), (1, 'c), (2,'a), (2, 'd), (2,'e))) should be(
        List('a, 'b, 'b, 'c, 'a, 'a, 'd, 'd, 'e, 'e)
      )
    }

    it("should work for empty inputs") {
      P12.decode(List()) should be(List())
    }

  }

}