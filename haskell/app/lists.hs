{-# OPTIONS_GHC -Wno-overlapping-patterns #-}
{-# LANGUAGE MonoLocalBinds #-}
{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}


module Lists where

  import qualified Data.List as L

  data NestedList a =
    Object a | Array[NestedList a]

  -- P01. Find the last element in a list
  lastBuiltIn :: [a] -> a
  lastBuiltIn = last

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
  removeConsecutiveDuplicates [] = [] -- both [] and [x] return here
  removeConsecutiveDuplicates [x] = [x]

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
  decode :: [(Int, a)] -> [a]
  decode [] = []
  decode ((length, item):rest) = replicate length item ++ decode rest

  -- P13 (**) Run-length encoding of a list (direct solution).
  -- Implement the so-called run-length encoding data compression method directly.
  -- I.e. don’t use other methods you’ve written (like P09’s pack); do all the work directly.
  encodeDirect :: Eq a => [a] -> [(Int, a)]
  encodeDirect [] = []
  encodeDirect (x:xs) = let(first, rest) = span (==x) xs
    in (
      1 + length first,
      x
    ) : encodeDirect rest


  -- P15 (**) Duplicate the elements of a list a given number of times.

  duplicateN :: (Int, [a]) -> [a]
  duplicateN (n, xs) = concatMap (replicate n) xs

  -- P16 (**) Drop every Nth element from a list.

  dropN :: Int -> [a] -> [a]
  dropN _ [] = []
  dropN n xs = take (n-1) xs ++ dropN n (drop n xs)

  -- P18 (**) Extract a slice from a list. Given two indices, I and K,
  -- the slice is the list containing the elements from and including the
  -- Ith element up to but not including the Kth element of the original list.
  -- Start counting the elements with 0.

  slice :: Int -> Int -> [a] -> [a]
  slice i k xs = take (k-i) (drop i xs)

  -- P19 (**) Rotate a list N places to the left.
  -- Use remainder (aka if n is 8 and length of xs is 4, do nothing)
  -- But if n is 9 and length of xs is 4, rotate by 1 .... wraparound logic
  rotate :: Int -> [a] -> [a]
  rotate 0 xs = xs
  rotate n xs = let remainder = rem n (length xs)
                    pivot = if remainder < 0 then remainder + length xs else remainder
                in drop pivot xs ++ take pivot xs

  -- P26 (**) Generate the combinations of K distinct objects chosen from the N elements of a list.
  -- In how many ways can a committee of 3 be chosen from a group of 12 people?  We all know that there are 
  -- C(12,3)= 220 possibilities
  -- C(N,K) denotes the well-known binomial coefficient). For pure mathematicians, this result may be great.
  -- But we want to really generate all the possibilities.
  combinations :: Int -> [a] -> [[a]]
  combinations 0 _    = []
  combinations k []   = [[]]
  combinations k (first:rest) = map (first:) (combinations (k-1) rest) ++ combinations k rest

  -- P28 (**) Sorting a list of lists according to length of sublists.
  -- a) We suppose that a list contains elements that are lists themselves.
  -- The objective is to sort the elements of the list according to their length.
  -- E.g. short lists first, longer lists later, or vice versa.

  lsort :: [[a]] -> [[a]]
  lsort = L.sortBy (\a b -> compare (length a) (length b))

  -- P28b) Again, we suppose that a list contains elements that are lists themselves.
  -- But this time the objective is to sort the elements according to their length frequency;
  -- i.e. in the default, sorting is done ascendingly, lists with rare lengths are placed first,
  -- others with a more frequent length come later.

  lsortFreq :: [[a]] -> [[a]]
  lsortFreq xs = let cmp a b = compare (length a) (length b)
                 in concat (L.sortBy cmp (groupedListsByLength xs))

  groupedListsByLength :: [[a]] -> [[[a]]]
  groupedListsByLength xs = L.groupBy (\b c -> length b == length c) (lsort xs)

