export default function organizeGifts(gifts: string): string {
	let rtn = ''
	const matchedGifts = gifts.match(/\d+[a-zA-Z]/g) as RegExpMatchArray

	for (const gift of matchedGifts) {
		const pallets: string[] = []
		const boxes: string[] = []
		const bags: string[] = []

		let numberOfGifts = parseInt(gift.slice(0, gift.length - 1))
		const giftType = gift.at(-1) as string

		while (numberOfGifts >= 10) {
			boxes.push(`{${giftType}}`)
			numberOfGifts -= 10
		}

		while (boxes.length >= 5) {
			pallets.push(`[${giftType}]`)
			boxes.splice(0, 5)
		}

		if (numberOfGifts > 0) {
			const bag = `(${giftType.repeat(numberOfGifts)})`
			bags.push(bag)
		}

		rtn += `${pallets.join('')}${boxes.join('')}${bags.join('')}`
	}

	return rtn
}
