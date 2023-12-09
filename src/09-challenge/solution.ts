export default function adjustLights(lights: string[]): number {
	let rtn = 0

	const iterations = lights.length - 1
	for (let i = 0; i < iterations; i++) {
		const postI = i + 1

		const currentLight = lights[i]
		const postLight = lights[postI]

		if (currentLight === postLight) {
			rtn++
			lights[postI] = postLight === '🟢' ? ' 🔴' : '🟢'
		}
	}

	return rtn
}
