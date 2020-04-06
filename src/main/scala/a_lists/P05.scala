package a_lists

object P05 {

  // P04. Reverse a list
  def reverse[A](xs: List[A]): List[A] = xs.reverse // built in

  def reverseWithFold[A](xs: List[A]): List[A] = xs.foldLeft(List[A]())((reversed, x) => x :: reversed)

  def reverseRecursive[A](xs: List[A], reversed: List[A] = Nil): List[A] = xs match {
    case Nil => reversed
    case h :: tail => reverseRecursive(tail, h :: reversed)
  }

}