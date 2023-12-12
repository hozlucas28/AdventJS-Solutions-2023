import checkIsValidCopy from './solution'

describe('Challenge 12: detect if one letter is a copy of another', () => {
	it('Test 01', () => {
		const result = checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
		expect(result).toBeTruthy()
	})

	it('Test 02', () => {
		const result = checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
		expect(result).toBeFalsy()
	})

	it('Test 03', () => {
		const result = checkIsValidCopy('Santa Claus', 's#+:. c:. s')
		expect(result).toBeTruthy()
	})

	it('Test 04', () => {
		const result = checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
		expect(result).toBeFalsy()
	})
})
