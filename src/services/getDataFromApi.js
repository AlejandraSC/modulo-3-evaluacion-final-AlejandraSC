const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((user) => {
        //console.log(user);
        return {
          id: user.id,
          image: user.image,
          name: user.name,
          species: user.species,
          status: user.status,
        };
      });
    });
};

export default getDataFromApi;