package a_lists

import java.lang.IllegalArgumentException

object P16 {
// P16 (**) Drop every Nth element from a list.
// Note, iterators should work with flatmap without doing toList convert, but didn't work somehow.
  def drop[A](n: Int, xs: List[A]): List[A] = {
    if(n < 1) {
      throw new IllegalArgumentException
    }
    val dropped = xs.grouped(n).toList.flatMap { group => group.dropRight(1) }
    if (xs.length % n == 0) dropped else dropped :+ xs.last
  }
}