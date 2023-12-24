import getStaircasePaths from './solution'

describe('Challenge 24: return all the possible sequences of jumps, sorted from least to most', () => {
	it('Test 01', () => {
		const result = getStaircasePaths(2, 1)

		const expected = [[1, 1]]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = getStaircasePaths(3, 3)

		const expected = [[1, 1, 1], [1, 2], [2, 1], [3]]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = getStaircasePaths(5, 1)

		const expected = [[1, 1, 1, 1, 1]]

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result = getStaircasePaths(5, 2)

		const expected = [
			[1, 1, 1, 1, 1],
			[1, 1, 1, 2],
			[1, 1, 2, 1],
			[1, 2, 1, 1],
			[1, 2, 2],
			[2, 1, 1, 1],
			[2, 1, 2],
			[2, 2, 1],
		]

		expect(result).toStrictEqual(expected)
	})
})
