import cyberReindeer from './solution'

describe('Challenge 05: return an array simulating a sleds movement', () => {
	it('Test', () => {
		const road = 'S..|...|..'
		const time = 10
		const result = cyberReindeer(road, time)

		expect(result).toStrictEqual<string[]>([
			'S..|...|..',
			'.S.|...|..',
			'..S|...|..',
			'..S|...|..',
			'..S|...|..',
			'...S...*..',
			'...*S..*..',
			'...*.S.*..',
			'...*..S*..',
			'...*...S..',
		])
	})
})
