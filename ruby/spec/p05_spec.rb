require_relative '../a_lists/p05'

describe P05 do
  
  it "should be nil if list is nil" do
    instance = P05.new(nil)
    expect(instance.reverse).to be_nil
    expect(instance.reverse_alt).to be_nil
  end

  it "should do nothing if list is empty" do
    instance = P05.new([])
    expect(instance.reverse).to be_empty
    expect(instance.reverse_alt).to be_empty
  end

  it "should reverse correctly" do
    instance = P05.new([1,2,4,5])
    expect(instance.reverse).to eq([5,4,2,1])
    expect(instance.reverse_alt).to eq([5,4,2,1])
  end
end