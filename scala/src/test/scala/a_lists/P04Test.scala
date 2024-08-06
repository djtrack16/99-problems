package a_lists

import org.scalatest.{FunSpec, Matchers}

class P04Test extends FunSpec with Matchers {

  describe("P04 length methods") {
    it("builtin method should return length ") {
      P04.length(List("a", "b", "c", "d")) should be(4)
    }

    it("method with fold should work") {
      P04.lengthWithFold(List("a", "b", "c", "d")) should be(4)
      P04.lengthWithFold(List("a")) should be(1)
    }

    it("first recursive method should work") {
      P04.lengthRecursive1(List("a", "b", "c", "d")) should be(4)
    }

    it("second recursive method should work") {
      P04.lengthRecursive2(List("a", "b", "c", "d", "e")) should be(5)
      P04.lengthRecursive2(List()) should be(0)
    }
  }

}