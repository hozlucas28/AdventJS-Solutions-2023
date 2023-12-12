import getIndexsForPalindrome from './solution'

describe('Challenge 11: return indexes of a palindrome word', () => {
	it('Test 01', () => {
		const result = getIndexsForPalindrome('anna')
		const expected = [].length
		expect(result).toHaveLength(expected)
	})

	it('Test 02', () => {
		const result = getIndexsForPalindrome('abab')
		const expected = [0, 1]
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = getIndexsForPalindrome('abac')
		expect(result).toBeNull()
	})

	it('Test 04', () => {
		const result = getIndexsForPalindrome('aaaaaaaa')
		const expected = [].length
		expect(result).toHaveLength(expected)
	})

	it('Test 05', () => {
		const result = getIndexsForPalindrome('aaababa')
		const expected = [1, 3]
		expect(result).toStrictEqual(expected)
	})

	it('Test 06', () => {
		const result = getIndexsForPalindrome('caababa')
		expect(result).toBeNull()
	})

	it('Test 07', () => {
		const result = getIndexsForPalindrome('rotaratov')
		const expected = [4, 8]
		expect(result).toStrictEqual(expected)
	})
})
