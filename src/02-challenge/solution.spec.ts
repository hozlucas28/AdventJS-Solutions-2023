import manufacture from './solution'

describe('Challenge 02: return a list of craftable gifts', () => {
	it('Test 01', () => {
		const gifts = ['tren', 'oso', 'pelota']
		const materials = 'tronesa'
		expect(manufacture(gifts, materials)).toStrictEqual<string[]>(['tren', 'oso'])
	})

	it('Test 02', () => {
		const gifts = ['juego', 'puzzle']
		const materials = 'jlepuz'
		expect(manufacture(gifts, materials)).toStrictEqual<string[]>(['puzzle'])
	})

	it('Test 03', () => {
		const gifts = ['libro', 'ps5']
		const materials = 'psli'
		expect(manufacture(gifts, materials)).toStrictEqual<string[]>([])
	})
})
