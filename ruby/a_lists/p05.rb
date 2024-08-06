class P05

  # Reverse a list

  def initialize(list)
    @list = list
  end

  def reverse
    @list&.reverse
  end

  def reverse_alt
    start = @list.length - 1
    [].tap do |result|
      (start..0).each { result << @list[start] }
    end
  end
end