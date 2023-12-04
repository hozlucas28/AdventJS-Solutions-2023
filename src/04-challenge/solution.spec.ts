import decode from './solution'

describe('Challenge 04: take a string and reverse the characters inside each pair of parentheses and remove them', () => {
	it('Test 01', () => {
		expect(decode('hola (odnum)')).toBe<string>('hola mundo')
	})

	it('Test 02', () => {
		expect(decode('(olleh) (dlrow)!')).toBe<string>('hello world!')
	})

	it('Test 03', () => {
		expect(decode('sa(u(cla)atn)s')).toBe<string>('santaclaus')
	})
})
