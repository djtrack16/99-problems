package a_lists

object P04 {

  // P04. Find the number of elements in a list (e.g. the length)
  def length[A](xs: List[A]): Int = xs.length // built in

  def lengthWithFold[A](xs: List[A]): Int = xs.foldRight(0)((_, acc) => acc + 1) // pure functional

  def lengthRecursive1[A](xs: List[A]): Int = xs match {
    case _ :: Nil  => 1
    case _ :: tail => 1 + lengthRecursive1(tail)
  }

  def lengthRecursive2[A](xs: List[A], size: Int = 0): Int = xs match {
    case Nil => size
    case _ :: tail => lengthRecursive2(tail, size+1)
  } // size defaults to 0, if we pass in nonzero value, method will be incorrect

}