export default class FetchAPI {
	async getData(api) {
		const dataArray = [];

		const data = await fetch(api).then(blob => blob.json());
		dataArray.push(...data);

		return dataArray; 
	}
}