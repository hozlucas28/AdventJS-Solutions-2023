import createChristmasTree from './solution'

describe('Challenge 10: create a customized Christmas tree', () => {
	it('Test 01', () => {
		const result = createChristmasTree('123', 4)
		const expected = '   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = createChristmasTree('*@o', 3)
		const expected = '  *\n @ o\n* @ o\n  |\n'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = createChristmasTree('x', 3)
		const expected = '  x\n x x\nx x x\n  |\n'
		expect(result).toBe(expected)
	})
})
