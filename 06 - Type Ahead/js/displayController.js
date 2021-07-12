export default class DisplayController {
	showResults(results, container) {
		const html = results.map(place => {
			return `
				<li>
					<span class="name">${place.city}, ${place.state}</span>
					<span class="population">${place.population}</span>
				</li>
			`;
		}).join('');

		container.innerHTML = html;
	}
}