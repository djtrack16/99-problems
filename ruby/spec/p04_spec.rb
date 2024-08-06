require_relative '../a_lists/p04'

describe P04 do
  
  it "should be nil if list is nil" do
    instance = P04.new(nil)
    expect(instance.length).to be_nil
    expect(instance.length_alt).to be_nil
  end

  it "should be zero if list is empty" do
    instance = P04.new([])
    expect(instance.length).to equal(0)
    expect(instance.length_alt).to equal(0)
  end

  it "should calculate length correctly" do
    instance = P04.new([1,2,4,5])
    expect(instance.length).to equal(4)
    expect(instance.length_alt).to equal(4)
  end
end