import axios from "axios";

const baseURL = 'https://api-heroes-lecv.herokuapp.com'

const heroesApi = axios.create({baseURL});

export default heroesApi;