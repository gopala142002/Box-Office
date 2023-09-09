const baseURL = "https://api.tvmaze.com";
const apiGet = async (queryString) => {
  // throw new Error("Something bad happened");
  // console.log(queryString);
  // {console.log(`${baseURL}${queryString}`)}
  const data = await fetch(`${baseURL}${queryString}`);
  const res = await data.json();
  return res;
};

export const searchForShows = (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = (query) => apiGet(`/search/people?q=${query}`);
export const getShowById=(showId)=>apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`)

export const getShowByIds=async showIds =>{
  const promises=showIds.map(showId => apiGet(`/shows/${showId}`));
  const result=await Promise.all(promises);
  return result;
}
// /search/people?q=:query
