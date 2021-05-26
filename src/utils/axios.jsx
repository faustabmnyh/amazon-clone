import axios from "axios";

// library axios itu dia library fetch yang populer dan lebih gampang dan enteng
const instance = axios.create({
    // membuat obejek didalam baseURL taruh di API 
    baseURL: "http://localhost:5001/challenge-3b101/us-central1/api" // the api url 
});

export default instance;