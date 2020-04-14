package a_lists

import org.scalatest.{FunSpec, Matchers}

class P26Test extends FunSpec with Matchers {

  describe("P26 Get K distinct combinations from elements of N elements") {
    it("should return list of empty list if list is empty but k is valid") {
      P26.combinations(5, List()) should be(List())
    }

    it("should return list of empty list if k is 0") {
      P26.combinations(0, List(1,2,3)) should be(List(List()))
    }

    it("should return empty list if k > length of list") {
      P26.combinations(6, List(1,2,3)) should be(List())
    }

    it("should choose 3 unique combinations from 4 total") {
      P26.combinations(3, List(1,2,3,4)) should be(
        List(List(1, 2, 3), List(1, 2, 4), List(1, 3, 4), List(2, 3, 4))
      )
    }

    it("should choose 2 unique combinations from 4 total") {
      P26.combinations(2, List(1,2,3,4)) should be(
        List(List(1, 2), List(1, 3), List(1, 4), List(2, 3), List(2, 4), List(3, 4))
      )
    }

    it("should choose 1 unique combinations from 4 total if k is 4") {
      P26.combinations(4, List(1,2,3,4)) should be(List(List(1,2,3,4)))
    }

  }

}