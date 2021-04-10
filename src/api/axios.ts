import axios from "axios";

const api = axios.create({
  baseURL: "https://quote-garden.herokuapp.com/",
});

export default api;
