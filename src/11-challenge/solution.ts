export default function getIndexsForPalindrome(word: string): number[] | null {
	const wordArr = word.split('')

	const getOddChars = (): string[] => {
		const oddChars: string[] = []
		const uniqueChars = new Set(wordArr)

		for (const char of uniqueChars.values()) {
			const regex = new RegExp(`[${char}]`, 'g')
			const match = word.match(regex)
			if (match && match.length % 2 !== 0) oddChars.push(char)
		}

		return oddChars
	}

	const isPalindrome = (word: string): boolean => word === [...word].reverse().join('')

	if (isPalindrome(word)) return []

	const indexes: number[] = []
	const oddChars = getOddChars()
	const isWordEven = wordArr.length % 2 === 0
	const halfLength = wordArr.length / 2

	for (let i = 0; i < halfLength; i++) {
		const char = wordArr[i]
		const lastCharI = wordArr.length - i - 1
		const lastChar = wordArr[lastCharI]
		if (char === lastChar) continue

		const oddCharsIncludes = [oddChars.includes(char), oddChars.includes(lastChar)]
		if (!isWordEven && (oddCharsIncludes[0] || oddCharsIncludes[1])) {
			const [charInOdds, charInOddsI] = oddCharsIncludes[0] ? [char, i] : [lastChar, lastCharI]
			const middleCharI = Math.floor(halfLength)
			const middleChar = wordArr[middleCharI]

			wordArr[charInOddsI] = middleChar
			wordArr[middleCharI] = charInOdds
			const elementToPush = charInOddsI < middleCharI ? [charInOddsI, middleCharI] : [middleCharI, charInOddsI]
			if (isPalindrome(wordArr.join(''))) indexes.push(...elementToPush)
			break
		}

		const charToChangeI = wordArr.indexOf(lastChar, i)

		wordArr[i] = lastChar
		wordArr[charToChangeI] = char
		if (isPalindrome(wordArr.join(''))) indexes.push(i, charToChangeI)
		break
	}

	return indexes.length >= 2 ? indexes : null
}
