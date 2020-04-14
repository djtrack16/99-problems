package a_lists

object P26 {

/*
P26 (**) Generate the combinations of K distinct objects chosen from the N elements of a list.
In how many ways can a committee of 3 be chosen from a group of 12 people?
We all know that there are C(12,3) = 220 possibilities (C(N,K) denotes the
well-known binomial coefficient). For pure mathematicians, this result may be great.
But we want to really generate all the possibilities.
Example:

scala> combinations(3, List('a, 'b, 'c, 'd, 'e, 'f))
res0: List[List[Symbol]] = List(List('a, 'b, 'c), List('a, 'b, 'd), List('a, 'b, 'e), ...

I.e. write List.combinations, a built-in method

*/

  def combinations[A](k: Int, xs: List[A]): List[List[A]] = (k, xs) match {
    case (0, _)            => List(List())
    case (k, List())       => List()
    case (k, head :: tail) => combinations(k-1, tail).map(head :: _) ++ combinations(k, tail)
  }
}