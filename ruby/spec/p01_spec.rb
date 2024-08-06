require_relative '../a_lists/p01'

describe P01 do
  
  it "should be nil if list is nil" do
    instance = P01.new(nil)
    expect(instance.last_in_list).to be_nil
    expect(instance.last_by_index).to be_nil
    expect(instance.last_by_length_index).to be_nil
  end

  it "should be nil if list is empty" do
    instance = P01.new([])
    expect(instance.last_in_list).to be_nil
    expect(instance.last_by_index).to be_nil
    expect(instance.last_by_length_index).to be_nil
  end

  it "should be last element" do
    instance = P01.new([1,2,3])
    expect(instance.last_in_list).to equal(3)
    expect(instance.last_by_index).to equal(3)
    expect(instance.last_by_length_index).to equal(3)
  end
end