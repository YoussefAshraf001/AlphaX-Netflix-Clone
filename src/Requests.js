const key = '005ec851bdd5bfd42fe861b68fdc2b75'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    requestMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,
    requestAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=12`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestHistory: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=36`,
    requestScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
    requestThriller: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=53`,
    requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    requestWar: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10752`,
    // requestTVSHOWS: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}`,


};

export default requests;