class P04

  # Find the number of elements in a list

  def initialize(list)
    @list = list
  end

  def length
    @list&.length
  end

  def length_alt
    return unless @list
    num = 0
    @list.each {|_| num += 1 }
    num
  end
end