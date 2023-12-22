type ElvesSymbols = '+' | '*' | '-' | '%' | '<' | '¿' | '?'

type Code = string

export default function compile(code: Code): number {
	let counter = 0

	let i = 0
	let fallback = -1
	while (i < code.length) {
		const instruction = code[i] as ElvesSymbols

		if (instruction === '+') {
			counter += 1
			i++
			continue
		}

		if (instruction === '-') {
			counter -= 1
			i++
			continue
		}

		if (instruction === '*') {
			counter *= 2
			i++
			continue
		}

		if (instruction === '%') {
			fallback = i + 1
			i++
			continue
		}

		if (instruction === '<' && fallback !== -1) {
			i = fallback
			fallback = -1
			continue
		}

		if (instruction === '¿') {
			if (counter <= 0) {
				const finalBlockI = code.indexOf('?', i)
				code = `${code.slice(0, i)}${code.slice(finalBlockI + 1)}`
				continue
			}
		}

		i++
	}

	return counter
}
