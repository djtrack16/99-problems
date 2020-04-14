package a_lists

import org.scalatest.{FunSpec, Matchers}

class P05Test extends FunSpec with Matchers {

  describe("P05 reverse list") {
    it("builtin method should reverse a list ") {
      P05.reverse(List(1,2,3,4)) should be(List(4,3,2,1))
    }

    it("method with foldleft should reverse") {
      P05.reverseWithFold(List(1,2,3,4)) should be(List(4,3,2,1))
      P05.reverseWithFold(List()) should be(List())
    }

    it("recursive method should return empty list if xs is nil or empty") {
      P05.reverseRecursive(Nil) should be(List())
      P05.reverseRecursive(List()) should be(List())
    }

    it("recursive method should work for correct input") {
      P05.reverseRecursive(List(4,3,2,1)) should be(List(1,2,3,4))
    }
  }

}