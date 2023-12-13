type Time = `${number}:${number}:${number}`

type Return = Time | `-${Time}`

export default function calculateTime(deliveries: Time[]): Return {
	const limitTime = 7 * 3600

	let totalDeliveriesTime = 0
	for (const deliverieTime of deliveries) {
		const hh = parseInt(deliverieTime.slice(0, 2))
		const mm = parseInt(deliverieTime.slice(3, 5))
		const ss = parseInt(deliverieTime.slice(6, 8))

		totalDeliveriesTime += hh * 3600
		totalDeliveriesTime += mm * 60
		totalDeliveriesTime += ss
	}

	let remainingOrExcess = limitTime - totalDeliveriesTime
	const remainingTime = remainingOrExcess > 0

	remainingOrExcess = Math.abs(remainingOrExcess)
	const remainingOrExcessDate = new Date(remainingOrExcess * 1000)

	let remainingOrExcessTime = remainingOrExcessDate.toISOString() as Time
	remainingOrExcessTime = remainingOrExcessTime.slice(11, 19) as Time

	if (remainingTime) return `-${remainingOrExcessTime}`
	return remainingOrExcessTime
}
