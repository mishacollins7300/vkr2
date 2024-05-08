import axios from 'axios';
import authHeader from "./auth-header";

const API_URL = 'http://localhost:8080/app/';

class EventService {
    createEvent(event) {
        return axios.post(API_URL + 'event', event, {
            headers: authHeader()
        })
    }
}

export default new EventService();