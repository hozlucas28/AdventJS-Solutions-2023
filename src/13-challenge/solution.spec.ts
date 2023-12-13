import calculateTime from './solution'

describe('Challenge 13: return the time lack or left in order to finish the deliveries', () => {
	it('Test 01', () => {
		const result = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
		const expected = '-02:20:00'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
		const expected = '00:30:00'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
		const expected = '-05:29:00'
		expect(result).toBe(expected)
	})
})
