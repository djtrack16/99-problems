require_relative '../b_arithmetic/arithmetic'

describe Arithmetic do

  describe '#is_prime?' do
    it 'should work' do
      expect(Arithmetic.is_prime?(1931)).to be(true)
      expect(Arithmetic.is_prime?(7)).to be(true)
      expect(Arithmetic.is_prime?(886)).to be(false)
      expect(Arithmetic.is_prime?(97)).to be(true)
      expect(Arithmetic.is_prime?(2000)).to be(false)
      expect(Arithmetic.is_prime?(66)).to be(false)
    end
  end

  describe '#prime_factors' do
    it 'should work' do
      expect(Arithmetic.prime_factors(8)).to eq([2,2,2])
      expect(Arithmetic.prime_factors(668)).to eq([2,2,167])
      expect(Arithmetic.prime_factors(1)).to eq([])
      expect(Arithmetic.prime_factors(2)).to eq([2])
      expect(Arithmetic.prime_factors(47596)).to eq([2,2,73,163])
      expect(Arithmetic.prime_factors(99)).to eq([3,3,11])
    end
  end

  describe '#goldbach_numbers' do
    it 'should find two prime numbers that sum' do
      expect(Arithmetic.goldbach_numbers(28)).to eq([5,23])
    end
  end

  describe '#goldbach_list' do
    it 'should find goldbach numbers for a range of N' do
      expect(Arithmetic.goldbach_list(9,20)).to eq(
        [
          [10, [3,7]],
          [12, [5,7]],
          [14, [3,11]],
          [16, [3,13]],
          [18, [5,13]],
          [20, [3,17]]
        ]
      )
    end
  end

  describe '#goldbach_list_limited' do
    it 'should find goldbach numbers for a range of N with min prime number value' do
      expect(Arithmetic.goldbach_list_limited(1,2000, 50)).to include(*[
        [992, [73, 919]],
        [1382, [61, 1321]],
        [1856, [67, 1789]],
        [1928, [61, 1867]]]
      )
    end
  end

  describe '#gray_codes' do
    it 'should work for n = 1, 2 or 3' do
      expect(Arithmetic.gray_codes(1)).to eq(['0', '1'])
      expect(Arithmetic.gray_codes(2)).to eq(['00', '01', '10', '11'])
      expect(Arithmetic.gray_codes(3)).to eq([
        '000', '001', '010', '011', '100', '101', '110', '111'
      ])
    end
  end
end