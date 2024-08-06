package a_lists

object P09 {

// P09 (**) Pack consecutive duplicates of list elements into sublists.
// If a list contains repeated elements they should be placed in separate sublists.

  def pack[A](xs: List[A]): List[List[A]] = {
    def packRecursive(xs: List[A], sublists: List[List[A]]): List[List[A]] = xs match {
      case Nil          => sublists
      case head :: tail => 
        val (packed, remainder) = tail.span(_ == head)
        packRecursive(
          remainder,
          sublists :+ (head :: packed)
      )
    }
    packRecursive(xs, List())
  }

}