type Interval = number[]

export default function optimizeIntervals(intervals: Interval[]): Interval[] {
	intervals.sort((a, b) => a[0] - b[0])

	const rtn: Interval[] = [intervals.shift() as Interval]

	while (0 < intervals.length) {
		const lastRtnIndex = rtn.length - 1
		const [start, end] = intervals.shift() as Interval
		const [rStart, rEnd] = rtn[lastRtnIndex]

		if (start <= rEnd) {
			const max = Math.max(rEnd, end)
			rtn[lastRtnIndex] = [rStart, max]
		} else {
			rtn.push([start, end])
		}
	}

	return rtn
}
