import travelDistance from './solution'

describe('Challenge 25: return the number of moves that Santa must do to deliver all the gifts', () => {
	it('Test 01', () => {
		const result = travelDistance(
			`.....1....
             ..S.......
             ..........
             ....3.....
             ......2...`
		)

		const expected = 12
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = travelDistance('1....S')

		const expected = 5
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = travelDistance('S12....3')

		const expected = 7
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = travelDistance(
			`.....2....
            ..S.......
            ..........
            ....1.....
            ......3...`
		)

		const expected = 13
		expect(result).toBe(expected)
	})
})
