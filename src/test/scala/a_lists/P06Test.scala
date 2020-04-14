package a_lists

import org.scalatest.{FunSpec, Matchers}

class P06Test extends FunSpec with Matchers {

  describe("P06 check if list is a palindrome") {
    it("builtin method should reverse a list and compare to that ") {
      P06.isPalindrome(List(1,2,3,4)) should be(false)
      P06.isPalindrome(List(1,3,3,1)) should be(true)
      P06.isPalindrome(List(1,3,1)) should be(true)
    }

    it("recursive method should work for valid inputs") {
      P06.isPalindromeRec(List(1,2,3,4)) should be(false)
      P06.isPalindromeRec(List(1,3,3,1)) should be(true)
      P06.isPalindromeRec(List(1,3,1)) should be(true)
    }

    it("recursive method should return true for empty list or list of size 1") {
      P06.isPalindromeRec(List()) should be(true)
      P06.isPalindromeRec(List(1)) should be(true)
    }

  }

}