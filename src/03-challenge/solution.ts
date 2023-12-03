export default function findNaughtyStep(original: string, modified: string): string {
	let rtn

	if (original.length > modified.length) {
		const originalArray = original.split('')
		rtn = originalArray.find((value, index) => value !== modified[index])
	} else {
		const modifiedArray = modified.split('')
		rtn = modifiedArray.find((value, index) => value !== original[index])
	}

	return rtn ?? ''
}
