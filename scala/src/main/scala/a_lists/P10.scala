package a_lists

object P10 {

/*
P10 (*) Run-length encoding of a list.
Use the result of problem P09 to implement the so-called run-length encoding data compression method.
Consecutive duplicates of elements are encoded as tuples (N, E) where N is the number of duplicates
of the element E.
I could do List[Int, Symbol] but I want it to be ok with generics
*/

  def encode[A](xs: List[A]): List[Any] = {
    def encodeRecursive(xs: List[A], encodings: List[Any]): List[Any] = xs match {
      case Nil          => encodings
      case head :: tail => 
        val (duplicates, remainder) = tail.span(_ == head)
        encodeRecursive(
          remainder,
          encodings :+ (duplicates.size + 1, head)
      )
    }
    encodeRecursive(xs, List())
  }

}