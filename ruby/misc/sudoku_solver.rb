class SudokuSolver

  attr_reader :board

  def initialize(board)
    @board = board # is always 3 rows and 3 cols for simplicity
  end

  def solve
    row, col = find_unassigned_position ## we are finished (all positions assigned)
    unless row && col
      ## we are finished (all positions assigned)
      return true
    end

    (1..9).each do |num| # try  all digits 1-9

      if valid_assignment?(row,col,num)
        board[row][col] = num
        return true if solve

        #backtrack, unassign the row/col, and try the next number '2', '3', etc
        board[row][col] = 0
      end
    end
    false # we tried all possible solutions exhaustively
  end

  def print_board
    board.each do |r|
      puts "ROW #{r}"
    end
  end   

  private

  def find_unassigned_position
    (0...9).each do |r| 
      (0...9).each do |c|
        if board[r][c] == 0
          return [r,c]
        end
      end
    end
    nil
  end

  def valid_col?(col, n)
    (0...9).none? { |row| board[row][col] == n }
  end

  def valid_row?(row, n)
    !board[row].include?(n)
  end

  def valid_square?(row, col, n)
    # force row and col (to start iteration) to be topmost row and leftmost col of the current "square"
    start_row = (row/3) * 3
    start_col = (col/3) * 3

    (start_row...start_row+3).each do |r|
      (start_col...start_col+3).each do |c|
        return false if board[r][c] == n
      end
    end
    true
  end

  # Can this number be assigned in this row and this column and this 3*3 square?
  def valid_assignment?(r, c, num)
    valid_col?(c, num) && valid_row?(r, num) && valid_square?(r,c, num)
  end
end