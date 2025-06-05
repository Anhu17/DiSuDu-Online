export class Board {
  grid: number[][];

  constructor(grid?: number[][]) {
    if (grid) {
      this.grid = grid.map(row => [...row]);
    } else {
      this.grid = Array.from({ length: 9 }, () => Array(9).fill(0));
    }
  }

  isLegal(r: number, c: number, n: number): boolean {
    if (r < 0 || r > 8 || c < 0 || c > 8) return false;
    if (n < 1 || n > 9) return false;
    const current = this.grid[r][c];
    if (current !== 0 && current !== n) return false;
    for (let i = 0; i < 9; i += 1) {
      if (i !== c && this.grid[r][i] === n) return false;
      if (i !== r && this.grid[i][c] === n) return false;
    }
    const startRow = Math.floor(r / 3) * 3;
    const startCol = Math.floor(c / 3) * 3;
    for (let i = startRow; i < startRow + 3; i += 1) {
      for (let j = startCol; j < startCol + 3; j += 1) {
        if ((i !== r || j !== c) && this.grid[i][j] === n) return false;
      }
    }
    return true;
  }

  place(r: number, c: number, n: number): boolean {
    if (!this.isLegal(r, c, n)) return false;
    this.grid[r][c] = n;
    return true;
  }

  clone(): Board {
    return new Board(this.grid);
  }
}
