import type { Move } from './solution'
import autonomousDrive from './solution'

// eslint-disable-next-line quotes
describe("Challenge 15: given a warehouse and the movements, return an array with the robot's final position", () => {
	it('Test 01', () => {
		const store = ['..!....', '...*.*.']
		const movements: Move[] = ['R', 'R', 'D', 'L']

		const result = autonomousDrive(store, movements)
		const expected = ['.......', '...*!*.']
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const store = ['***', '.!.', '***']
		const movements: Move[] = ['D', 'U', 'R', 'R', 'R']

		const result = autonomousDrive(store, movements)
		const expected = ['***', '..!', '***']
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const store = ['.**.*.*.', '.***....', '..!.....']
		const movements: Move[] = ['D', 'U', 'R', 'R', 'R']

		const result = autonomousDrive(store, movements)
		const expected = ['.**.*.*.', '.***....', '.....!..']
		expect(result).toStrictEqual(expected)
	})
})
