package a_lists

import java.util.NoSuchElementException

// P01. Find the last element of a list
object P01 {

  def last[A](xs: List[A]): A = xs.last

  def lastByLength[A](xs: List[A]): A = xs(xs.length-1)

  def lastRecursive[A](xs: List[A]): A = xs match {
    case x :: Nil  => x
    case _ :: tail => lastRecursive(tail)
    case _         => throw new NoSuchElementException
  }

}