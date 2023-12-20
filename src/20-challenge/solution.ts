type Weight = number | null

type Return = number[][]

type Neighbors = {
	neighbors: number[]
	total: number
}

export default function distributeGifts(weights: Weight[][]): Return {
	const getNeighbors = (row: number, col: number): Neighbors => {
		const neighbors: Neighbors = {
			neighbors: [],
			total: 0,
		}

		const prevRow = weights[row - 1]
		const nextRow = weights[row + 1]
		if (prevRow) {
			const preRowValue = prevRow[col] ?? 0
			neighbors.total += preRowValue
			preRowValue ? neighbors.neighbors.push(preRowValue) : null
		}

		if (nextRow) {
			const nextRowValue = nextRow[col] ?? 0
			neighbors.total += nextRowValue
			nextRowValue ? neighbors.neighbors.push(nextRowValue) : null
		}

		const prevCol = weights[row][col - 1]
		const nextCol = weights[row][col + 1]
		if (prevCol) {
			const prevColValue = prevCol ?? 0
			neighbors.total += prevColValue
			prevColValue ? neighbors.neighbors.push(prevColValue) : null
		}

		if (nextCol) {
			const nextColValue = nextCol ?? 0
			neighbors.total += nextColValue
			nextColValue ? neighbors.neighbors.push(nextColValue) : null
		}

		return neighbors
	}

	const rows = weights.length
	const cols = weights[0].length

	const rtn: Return = []
	for (let i = 0; i < rows; i++) {
		rtn.push([])

		for (let j = 0; j < cols; j++) {
			const cell = weights[i][j]

			const { neighbors, total } = getNeighbors(i, j)
			const dividend = cell ? cell + total : total
			const divisor = cell ? neighbors.length + 1 : neighbors.length
			rtn[i].push(Math.round(dividend / divisor))
		}
	}

	return rtn
}
