import organizeChristmasDinner from './solution'

describe('Challenge 23: group dishes by ingredients', () => {
	it('Test 01', () => {
		const result = organizeChristmasDinner([
			['christmas turkey', 'turkey', 'sauce', 'herbs'],
			['cake', 'flour', 'sugar', 'egg'],
			['hot chocolate', 'chocolate', 'milk', 'sugar'],
			['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
		])

		const expected = [
			['sauce', 'christmas turkey', 'pizza'],
			['sugar', 'cake', 'hot chocolate'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = organizeChristmasDinner([
			['gingerbread', 'flour', 'ginger', 'sugar'],
			['glazed ham', 'ham', 'honey', 'sugar', 'vinegar'],
			['roast chicken', 'chicken', 'rosemary', 'thyme', 'garlic'],
			['vegetable soup', 'carrot', 'potato', 'onion', 'garlic'],
			['fruit punch', 'apple juice', 'orange juice', 'sugar'],
		])

		const expected = [
			['garlic', 'roast chicken', 'vegetable soup'],
			['sugar', 'fruit punch', 'gingerbread', 'glazed ham'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = organizeChristmasDinner([
			['chicken alfredo', 'chicken', 'pasta', 'parmesan'],
			['parmesan chicken', 'chicken', 'parmesan', 'bread crumbs'],
			['pasta salad', 'pasta', 'olive oil', 'tomato'],
			['tomato soup', 'tomato', 'basil', 'cream'],
		])

		const expected = [
			['chicken', 'chicken alfredo', 'parmesan chicken'],
			['parmesan', 'chicken alfredo', 'parmesan chicken'],
			['pasta', 'chicken alfredo', 'pasta salad'],
			['tomato', 'pasta salad', 'tomato soup'],
		]

		expect(result).toStrictEqual(expected)
	})

	it('Test 04', () => {
		const result = organizeChristmasDinner([
			['snowflake cookies', 'flour', 'sugar', 'vanilla'],
			['winter stew', 'beef', 'carrots', 'potatoes'],
			['holiday punch', 'cranberry juice', 'orange juice', 'sparkling water'],
			['festive salad', 'lettuce', 'cranberries', 'walnuts'],
		])

		const expected: string[][] = []

		expect(result).toStrictEqual(expected)
	})
})
