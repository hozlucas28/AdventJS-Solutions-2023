export default function getStaircasePaths(steps: number, maxJump: number): number[][] {
	const result: number[][] = []

	function jumpHelper(currentPath: number[], remainingSteps: number) {
		if (remainingSteps === 0) {
			result.push(currentPath.slice())
			return
		}

		for (let jump = 1; jump <= maxJump && jump <= remainingSteps; jump++) {
			currentPath.push(jump)
			jumpHelper(currentPath, remainingSteps - jump)
			currentPath.pop()
		}
	}

	jumpHelper([], steps)
	return result
}
