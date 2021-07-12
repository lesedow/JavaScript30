import FetchAPI from './fetchApi.js';
import CityFilterer from './cityFilterer.js';
import DisplayController from './displayController.js';

const fetchApi = new FetchAPI(); // New instance of the FetchAPI object
const cityFilterer = new CityFilterer(); // New instance of the CityFilterer object
const displayController = new DisplayController(); // New instance of the DisplayController object

// Endpoint
const api = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = await fetchApi.getData(api); // Calling the getData() function to get the data from the api

const suggestions = document.querySelector('.suggestions');
const search = document.querySelector('.search');

// Checking for input changes on the search bar
search.addEventListener('input', (e) => {
	const searchValue = e.target.value; // Getting the value from the search bar
	const filteredCities = cityFilterer.filter(searchValue, cities); // Filtering the cities by the search value

	displayController.showResults(filteredCities, suggestions); // Showing the coresponding results on the screen
});
