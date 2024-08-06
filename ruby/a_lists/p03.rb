class P03

  # Find the Kth element in a list (the first element is the "0th")

  def initialize(list)
    @list = list
  end

  def kth_element(k = 0)
    @list[k] if @list
  end

  def find_by_index(k = 0)
    @list&.each_with_index do |elem,i|
      return elem if i == k
    end
    nil
  end

end