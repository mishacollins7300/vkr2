import axios from 'axios';

const API_URL = 'http://localhost:8080/auth/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'sign-in', user)
            .then(response => {
                if (response?.data?.token) {
                    localStorage.setItem('token', JSON.stringify(response.data.token));
                    return response?.data?.token;
                }
                return response
            });
    }

    logout() {
        localStorage.removeItem('token');
    }
    register(user) {
        return axios.post(API_URL + 'sign-up', user)
            .then(response => {
                if (response?.data.token) {
                    localStorage.setItem('token', JSON.stringify(response.data.token));
                }
                return response.data.token;
            });;
    }
}

export default new AuthService();
