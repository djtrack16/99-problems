package a_lists

object P15 {

  def duplicateN[A](n: Int, xs: List[A]): List[A] = {
    if(n <= 1) {
      xs
    } else {
      xs flatMap { element => List.fill(n)(element) }
    }
  }
}