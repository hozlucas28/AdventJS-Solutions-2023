type Branch = {
	value: number
	left: Branch | null
	right: Branch | null
}

type Return = Branch | null

export default function transformTree(tree: (number | null)[]): Return {
	const buildBranch = (index: number): Return => {
		const value = tree[index]
		if (value == null) return null

		const base = index * 2
		return {
			value: value,
			left: buildBranch(base + 1),
			right: buildBranch(base + 2),
		}
	}

	const rtn = buildBranch(0)
	return rtn
}
