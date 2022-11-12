import axios from "axios";

// Crée un client axios qui utilise http://localhost:5000/ comme base pour ses appels http
const apiClient = axios.create({
    baseURL: 'http://localhost:5000/'
});

export default apiClient