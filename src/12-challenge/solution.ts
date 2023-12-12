export default function checkIsValidCopy(original: string, copy: string): boolean {
	const getValidCombinations = (str: string) => {
		if (str.match(/[\d ]/)) return str

		const combinations = `${str.toUpperCase()}${str.toLowerCase()}#+:. `
		const index = combinations.indexOf(str)
		return combinations.slice(index)
	}

	for (let i = 0; i < original.length; i++) {
		const charOriginal = original[i]
		const charCopy = copy[i]
		const validCombinations = getValidCombinations(charOriginal)

		if (!validCombinations.includes(charCopy)) return false
	}

	return true
}
