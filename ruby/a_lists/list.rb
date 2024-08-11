class List
  # P07 - P?? done here

  attr_reader :list

  def initialize(list)
    @list = list
  end

  # P07 (**) Flatten a nested list structure.
  def flatten
    mutable_list = list
    flatten_rec(mutable_list)
  end

  # P08 (**) Eliminate consecutive duplicates of list elements.
  # If a list contains repeated elements they should be replaced with a single copy of the element.
  # The order of the elements should not be changed.
  def compress
    prev = nil
    list.each_with_object([]) do |curr, result|
      result << curr if prev != curr
      prev = curr
    end
  end

  # P09 (**) Pack consecutive duplicates of list elements into sublists.
  # If a list contains repeated elements they should be placed in separate sublists.
  def pack
    # i.e. write Enum#chunk_while {|a,b| a == b }
    prev = nil
    list.each_with_object([]) do |curr, result|
      if prev == curr
        result.last << curr
      else
        result << [curr]
      end
      prev = curr
    end
  end

  # P10 (*) Run-length encoding of a list.
  # Use the result of problem P09 to implement the so-called run-length encoding data compression method.
  # Consecutive duplicates of elements are encoded as tuples (N, E) where N is the number of duplicates of the element 𝐸
  def encode
    pack.map {|l| [l.size, l.first]}
  end

  # P11 (*) Modified run-length encoding. Modify the result of problem P10 in such a way that
  # if an element has no duplicates it is simply copied into the result list.  Only elements
  # with duplicates are transferred as (N, E) terms.
  def encode_modified
    pack.map {|l| l.size > 1 ? [l.size, l.first] : l.first}
  end

  # P12 (**) Decode a run-length encoded list.
  # Given a run-length code list generated as specified in problem P10, construct its uncompressed version.
  def decode
    list.flat_map { |num, _| [_]*num }
  end

  # P13 (**) Run-length encoding of a list (direct solution).
  # Implement the so-called run-length encoding data compression method directly.
  # I.e. don’t use other methods you’ve written (like P09’s pack); do all the work directly.
  def encode_direct(list)
    prev, count = nil, 0
    return list if list.empty?
    res = list.each_with_object([]) do |curr, result|
      if prev == curr
        count += 1
      else
        result << [count, prev] if prev
        count = 1
      end
      prev = curr
    end
    res << [count, prev] if prev
    res
  end

  private

  def flatten_rec(l)
    return l if l.empty?
    first,*rest = l
    if first.is_a?(Array)
      flatten_rec(first)
    else
      [first]
    end + flatten_rec(rest)
  end

end