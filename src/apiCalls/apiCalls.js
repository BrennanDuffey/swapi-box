export const fetchFilms = () => (
  fetch("https://swapi.co/api/films/")
  .then(response => {
    if (!response.ok) {
      throw Error('Error in fetching films');
    } else {
      return response.json();
    };
  })
);

export const fetchPeople = () => (
  fetch("https://swapi.co/api/people/")
  .then(response => {
    if (!response.ok) {
      throw Error('Error in fetching people')
    } else {
      return response.json()
    };
  })
);

export const fetchPlanets = () => (
  fetch("https://swapi.co/api/planets/")
  .then(response => {
    if (!response.ok) {
      throw Error('Error in fetching planets')
    } else {
      return response.json()
    };
  })
)

export const fetchURL = (url) => {
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw Error('Error in fetching person homeworld')
    } else {
      return response.json()
    };
  })
};

