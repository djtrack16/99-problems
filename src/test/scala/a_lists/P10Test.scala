package a_lists

import org.scalatest.{FunSpec, Matchers}

class P10Test extends FunSpec with Matchers {

  describe("P10 Run length encoding for a single list 'consecutive duplicates and their length'") {
    it("should work for non empty inputs") {
      P10.encode(List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'd, 'e, 'e, 'e, 'e)) should be(
        List((4,'a), (1,'b), (2,'c), (2,'a), (1,'d), (4,'e))
      )
      P10.encode(List('a, 'b, 'c, 'a, 'd, 'e, 'e)) should be(
        List((1,'a), (1,'b), (1,'c), (1,'a), (1,'d), (2,'e))
      )
    }

    it("should work for empty inputs") {
      P10.encode(List()) should be(List())
    }

  }

}