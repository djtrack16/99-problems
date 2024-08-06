package a_lists

import org.scalatest.{FunSpec, Matchers}

class P28Test extends FunSpec with Matchers {

  describe("P28 Sort sublists according to length of list (parts a and b)") {
    it("should sort sublists according to length") {
      P28.lsort(List(List(1,2,3), List(2), List(2,3), List(), List(2,3,4))) should be(
        List(List(), List(2), List(2,3), List(1,2,3), List(2,3,4))
      )
      P28.lsort(List(List('a, 'b, 'c), List('d, 'e), List('f, 'g, 'h),
        List('d, 'e), List('i, 'j, 'k, 'l), List('m, 'n), List('o))) should be(
          List(List('o), List('d, 'e), List('d, 'e), List('m, 'n),
          List('a, 'b, 'c), List('f, 'g, 'h), List('i, 'j, 'k, 'l)
        )
      )
    }
    // There is more than one correct solution because we don't have to sort sublists in their own
    // relative frequencies.
    it("should sort sublists according to occurrence of each length's frequency") {
      P28.lsortFreq(List(List('a, 'b, 'c), List('d, 'e), List('f, 'g, 'h), List('d, 'e),
        List('i, 'j, 'k, 'l), List('m, 'n), List('o))) should be(
          List(
            List('o),
            List('i, 'j, 'k, 'l), 
            List('a, 'b, 'c),
            List('f, 'g, 'h),
            List('d, 'e),
            List('d, 'e),
            List('m, 'n)
          )
        )
    }

  }

}