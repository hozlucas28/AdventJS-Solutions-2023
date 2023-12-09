import adjustLights from './solution'

describe('Challenge 09: return the minimum number of lights that need to be changed for the colors to alternate', () => {
	it('Test 01', () => {
		const result = adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
		const expected = 1
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = adjustLights(['🔴', '🔴', '🔴'])
		const expected = 1
		expect(result).toBe(expected)
	})
})
