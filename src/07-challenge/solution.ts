export default function drawGift(size: number, symbol: string): string {
	const body: string[] = []

	const drawLine = (nLine: number): string => {
		let rtn = '#'

		if (nLine === 1) {
			rtn += '#'.repeat(size - 2)
		} else if (nLine === size) {
			rtn += `${'#'.repeat(size - 1)}${symbol.repeat(size - 2)}`
		} else {
			rtn += `${symbol.repeat(size - 2)}#${symbol.repeat(nLine - 2)}`
		}

		rtn += '#'

		return `${rtn.padStart(size * 2 - 1, ' ')}\n`
	}

	if (size === 1) {
		body.push('#\n')
	} else {
		// Cuerpo superior
		for (let i = 1; i < size; i++) {
			const line = drawLine(i)
			body.push(line)
		}

		// Línea pre-divisora y línea post-divisora
		const prevMiddleLineUp = body.pop() as string
		const prevMiddleLineDown = prevMiddleLineUp.trimStart()

		// Línea divisora
		const middleLine = drawLine(size)

		// Cuerpo inferior
		const bodyDown = [...body].reverse()
		bodyDown.forEach((value, index, array) => {
			array[index] = value.trimStart()
		})

		// Construir cuerpo
		const bodyMiddle = [prevMiddleLineUp, middleLine, prevMiddleLineDown]
		body.push(...bodyMiddle, ...bodyDown)
	}

	return body.join('')
}
