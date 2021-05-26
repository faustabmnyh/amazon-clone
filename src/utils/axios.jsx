import axios from "axios";

const instance = axios.create({
    // get base url
    baseURL: "http://localhost:5001/challenge-3b101/us-central1/api" 
});

export default instance;