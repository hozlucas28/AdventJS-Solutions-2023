import optimizeIntervals from './solution'

describe('Challenge 17: merge overlapping intervals and returns an array of sorted intervals', () => {
	it('Test 01', () => {
		const result = optimizeIntervals([
			[5, 8],
			[2, 7],
			[3, 4],
		])

		const expected = [[2, 8]]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = optimizeIntervals([
			[1, 3],
			[8, 10],
			[2, 6],
		])

		const expected = [
			[1, 6],
			[8, 10],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = optimizeIntervals([
			[3, 4],
			[1, 2],
			[5, 6],
		])

		const expected = [
			[1, 2],
			[3, 4],
			[5, 6],
		]

		expect(result).toStrictEqual(expected)
	})
})
