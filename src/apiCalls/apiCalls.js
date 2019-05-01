export const fetchFilms = () => {
  return fetch("https://swapi.co/api/films/")
  .then(response => {
    if (!response.ok) {
      throw Error('Error in fetching films');
    } else {
      return response.json();
    }
  });
};