class P01

  # Find the last element in a list

  def initialize(list)
    @list = list || []
  end

  def last_in_list
    @list.last
  end

  def last_by_index
    @list[-1]
  end

  def last_by_length_index
    @list[@list.length - 1]
  end

end