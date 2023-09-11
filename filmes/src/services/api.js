import axios from "axios";

// URL filmes em cartas
// movie/now_playing?api_key=175e3c5b69918d6660f573327072c0b2&language=pt-BR&page=1
 
export const key = '175e3c5b69918d6660f573327072c0b2';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;