import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/app/';

class UserService {
    getCurrentUser() {
        return axios.get(API_URL + 'user', {
            headers: authHeader()
        })
    }
}

export default new UserService();