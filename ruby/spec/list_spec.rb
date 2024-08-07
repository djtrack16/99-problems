require_relative '../a_lists/list'

describe List do

  describe '#flatten' do
  end

  describe '#compress' do
    it "should be do nothing if all uniq" do
      instance = List.new([1,2])
      expect(instance.compress).to eq([1,2])
    end

    it "should compress correctly" do
      instance = List.new([1,1,1,2,2,4,4,5,5])
      expect(instance.compress).to eq([1,2,4,5])
      
      instance = List.new([1,1,2,2,1,4,6,6,2,5,5,1])
      expect(instance.compress).to eq([1,2,1,4,6,2,5,1])
    end
  end

  describe '#pack' do
    it "should be make sublists if no dupe" do
      instance = List.new([1,2])
      expect(instance.pack).to eq([[1],[2]])
    end

    it "should pack correctly" do
      instance = List.new([1,1,1,2,2,4,4,5,5])
      expect(instance.pack).to eq([
        [1,1,1],
        [2,2],
        [4,4],
        [5,5]]
      )
      
      instance = List.new([1,1,2,2,1,4,6,6,2,5,5,1])
      expect(instance.pack).to eq([
        [1,1],
        [2,2],
        [1],
        [4],
        [6,6],
        [2],
        [5,5],
        [1]]
      )
    end
  end

  describe '#encode' do

    it "should encode correctly" do
      instance = List.new([1,1,1,2,2,4,4,5,5])
      expect(instance.encode).to eq([
        [3,1],
        [2,2],
        [2,4],
        [2,5]]
      )
      
      instance = List.new([1,1,2,2,1,4,6,6,2,5,5,1])
      expect(instance.encode).to eq([
        [2,1],
        [2,2],
        [1,1],
        [1,4],
        [2,6],
        [1,2],
        [2,5],
        [1,1]]
      )
    end
  end

  describe '#encode_modified' do

    it "should encode modified correctly" do        
      instance = List.new([1,1,2,2,1,4,6,6,2,5,5,1])
      expect(instance.encode_modified).to eq([
        [2,1],
        [2,2],
        1, 4,
        [2,6],
        2,
        [2,5],
        1]
      )
    end
  end

  describe '#decode' do

    it "should decode correctly" do
      instance = List.new([
        [3,1],
        [2,2],
        [2,4],
        [2,5]
      ])
      expect(instance.decode).to eq(
        [1,1,1,2,2,4,4,5,5]
      )
      
      instance = List.new([
        [2,1],
        [2,2],
        [1,1],
        [1,4],
        [2,6],
        [1,2],
        [2,5],
        [1,1]
      ])
      expect(instance.decode).to eq(
        [1,1,2,2,1,4,6,6,2,5,5,1]
      )
    end
  end

  describe '#encode_direct' do
    it "should encode correctly" do
      instance = List.new([1,1,1,2,2,4,4,5,5])
      expect(instance.encode).to eq([
        [3,1],
        [2,2],
        [2,4],
        [2,5]]
      )
      
      instance = List.new([1,1,2,2,1,4,6,6,2,5,5,1])
      expect(instance.encode).to eq([
        [2,1],
        [2,2],
        [1,1],
        [1,4],
        [2,6],
        [1,2],
        [2,5],
        [1,1]]
      )
    end
  end
end