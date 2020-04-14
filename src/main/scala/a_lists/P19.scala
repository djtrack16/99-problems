package a_lists

object P19 {
/*
P19 (**) Rotate a list N places to the left.
Both positive and negative N are valid
*/
  def rotate[A](n: Int, xs: List[A]): List[A] = {
    var pivot = n % xs.length
    pivot = if (pivot < 0) pivot + xs.length else pivot
    xs.drop(pivot) ++ xs.take(pivot)
  }
}