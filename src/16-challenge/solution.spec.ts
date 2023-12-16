import transformTree from './solution'

describe('Challenge 16: transform an array into an object', () => {
	it('Test 01', () => {
		const result = transformTree([3, 1, 0, 8, 12, null, 1])
		const expected = {
			value: 3,
			left: {
				value: 1,
				left: {
					value: 8,
					left: null,
					right: null,
				},
				right: {
					value: 12,
					left: null,
					right: null,
				},
			},
			right: {
				value: 0,
				left: null,
				right: {
					value: 1,
					left: null,
					right: null,
				},
			},
		}

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = transformTree([1, 2, 3])
		const expected = {
			value: 1,
			left: {
				value: 2,
				left: null,
				right: null,
			},
			right: {
				value: 3,
				left: null,
				right: null,
			},
		}

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = transformTree([1, 2, 3, 4, 5])
		const expected = {
			value: 1,
			left: {
				value: 2,
				left: {
					value: 4,
					left: null,
					right: null,
				},
				right: {
					value: 5,
					left: null,
					right: null,
				},
			},
			right: {
				value: 3,
				left: null,
				right: null,
			},
		}

		expect(result).toStrictEqual(expected)
	})
})
