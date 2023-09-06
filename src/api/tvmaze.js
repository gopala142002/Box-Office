const baseURL = "https://api.tvmaze.com";
const apiGet = async (queryString) => {
  // throw new Error("Something bad happened");
  const data = await fetch(`${baseURL}${queryString}`);
  const res = await data.json();
  return res;
};

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);
