import maxGifts from './solution'

describe('Challenge 14: determine the maximum number of gifts Santa can deliver in one night', () => {
	it('Test 01', () => {
		const result = maxGifts([2, 4, 2])
		const expected = 4
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = maxGifts([5, 1, 1, 5])
		const expected = 10
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = maxGifts([4, 1, 1, 4, 2, 1])
		const expected = 9
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = maxGifts([1, 3, 1, 3, 100])
		const expected = 103
		expect(result).toBe(expected)
	})
})
