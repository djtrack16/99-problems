package a_lists

import org.scalatest.{FunSpec, Matchers}

class P11Test extends FunSpec with Matchers {

  describe("P11 Run length encoding for a single list (but distinct elements are not in tuples))") {
    it("should work for non empty inputs") {
      P11.encodeModified(List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'd, 'e, 'e, 'e, 'e)) should be(
        List((4,'a), 'b, (2,'c), (2,'a), 'd, (4,'e))
      )
      P11.encodeModified(List('a, 'b, 'c, 'a, 'a, 'd, 'e, 'e)) should be(
        List('a, 'b, 'c, (2,'a), 'd, (2,'e))
      )
    }

    it("should work for empty inputs") {
      P11.encodeModified(List()) should be(List())
    }

  }

}