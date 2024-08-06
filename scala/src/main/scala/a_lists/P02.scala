package a_lists

import java.util.NoSuchElementException
import java.lang.IndexOutOfBoundsException
// P02. Find the last but one element of a list.
object P02 {

  def penultimate[A](xs: List[A]): A = {
    if(xs.length < 2) {
      throw new IndexOutOfBoundsException
    }
    xs(xs.length-2)
  }

  def penultimateRecursive[A](xs: List[A]): A = xs match {
    case x :: y :: Nil => x
    case _ :: tail => penultimateRecursive(tail)
    case _         => throw new NoSuchElementException
  }

}