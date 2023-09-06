import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  // console.log(apiDataError);
  const onSearch = async ([searchOption, searchStr]) => {
    try {
      setApiDataError(null);
      let res;
      if (searchOption === "shows") res = await searchForShows(searchStr);
      else res = await searchForPeople(searchStr);
      setApiData(res);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error ocurred:{apiDataError.message}</div>;
    }
    if (apiData) {
      // console.log(apiData);
      return apiData[0].show
        ? apiData.map((data) => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map((data) => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }
    return null;
  };
  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
