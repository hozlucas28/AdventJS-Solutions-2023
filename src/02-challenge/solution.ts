export default function manufacture(gifts: string[], materials: string): string[] {
	const rtn = []

	const fmtMaterials = materials.trim().toUpperCase()
	const regex = new RegExp(`[${fmtMaterials}]`, 'g')

	for (const gift of gifts) {
		const fmtGift = gift.trim().toUpperCase()
		const matchedChars = fmtGift.match(regex)
		if (fmtGift.length === matchedChars?.length) rtn.push(gift)
	}

	return rtn
}
