class P05

  # Reverse a list
  attr_reader :list

  def initialize(list)
    @list = list
  end

  def reverse
    list&.reverse
  end

  def reverse_alt
    return list if !list || list.length <= 1
    i = 0
    j = list.length - 1
    while i <= j
      list[i], list[j] = list[j], list[i]
      i += 1
      j -= 1
    end
    list
  end
end