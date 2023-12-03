import findNaughtyStep from './solution'

describe('Challenge 03: return the first extra step that has been added or removed in the manufacturing chain', () => {
	it('Test 01', () => {
		const original = 'abcd'
		const modified = 'abcde'
		expect(findNaughtyStep(original, modified)).toBe<string>('e')
	})

	it('Test 02', () => {
		const original = 'stepfor'
		const modified = 'stepor'
		expect(findNaughtyStep(original, modified)).toBe<string>('f')
	})

	it('Test 03', () => {
		const original = 'abcde'
		const modified = 'abcde'
		expect(findNaughtyStep(original, modified)).toBe<string>('')
	})
})
