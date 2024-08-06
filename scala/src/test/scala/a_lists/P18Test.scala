package a_lists

import org.scalatest.{FunSpec, Matchers}

class P18Test extends FunSpec with Matchers {

  describe("P18 Drop every Nth element in a list") {
    it("should work for valid i and valid k") {
      P18.slice(3, 7, List('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i, 'j, 'k)) should be(List('d, 'e, 'f, 'g))
    }

    it("should work for normal i and k > length of list") {
      P18.slice(6, 1000, List('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i, 'j, 'k)) should be(
        List('g, 'h, 'i, 'j, 'k)
      )
    }

    it("should work for i < 0 and normal k") {
      P18.slice(-100, 3, List('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i, 'j, 'k)) should be(List('a, 'b, 'c))
    }

    it("should give same list if i < 0 and k > length of list") {
      P18.slice(-100, 100, List('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i, 'j, 'k)) should be(
        List('a, 'b, 'c, 'd, 'e, 'f, 'g, 'h, 'i, 'j, 'k)
      )
    }

    it("should return empty list if i >= k") {
      P18.slice(99, 3, List('a, 'b, 'c, 'd)) should be(List())

      P18.slice(3, 3, List('a, 'b, 'c, 'd)) should be(List())
    }

    it("should work for empty inputs") {
      P18.slice(4, 9, List()) should be(List())
    }

  }

}