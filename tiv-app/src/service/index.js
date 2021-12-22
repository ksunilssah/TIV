import axios from 'axios';
import { apiURL } from './constants';
class ApiService {
	async get(api) {
		const url = apiURL + api;
		const response = await axios.get(url);
		return response;
	}

	async submit(api, query) {
		const url = apiURL + api;
		const response = await axios.post(url, query);
		return response;
	}
}
const apiService = new ApiService();
export default apiService;