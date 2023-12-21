import findBalancedSegment from './solution'

describe('Challenge 21: find the longest segment of the string where the number of 0s and 1s is equal', () => {
	it('Test 01', () => {
		const result = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
		const expected = [2, 5]
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = findBalancedSegment([1, 1, 0])
		const expected = [1, 2]
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = findBalancedSegment([1, 1, 1])
		const expected: number[] = []
		expect(result).toStrictEqual(expected)
	})
})
