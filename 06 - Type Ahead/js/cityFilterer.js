export default class CityFilterer {
	filter(word, cities) {
		return cities.filter(place => {
			const cityL = place.city.toLowerCase();
			const stateL = place.state.toLowerCase();
			const wordL = word.toLowerCase();

			return cityL.includes(wordL) || stateL.includes(wordL);

		});
	}
}