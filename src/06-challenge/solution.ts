export default function maxDistance(movements: string): number {
	const rightMoves = movements.replace(/[^<]/g, '').length
	const leftMoves = movements.replace(/[^>]/g, '').length
	const stars = movements.replace(/[^\*]/g, '').length

	const distance = Math.abs(rightMoves - leftMoves) + stars

	return distance
}
