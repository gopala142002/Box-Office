import { useState } from "react";
import { searchForShows, searchForPeople } from "../api/tvmaze";
import SearchForm from "../components/SearchForm";
import ShowGrid from "../components/shows/ShowGrid";
import ActorGrid from "../components/actors/ActorGrid";
const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  // console.log(apiDataError);
  const onSearch = async ([searchStr,searchOption]) => {
    try {
      setApiDataError(null);
      let res;
      if (searchOption === "shows"){
        res = await searchForShows(searchStr);
      }
      else{
        res = await searchForPeople(searchStr);
      }
      setApiData(res);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error ocurred:{apiDataError.message}</div>;
    }
    // ? is for , what if apiData is null
    if(apiData?.length==0)
    {
      return <div>No Results</div>
    }
    if (apiData) {
      // console.log(apiData);
      return apiData[0].show
        ? <ShowGrid shows={apiData}/>
        : <ActorGrid actors={apiData}/>;
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
