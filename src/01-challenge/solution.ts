export default function findFirstRepeated(gifts: number[]): number {
	let rtn = -1
	const setter = new Set()

	for (const value of gifts) {
		if (setter.has(value)) {
			rtn = value
			break
		} else {
			setter.add(value)
		}
	}

	return rtn
}
