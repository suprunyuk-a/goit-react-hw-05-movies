const API_KEY = 'f7ffdce4cad751b792655bd09ea4613c';


export const fetchTrandingMovies = () => fetch(`https://api.themoviedb.org/3//trending/movie/week?api_key=${API_KEY}`).then(response => response.json());


export const fetchMovieByQuery = (query) => fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`).then(response => response.json());


export const fetchMovieById = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`).then(response => response.json());


export const fetchMovieCreditsById = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`).then(response => response.json());


export const fetchMovieReviewsById = (id) => fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`).then(response => response.json());


