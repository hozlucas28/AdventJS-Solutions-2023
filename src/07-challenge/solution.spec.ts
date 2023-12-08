import drawGift from './solution'

describe('Challenge 07: generate a drawing of a 3D gift', () => {
	it('Test 01', () => {
		const result = drawGift(4, '+')
		const expected = '   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n'
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = drawGift(5, '*')
		const expected = '    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n'
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = drawGift(1, '^')
		const expected = '#\n'
		expect(result).toBe(expected)
	})
})
