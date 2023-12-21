type Message = (0 | 1)[]

type Return = number[]

export default function findBalancedSegment(message: Message): Return {
	let maxLen = 0
	let segmentStart = -1

	for (let i = 0; i < message.length; i++) {
		let count0 = 0
		let count1 = 0

		for (let j = i; j < message.length; j++) {
			if (message[j] === 0) count0++
			else count1++

			const length = j - i + 1
			if (count0 === count1 && length > maxLen) {
				maxLen = length
				segmentStart = i
			}
		}
	}

	return segmentStart !== -1 ? [segmentStart, segmentStart + maxLen - 1] : []
}
