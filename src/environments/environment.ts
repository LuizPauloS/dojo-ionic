const api = 'https://api.themoviedb.org/3';
const apiKeyV3 = '?api_key=d3ffc4dd08ef9b62773ab30f9c228648';
const portuguesBR = '&language=pt-BR';

export const environment = {
  production: false,
  heroes: {
    all: api + '/heroes'
  },
  movies: {
    popular: api + '/movie/popular' + apiKeyV3 + portuguesBR,
    latest: api + '/movie/latest' + apiKeyV3 + portuguesBR
  }
};
