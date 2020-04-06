package a_lists

import java.util.NoSuchElementException
import java.lang.IndexOutOfBoundsException


object P03 {
  
  // P03. Find the Kth element of a list. (The first element is the 0th)
  def kthRecursive[A](k: Int, xs: List[A]): A = (k, xs) match {
    case (0, h :: _ )   => h
    case (k, _ :: tail) => kth(k - 1, tail)
    case _              => throw new NoSuchElementException
  }

  def kth[A](k: Int, xs: List[A]): A = {
    if(xs.length <= k) {
      throw new IndexOutOfBoundsException
    }
    xs(k)
  }
}