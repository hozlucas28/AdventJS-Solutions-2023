import compile from './solution'

describe('Challenge 22: translate the Elves language instructions', () => {
	it('Test 01', () => {
		const result = compile('++*-')
		const expected = 3
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = compile('++%++<')
		const expected = 6
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = compile('++<--')
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = compile('++¿+?')
		const expected = 3
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = compile('--¿+++?')
		const expected = -2
		expect(result).toBe(expected)
	})

	it('Test 06', () => {
		const result = compile('--¿+++?+++¿--?')
		const expected = -1
		expect(result).toBe(expected)
	})
})
