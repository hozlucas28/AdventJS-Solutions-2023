import revealSabotage from './solution'

describe('Challenge 19: return a matrix with the sabotaged toys in the adjacent cells', () => {
	it('Test 01', () => {
		const result = revealSabotage([
			[' ', ' ', ' '],
			[' ', '*', ' '],
			[' ', ' ', ' '],
		])

		const expected = [
			['1', '1', '1'],
			['1', '*', '1'],
			['1', '1', '1'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = revealSabotage([
			['*', '*', '*'],
			['*', ' ', '*'],
			['*', '*', '*'],
		])

		const expected = [
			['*', '*', '*'],
			['*', '8', '*'],
			['*', '*', '*'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = revealSabotage([
			['*', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', ' '],
			[' ', ' ', '*', ' ', ' '],
			[' ', ' ', ' ', ' ', ' '],
			[' ', ' ', ' ', ' ', '*'],
		])

		const expected = [
			['*', '1', ' ', ' ', ' '],
			['1', '2', '1', '1', ' '],
			[' ', '1', '*', '1', ' '],
			[' ', '1', '1', '2', '1'],
			[' ', ' ', ' ', '1', '*'],
		]

		expect(result).toStrictEqual(expected)
	})
})
