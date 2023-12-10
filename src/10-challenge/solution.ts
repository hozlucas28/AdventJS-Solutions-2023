export default function createChristmasTree(ornaments: string, height: number): string {
	let tree = ''

	// Ramas del árbol
	let counter = 0
	for (let i = 0; i < height; i++) {
		const branchLength = i + 1
		const initialSpaces = height - branchLength

		let ornamentsToInsert = ''
		for (let i = 0; i < branchLength; i++) {
			ornamentsToInsert += `${ornaments[counter]} `
			counter = counter === ornaments.length - 1 ? 0 : counter + 1
		}
		ornamentsToInsert = ornamentsToInsert.trimEnd()

		const line = `${' '.repeat(initialSpaces)}${ornamentsToInsert}`
		tree += `${line}\n`

		counter = counter === ornaments.length ? 0 : counter
	}

	// Tronco del árbol
	const base = `${' '.repeat(height - 1)}|`
	tree += `${base}\n`

	return tree
}
