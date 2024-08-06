package a_lists

object P07 {

  // P07. Flatten a nested list, at all levels
  def flattenMap(xs: List[Any]): List[Any] = xs flatMap {
    case list: List[_] => flattenMap(list)
    case element      => List(element) 
  }

  def flattenList(xs: List[Any]): List[Any] = {
    var list = List[Any]()
    xs.foreach(element => element match {
        case xs: List[Any] =>
          list = list ++: flattenList(xs)
        case _ =>
          list = list :+ element
      }
    )
    list
  }
}