class P06

  attr_reader :list
  # Find out whether a list is a palindrome
  def initialize(list)
    @list = list
  end

  def is_palindrome?
    length = list.length
    return true if length <= 1
    i = 0
    j = length - 1
    while i <= j
      return false if list[i] != list[j]
      i += 1
      j -= 1
    end
    true
  end

  def is_palindrome_wrapper?
    return true if list.length <= 1
    is_palindrome_recur?(0, list.length - 1)
  end

  def is_palindrome_recur?(i, j)
    return true if i >= j
    return false if list[i] != list[j]
    is_palindrome_recur?(i+1, j-1)
  end
end