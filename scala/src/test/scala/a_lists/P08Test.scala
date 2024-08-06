package a_lists

import org.scalatest.{FunSpec, Matchers}

class P08Test extends FunSpec with Matchers {

  describe("P08 Delete consecutive duplicates from a List") {

    it("should work my nonidiomatic way") {
      P08.compress(List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'd, 'e, 'e, 'e, 'e)) should be(
        List('a, 'b, 'c, 'a, 'd, 'e)
      )
      P08.compress(List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'b, 'b)) should be(
        List('a, 'b, 'c, 'a, 'b)
      )
      P08.compress(List(1,1,2,2,1)) should be(List(1,2,1))
    }

    it("should work in idiomatic recursive way") {
      P08.compressRec(List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'd, 'e, 'e, 'e, 'e)) should be(
        List('a, 'b, 'c, 'a, 'd, 'e)
      )
      P08.compressRec(List('a, 'a, 'a, 'a, 'b, 'c, 'c, 'a, 'a, 'b, 'b)) should be(
        List('a, 'b, 'c, 'a, 'b)
      )
      P08.compressRec(List(1,1,2,2,1)) should be(List(1,2,1))
    }

  }

}