import { useState } from "react";
import { searchForShows ,searchForPeople} from "../api/tvmaze";
const Home = () => {
  const [searchStr, setSearchStr] = useState("");
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  console.log(apiDataError);
  const onSearchInput = (ev) => {
    setSearchStr(ev.target.value);
  };
  console.log(searchOption);
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  const onSearch = async (ev) => {
    ev.preventDefault();
    try {
      setApiDataError(null);
      if(searchOption==="shows")
      {
        const shows = await searchForShows(searchStr);
        setApiData(shows);
        console.log(apiData);
      }
      else
      {
        const shows = await searchForPeople(searchStr);
        setApiData(shows);
        console.log(apiData);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error ocurred:{apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData[0].show?apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      )):apiData.map((data) => (
        <div key={data.person.id}>{data.person.name}</div>));
    }
    return null;
  };
  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" onChange={onSearchInput} value={searchStr} />
        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === "shows"}
            onChange={onRadioChange}
          />
        </label>
        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === "actors"}
            onChange={onRadioChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};
export default Home;
