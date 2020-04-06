package a_lists

import org.scalatest.{FunSpec, Matchers}

class P02Test extends FunSpec with Matchers {

  describe("P02 List method") {
    it("should find penultimate element if list is valid") {
      P02.penultimate(List("a", "b", "c", "d")) should be("c")
    }

    it("should throw outofboundsexception if length of array less than 2") {
      an [IndexOutOfBoundsException] should be thrownBy P02.penultimate(List())
      an [IndexOutOfBoundsException] should be thrownBy P02.penultimate(List(1))
    }

  }

  describe("P02 penultimate element by tail recursion") {
    it("should find penultimate element if correct list") {
      P02.penultimateRecursive(List("a", "b", "c", "d")) should be("c")
    }

    it("should throw exception if there is empty list") {
      an [NoSuchElementException] should be thrownBy P02.penultimateRecursive(List())
    }
  }

}