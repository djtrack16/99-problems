require_relative '../a_lists/p03'

describe P03 do
  
  it "should be nil if list is nil" do
    instance = P03.new(nil)
    expect(instance.kth_element).to be_nil
    expect(instance.find_by_index).to be_nil
  end

  it "should be kth element" do
    instance = P03.new([1,2,4,5])
    expect(instance.kth_element(0)).to equal(1)
    expect(instance.find_by_index(0)).to equal(1)

    expect(instance.kth_element(2)).to equal(4)
    expect(instance.find_by_index(3)).to equal(5)
    expect(instance.kth_element(4)).to be_nil
  end
end