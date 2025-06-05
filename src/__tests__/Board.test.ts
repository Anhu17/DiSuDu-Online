import { describe, it, expect } from 'vitest'
import { Board } from '../logic/Board'

describe('Board', () => {
  it('isLegal returns true on empty board', () => {
    const b = new Board()
    expect(b.isLegal(0, 0, 1)).toBe(true)
  })

  it('place updates grid when move is legal', () => {
    const b = new Board()
    expect(b.place(0, 0, 2)).toBe(true)
    expect(b.grid[0][0]).toBe(2)
  })

  it('allows placing same number again', () => {
    const b = new Board()
    b.place(1, 1, 3)
    expect(b.place(1, 1, 3)).toBe(true)
  })

  it('clone produces independent copy', () => {
    const b = new Board()
    b.place(2, 2, 4)
    const c = b.clone()
    c.place(2, 3, 5)
    expect(b.grid[2][3]).toBe(0)
    expect(c.grid[2][3]).toBe(5)
  })

  it('detects row conflict', () => {
    const b = new Board()
    b.place(0, 0, 1)
    expect(b.isLegal(0, 1, 1)).toBe(false)
  })

  it('detects column conflict', () => {
    const b = new Board()
    b.place(0, 0, 2)
    expect(b.isLegal(1, 0, 2)).toBe(false)
  })

  it('detects subgrid conflict', () => {
    const b = new Board()
    b.place(1, 1, 3)
    expect(b.isLegal(2, 2, 3)).toBe(false)
  })

  it('cannot override cell with different number', () => {
    const b = new Board()
    b.place(0, 0, 4)
    expect(b.place(0, 0, 5)).toBe(false)
  })
})
