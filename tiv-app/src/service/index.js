import axios from 'axios';
import { apiURL, loginURL } from './constants';
class ApiService {
  async get(api) {
    const url = apiURL + api;
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        window.location.href = loginURL;
      }
    }
  }

  async submit(api, query) {
    const url = apiURL + api;
    try {
      const response = await axios.post(url, query);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        window.location.href = loginURL;
      }
    }
  }
}
const apiService = new ApiService();
export default apiService;
