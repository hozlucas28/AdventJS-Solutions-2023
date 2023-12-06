export default function cyberReindeer(road: string, time: number): string[] {
	const roadStates: string[] = [road]
	let lastChar = '.'

	for (let i = 1; i < time; i++) {
		if (i === 5) road = road.replaceAll('|', '*')

		const matches = road.match(/S[\*\.]/g)

		if (matches) {
			road = road.replace(matches[0], lastChar + 'S')
			lastChar = matches[0][1]
		}

		roadStates.push(road)
	}

	return roadStates
}
