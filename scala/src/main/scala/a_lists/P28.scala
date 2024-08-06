package a_lists

object P28 {

/*
P28 (**) Sorting a list of lists according to length of sublists.
*/

/*
a) We suppose that a list contains elements that are lists themselves.
The objective is to sort the elements of the list according to their length.
E.g. short lists first, longer lists later, or vice versa.
*/
  def lsort[A](xs: List[List[A]]): List[List[A]] = {
    xs.sortBy(_.length)
  }

/*
b) Again, we suppose that a list contains elements that are lists themselves.
But this time the objective is to sort the elements according to their length frequency;
i.e. in the default, sorting is done ascendingly, lists with rare lengths are placed,
others with a more frequent length come later.
*/

  def lsortFreq[A](xs: List[List[A]]): Seq[List[A]] = {
    xs.groupBy(_.length).toSeq.sortWith(_._2.length < _._2.length).flatMap(_._2)
  }

}