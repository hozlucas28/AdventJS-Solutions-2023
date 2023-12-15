export type Move = 'R' | 'L' | 'U' | 'D'

export default function autonomousDrive(store: string[], movements: Move[]): string[] {
	const movementAction: Record<Move, (x: number, y: number) => [number, number]> = {
		R: (x: number, y: number) => [x + 1, y],
		L: (x: number, y: number) => [x - 1, y],
		U: (x: number, y: number) => [x, y - 1],
		D: (x: number, y: number) => [x, y + 1],
	}

	const storeCopy = store.map((value) => value.split(''))

	let robotY = storeCopy.findIndex((value) => value.includes('!'))
	let robotX = storeCopy[robotY].indexOf('!')

	for (const move of movements) {
		const [moveX, moveY] = movementAction[move](robotX, robotY)
		const isValidMove = moveY >= 0 && moveY < store.length

		const char = isValidMove ? storeCopy[moveY][moveX] : ''
		if (char === '.') {
			storeCopy[robotY][robotX] = '.'
			storeCopy[moveY][moveX] = '!'
			;[robotY, robotX] = [moveY, moveX]
		}
	}

	const storeCopyFmt = storeCopy.map((value) => value.join(''))

	return storeCopyFmt
}
