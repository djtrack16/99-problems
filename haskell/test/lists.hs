module Test.Lists (runAllTests) where

  import Test.QuickCheck
  import Test.Hspec
  import Control.Exception (evaluate)

  allTest = []

  runAllTests = map QuickCheck allTests