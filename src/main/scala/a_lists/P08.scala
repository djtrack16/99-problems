package a_lists

object P08 {

// P08 (**) Eliminate consecutive duplicates of list elements.
// If a list contains repeated elements they should be replaced with a single copy of the element.
// The order of the elements should not be changed.

  // nonidiomatic way
  def compress[A](xs: List[A]): List[A] = {
    val newList = xs.sliding(2).filter { case List(a,b) => a != b }.toList
    newList.map {case List(a,b) => a} ++ List(newList.last.last)
  }

  def compressRec[A](xs: List[A]): List[A] = xs match {
    case Nil          => Nil
    case head :: tail => head :: compressRec(tail.dropWhile(_ == head)) 
  }
}