require_relative '../a_lists/p06'

describe P06 do

  it "should be true if list is empty" do
    instance = P06.new([])
    expect(instance.is_palindrome?).to eq(true)
    expect(instance.is_palindrome_wrapper?).to eq(true)
  end

  it "should calculate if palindrome correctly" do
    instance = P06.new([9999999])
    expect(instance.is_palindrome?).to eq(true)
    expect(instance.is_palindrome_wrapper?).to eq(true)

    instance = P06.new([1,2,4,5])
    expect(instance.is_palindrome?).to eq(false)
    expect(instance.is_palindrome_wrapper?).to eq(false)

    instance = P06.new([1,2,3,2,1])
    expect(instance.is_palindrome?).to eq(true)
    expect(instance.is_palindrome_wrapper?).to eq(true)

    instance = P06.new([0,1])
    expect(instance.is_palindrome?).to eq(false)
    expect(instance.is_palindrome_wrapper?).to eq(false)

    instance = P06.new([1,1])
    expect(instance.is_palindrome?).to eq(true)
    expect(instance.is_palindrome_wrapper?).to eq(true)
  end
end