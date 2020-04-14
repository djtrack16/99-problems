package a_lists

import org.scalatest.{FunSpec, Matchers}

class P01Test extends FunSpec with Matchers {

  describe("P01 List builtin method") {
    it("should find last element if correct list") {
      P01.last(List("a", "b", "c", "d")) should be("d")
    }
  }

  describe("P01 Last element by length") {
    it("should find last element if correct list") {
      P01.lastByLength(List("a", "b", "c", "d")) should be("d")
    }
  }

  describe("P01 last element by tail recursion") {
    it("should find last element if correct list") {
      P01.lastRecursive(List("a", "b", "c", "d")) should be("d")
    }

    it("should throw exception if there is empty list") {
      an [NoSuchElementException] should be thrownBy P01.lastRecursive(List())
    }
  }

}