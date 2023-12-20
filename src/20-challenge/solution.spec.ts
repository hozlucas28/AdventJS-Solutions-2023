import distributeGifts from './solution'

describe('Challenge 20: given a matrix of numbers, return another matrix where each element is the average of its original value and the values of its neighbors', () => {
	it('Test 01', () => {
		const result = distributeGifts([
			[4, 5, 1],
			[6, null, 3],
			[8, null, 4],
		])

		const expected = [
			[5, 3, 3],
			[6, 5, 3],
			[7, 6, 4],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = distributeGifts([
			[2, null],
			[null, 3],
		])

		const expected = [
			[2, 3],
			[3, 3],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = distributeGifts([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		])

		const expected = [
			[2, 3, 4],
			[4, 5, 6],
			[6, 7, 8],
		]

		expect(result).toStrictEqual(expected)
	})
})
