package a_lists

import org.scalatest.{FunSpec, Matchers}

class P09Test extends FunSpec with Matchers {

  describe("P09 Pack consecutive duplicates into sublists in a single list") {

    it("should work for non empty inputs") {
      P09.pack(List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'd, 'e, 'e, 'e, 'e)) should be(
        List(List('a, 'a, 'a, 'a), List('b),
        List('c, 'c), List('a, 'a), List('d),
        List('e, 'e, 'e, 'e))
      )
      P09.pack(List('a, 'b, 'c, 'a, 'd, 'e, 'e)) should be(
        List(List('a), List('b), List('c), List('a), List('d), List('e, 'e))
      )
    }

    it("should work for empty inputs") {
      P09.pack(List()) should be(List())
    }

  }

}