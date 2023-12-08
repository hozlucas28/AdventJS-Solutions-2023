import organizeGifts from './solution'

describe('Challenge 08: take a string of gifts as an argument and return a string representing the warehouse', () => {
	it('Test 01', () => {
		const result = organizeGifts('76a11b')
		const expected = '[a]{a}{a}(aaaaaa){b}(b)'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = organizeGifts('20a')
		const expected = '{a}{a}'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = organizeGifts('70b120a4c')
		const expected = '[b]{b}{b}[a][a]{a}{a}(cccc)'
		expect(result).toBe(expected)
	})
})
