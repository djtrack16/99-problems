package a_lists

import org.scalatest.{FunSpec, Matchers}

class P03Test extends FunSpec with Matchers {

  describe("P03 List method") {
    it("should find kth element by built in array indexing") {
      P03.kth(2, List("a", "b", "c", "d")) should be("c")
    }

    it("should throw outofboundsexception if length of array less than k") {
      an [IndexOutOfBoundsException] should be thrownBy P03.kth(1, List())
      an [IndexOutOfBoundsException] should be thrownBy P03.kth(2, List(1,2))
    }

  }

  describe("P03 kth element by tail recursion") {
    it("should find penultimate element if correct list") {
      P03.kthRecursive(2, List("a", "b", "c", "d")) should be("c")
    }

    it("should throw exception if there is empty list") {
      an [NoSuchElementException] should be thrownBy P03.kthRecursive(0, List())
    }
  }

}