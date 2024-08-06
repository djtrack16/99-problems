require_relative '../a_lists/p02'

describe P02 do
  
  it "should be nil if list is nil" do
    instance = P02.new(nil)
    expect(instance.next_to_last_element).to be_nil
    expect(instance.last_by_length_index).to be_nil
  end

  it "should be nil if list is empty" do
    instance = P02.new([])
    expect(instance.next_to_last_element).to be_nil
    expect(instance.last_by_length_index).to be_nil
  end

  it "should be penultimate" do
    instance = P02.new([1,2,3])
    expect(instance.next_to_last_element).to equal(2)
    expect(instance.last_by_length_index).to equal(2)
  end
end