package a_lists

import org.scalatest.{FunSpec, Matchers}

class P07Test extends FunSpec with Matchers {

  describe("P07 flatten a nested list") {

    it("should flatten all nested levels with 'roll your own' method") {
      P07.flattenList(List(List(1, 1), 2, List(3, List(5, 8)))) should be(
        List(1,1,2,3,5,8)
      )
      P07.flattenList(List(List(1, 1), 2, List(5, 8))) should be(
        List(1,1,2,5,8)
      )
      P07.flattenList(List(1, 1, 2)) should be(List(1,1,2))
    }

    it("should flatten all nested levels with builtin method") {
      P07.flattenMap(List(List(1, 1), 2, List(3, List(5, 8)))) should be(
        List(1,1,2,3,5,8)
      )
      P07.flattenMap(List(List(1, 1), 2, List(5, 8))) should be(
        List(1,1,2,5,8)
      )
      P07.flattenMap(List(1, 1, 2)) should be(List(1,1,2))
    }

  }

}