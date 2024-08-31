class Arithmetic

  # P31 (**) Determine whether a given integer number is prime.
  def self.is_prime?(n)
    upper_limit = n**0.5
    !(2..upper_limit).find { |k| n % k == 0 }
  end

  # P32 (**) Determine the greatest common divisor of two positive integer numbers.
  def self.gcd(a,b)
    b.zero? ? a : gcd(b, a % b)
  end

  # P33 (*) Determine whether two positive integer numbers are coprime.
  def self.is_coprime?(a,b)
    gcd(a,b) == 1
  end

  # P34 (**) Calculate Euler’s totient function ϕ(m). Euler’s so-called totient function 
  # ϕ(m) is defined as the number of positive integers r(1<=r<=m) that are coprime to m.
  def self.totient(r,m)
    (1..m).count {|k| is_coprime?(k,m) }
  end

  # P35 (**) Determine the prime factors of a given positive integer.
  # Construct a flat list containing the prime factors in ascending order.
  def self.prime_factors(n)
    divisor = (2..n).find { |k| n % k == 0 }
    divisor ? [divisor] + prime_factors(n/divisor) : []
  end

  # P36 (**) Determine the prime factors of a given positive integer (2).
  # Construct a list containing the prime factors and their multiplicity.
  def self.prime_factors_multiplicity(n)
    prime_factors.group_by {|_| _ }.map {|_,v| [_,v.size] }.to_h
  end

  # P37 (**) Calculate Euler’s totient function ϕ(m) (improved).
  # See problem P34 for the definition of Euler’s totient function.  If the list of the prime factors of a number 
  # m is known in the form of problem P36 then the function ϕ(m) can be efficiently calculated as follows
  # https://aperiodic.net/pip/scala/s-99/#p37
  def self.totient_improved(n)
    prime_factors_multiplicity.map do |factor, multiplicity|
      (factor - 1)*(factor**(multiplicity - 1))
    end.inject(:*)
  end

  # P39 (*) A list of prime numbers.
  # Given a range of integers by its lower and upper limit, construct a list of all prime numbers in that range.
  def self.list_primes_in_range(lower_limit,upper_limit)
    (lower_limit..upper_limit).select {|n| is_prime?(n) }
  end

  # P40 (**) Goldbach’s conjecture.
  # Goldbach’s conjecture says that every positive even number greater than 2 is the sum of two prime numbers.
  # E.g. 28=5+23.  It is one of the most famous facts in number theory that has not been proved to be correct in the general case.
  # It has been numerically confirmed up to very large numbers (much larger than Scala’s Int can represent).
  # Write a function to find the two prime numbers that sum up to a given even integer.
  def self.goldbach_numbers(n)
    # brute force: generate all possible prime pairs then find one that works
    #primes = list_primes_in_range(2,n-1)
    #List.new(primes).combinations(2).find {|a,b| a+b == n}

    # just return the first one that works, more efficient
    (2..n).select do |k|
      return [k, n-k] if is_prime?(k) && is_prime?(n-k)
    end
  end

  # P41 (**) A list of Goldbach compositions.
  # Given a range of integers by its lower and upper limit, print a list of all even numbers and their Goldbach composition.
  def self.goldbach_list(lower_limit, upper_limit)
    lower = lower_limit.even? ? lower_limit : lower_limit + 1
    upper = upper_limit.even? ? upper_limit : upper_limit - 1
    (lower..upper).step(2).map do |n|
      [
        n,
        goldbach_numbers(n)
      ]
    end
  end

  # P41A: In most cases, if an even number is written as the sum of two prime numbers, one of them is very small.
  # Very rarely, the primes are both bigger than, say, 50.  Try to find out how many such cases there are in the range 2..3000.
  def self.goldbach_list_limited(lower_limit, upper_limit, prime_minimum_value)
    lower = lower_limit.even? ? lower_limit : lower_limit + 1
    upper = upper_limit.even? ? upper_limit : upper_limit - 1
    (lower..upper).step(2).each_with_object([]) do |n, result|
      gbn = goldbach_numbers_with_min(n, prime_minimum_value)
      result << [ n, gbn ] unless gbn.empty?  
    end
  end

  def self.gray_codes(n)
    codes = [""]
    (1..n).each do |k|
      zeros = codes.map {|c| '0' + c}
      ones = codes.map {|c| '1' + c}
      codes = zeros + ones
    end
    codes
  end

  private

  def self.goldbach_numbers_with_min(n, prime_minimum_value)
    (prime_minimum_value..n).select do |k|
      diff = n - k
      if is_prime?(k) && is_prime?(diff) && diff > prime_minimum_value
        return [k, diff]
      end
    end
    []
  end

end