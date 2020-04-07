package a_lists

object P06 {

  // P06. Check whether a list is a palindrome
  def isPalindrome[A](xs: List[A]): Boolean = xs.reverse == xs

  def isPalindromeRec[A](xs: List[A]): Boolean = xs match {
    case _ :: Nil => true
    case List() => true
    case head :: tail => head == xs.last && isPalindromeRec(tail.dropRight(1))
  }

}