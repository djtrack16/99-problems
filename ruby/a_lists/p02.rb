class P02

  # Find the next-to-last element in a list

  def initialize(list)
    @list = list || []
  end

  def next_to_last_element
    @list[-2]
  end

  def last_by_length_index
    @list[@list.length - 2] 
  end

end