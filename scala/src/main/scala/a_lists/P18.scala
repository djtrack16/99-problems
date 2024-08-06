package a_lists

object P18 {
/*
P18 (**) Extract a slice from a list.
Given two indices, I and K, the slice is the list containing the elements from
and including the Ith element up to but not including the Kth element of the original list.
Start counting the elements with 0.

i.e. Write List.slice from List library (which is built-in)
*/
  def slice[A](i: Int, k: Int, xs: List[A]): List[A] = {
    val start = i.max(0) // min valid start index is 0
    val end = k.min(xs.length) // min valid end index is end of list
    xs.indices.filter(index => (index >= start && index < end)).toList.map {
      index => xs(index)
    }
  }
}