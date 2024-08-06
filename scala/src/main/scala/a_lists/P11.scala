package a_lists

object P11 {

/*
P11 (*) Modified run-length encoding.
Modify the result of problem P10 in such a way that if an element has no duplicates
it is simply copied into the result list. Only elements with duplicates are transferred as (N, E) terms.
*/

  def encodeModified[A](xs: List[A]): List[Any] = {
    def encodeRecursive(xs: List[A], encodings: List[Any]): List[Any] = xs match {
      case Nil          => encodings
      case head :: tail => 
        val (duplicates, remainder) = tail.span(_ == head)
        val element = if (duplicates.isEmpty) head else (duplicates.size + 1, head)
        encodeRecursive(
          remainder,
          encodings :+ element
      )
    }
    encodeRecursive(xs, List())
  }

}