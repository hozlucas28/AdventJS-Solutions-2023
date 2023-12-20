export default function revealSabotage(store: string[][]): string[][] {
	const rows = store.length
	const cols = store[0].length

	const isValidCell = (row: number, col: number) => {
		return row >= 0 && row < rows && col >= 0 && col < cols
	}

	const countAdjacentToys = (row: number, col: number) => {
		let count = 0
		for (let i = -1; i <= 1; i++) {
			for (let j = -1; j <= 1; j++) {
				const newRow = row + i
				const newCol = col + j
				if (isValidCell(newRow, newCol) && store[newRow][newCol] === '*') count++
			}
		}

		return count
	}

	const getCellValue = (row: number, col: number) => {
		const currentCellValue = store[row][col]
		const count = countAdjacentToys(row, col)

		if (currentCellValue === '*') {
			return '*'
		} else if (count === 0) {
			return ' '
		} else {
			return count.toString()
		}
	}

	const result: string[][] = []
	for (let row = 0; row < rows; row++) {
		result[row] = []
		for (let col = 0; col < cols; col++) {
			result[row][col] = getCellValue(row, col)
		}
	}

	return result
}
