{-# OPTIONS_GHC -Wno-overlapping-patterns #-}
{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}
{-# HLINT ignore "Eta reduce" #-}
{-# OPTIONS_GHC -Wno-typed-holes #-}
{-# LANGUAGE DataKinds #-}

--import qualified Data.List as List

module List where

  data NestedList a =
    Object a | Array[NestedList a]

  -- P01. Find the last element in a list
  lastBuiltIn :: [a] -> a
  lastBuiltIn xs = last xs

  lastElement :: [a] -> a
  lastElement [x] = x
  lastElement (_:xs) = lastElement xs
  lastElement [] = error "The list is already empty"

  -- PO2. Find the penultimate element in a list

  penultimate :: [a] -> a
  penultimate (x:xs) = if length xs == 1 then last xs else penultimate xs --(tail . init) xs
  penultimate [] = error "The list is already empty"
  penultimate [x] = error "List only has 1 element"

  -- P03. Find the K'th element of a list. The first element in the list is number 1.

  kthElement :: ([a], Int) -> a
  kthElement (_, 0) = error "k must be greater than 1"
  kthElement ([x], 1) = x
  kthElement (xs, k) = if k > length xs then error "k must be less than lenghth of list" else last (take k xs)

  -- P04. Find the number of elements of a list (besides built in fns)

  listLength :: [a] -> Int
  listLength [] = 0
  listLength xs = 1 + listLength (tail xs)

  -- P05. Reverse a list.

  reverseList :: [a] -> [a]
  reverseList [] = []
  reverseList xs = last xs : reverseList (init xs)

  -- P06. Find out whether a list is a palindrome.

  isPalindrome :: Eq a => [a] -> Bool
  isPalindrome [] = True
  isPalindrome xs = head xs == last xs && isPalindrome (init (tail xs))

  -- P07. Flatten a nested list structure.

  flattenList :: NestedList[a] -> [a]
  flattenList (Object x) = x
  flattenList (Array []) = []
  flattenList (Array (x:xs)) = flattenList x ++ flattenList (Array xs)

  -- P08 (**) Eliminate consecutive duplicates of list elements.
  -- If a list contains repeated elements they should be replaced with a single copy of the element.
  -- The order of the elements should not be changed.

  removeConsecutiveDuplicates :: Eq a => [a] -> [a]
  removeConsecutiveDuplicates (x:y:ys) = ([x] ++ [y | x /= y]) ++ removeConsecutiveDuplicates ys
  removeConsecutiveDuplicates _ = _ -- both [] and [x] return here

  -- P09 Pack consecutive duplicates of list elements into sublists.
  -- If a list contains repeated elements they should be placed in separate sublists.
  -- AKA do this :P https://hackage.haskell.org/package/grouped-list-0.2.3.0/docs/src/Data.GroupedList.html#groupedGroups
  pack :: Eq a => [a] -> [[a]]
  pack [] = []
  pack [x] = [[x]]
  pack (x:xs) = (x: takeWhile (==x) xs) : pack (dropWhile (==x) xs)

  -- P10 Run-length encoding of a list.
  -- Use the result of problem P09 to implement the so-called run-length encoding data compression method.
  -- Consecutive duplicates of elements are encoded as tuples (N, E) where N is the number of duplicates of the element

  encode :: Eq a => [a] -> [(Int, a)]
  encode xs = map (\item -> (length item, head item)) (pack xs)

{-
  -- P11 Modified run-length encoding. Modify the result of problem P10 in such a way that
  -- if an element has no duplicates it is simply copied into the result list.  Only elements
  -- with duplicates are transferred as (N, E) terms.

  encodeModified :: Eq a => [a] -> Either [a] [(Int, a)]
  encodeModified xs = map (\pair -> if l == 1 then elem else (l, elem)) (pack xs)
-}

  -- P12 Decode a run-length encoded list.
  -- Given a run-length code list generated as specified in problem P10, construct its uncompressed version.
  --decode :: [(Int, a)] -> [a]
  --decode xs = concatMap (\x -> replicate(1, head(x))) xs