import apiClient from "./Client";

// Ce service s'occupe de préciser les requêtes urls
// Ici un appel GET a baseUrl/hello
export function getHelloMessage() {
    return apiClient.get('hello');
}