/**
 * Randomize the items order in array
 * @param {*[]} [items=[]] - Array
 * @return {*[]} Return the randomize items
 */
function shuffle(items: Array<any>): Array<any> {
	const result = [...items]
	for (
		let i = result.length - 1;
		i > 0;
		i--
	) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]]
	}
	return result
}

export default shuffle
