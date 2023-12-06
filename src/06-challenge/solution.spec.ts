import maxDistance from './solution'

describe('Challenge 06: return the maximum distance that the reindeer can travel in any direction', () => {
	it('Test 01', () => {
		const movements = '>>*<'
		const result = maxDistance(movements)
		expect(result).toBe<number>(2)
	})

	it('Test 02', () => {
		const movements = '<<<>'
		const result = maxDistance(movements)
		expect(result).toBe<number>(2)
	})

	it('Test 03', () => {
		const movements = '>***>'
		const result = maxDistance(movements)
		expect(result).toBe<number>(5)
	})
})
