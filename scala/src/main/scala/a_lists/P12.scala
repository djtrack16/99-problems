package a_lists

object P12 {

/*
P12 (**) Decode a run-length encoded list.
Given a run-length code list generated as specified in problem P10, construct its uncompressed version.

  def decode[A](xs: List[(Int, Symbol)]): List[A] = {
    val decoded = List()
    for (tuple <- decoded) {
      val (count, element) = tuple
      decoded :+ List.fill(count)(element)
    }
    decoded
  }
*/
  def decode[A](xs: List[(Int, Symbol)]): List[Symbol] = xs flatMap {
    case(count, element) => List.fill(count)(element)
  }
}