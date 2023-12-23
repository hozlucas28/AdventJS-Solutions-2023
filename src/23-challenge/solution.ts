export default function organizeChristmasDinner(dishes: string[][]): string[][] {
	const map = new Map<string, string[]>() // { [ingredient]: dishes[] }

	for (const [dishName, ...dishIngre] of dishes) {
		for (const ingredient of dishIngre) {
			if (map.has(ingredient)) map.get(ingredient)?.push(dishName)
			else map.set(ingredient, [dishName])
		}
	}

	const rtn = [...map.entries()].filter(([_, dishes]) => dishes.length > 1)
	rtn.sort((a, b) => a[0].localeCompare(b[0]))

	return rtn.map(([ingredient, dishes]) => [ingredient, ...dishes.sort()])
}
