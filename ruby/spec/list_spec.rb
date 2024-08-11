require_relative '../a_lists/list'

describe List do

  describe '#flatten' do
    it 'should flatten list of lists' do
      instance = List.new([[1],[2,[4,5,[6,[8,9],7]]],[[10,99],3]])
      expect(instance.flatten).to eq([1,2,4,5,6,8,9,7,10,99,3])
    end

    it 'should do nothing if normal list' do
      instance = List.new([1,2,3])
      expect(instance.flatten).to eq([1,2,3])

      instance = List.new([[1],[2],[3]])
      expect(instance.flatten).to eq([1,2,3])
    end

    it 'should flatten list of random objects' do
      instance = List.new(
        ['f', [1],[2,[4,5,:x,[6,7]],{a: :b, c: [8,9]}],[3,[11,[:d, :e],12]]]
      )
      expect(instance.flatten).to eq(
        ['f',1,2,4,5,:x,6,7,{a: :b, c: [8,9]},3,11,:d,:e,12]
      )
    end
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

  describe '#combinations' do
    it 'should be empty for negative K' do
      instance = List.new([1,2])
      expect(instance.combinations(-1)).to eq([])
    end 

    it 'should be empty for K greater than N (length of list)' do
      instance = List.new([1,2,3])
      expect(instance.combinations(4)).to eq([])
    end

    it 'should be 1 array for K = 0 (aka 1 way to choose 0 elements)' do
      instance = List.new([1,2,3])
      expect(instance.combinations(0)).to eq([[]])
    end

    it 'should choose K from N correctly, generate combinations' do
      instance = List.new([1,2,3])
      expect(
        instance.combinations(2)
      ).to eq(
        [[1,2],[1,3],[2,3]]
      )

      instance = List.new([1,2,3,4])
      expect(
        instance.combinations(2)
      ).to eq(
        [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
      )

      instance = List.new([1,2,3,4,5,6])
      expect(
        instance.combinations(3)
      ).to eq([
        [1, 2, 3],
        [1, 2, 4],
        [1, 2, 5],
        [1, 2, 6],
        [1, 3, 4],
        [1, 3, 5],
        [1, 3, 6],
        [1, 4, 5],
        [1, 4, 6],
        [1, 5, 6],
        [2, 3, 4],
        [2, 3, 5],
        [2, 3, 6],
        [2, 4, 5],
        [2, 4, 6],
        [2, 5, 6],
        [3, 4, 5],
        [3, 4, 6],
        [3, 5, 6],
        [4, 5, 6]
      ])
    end
  end
end