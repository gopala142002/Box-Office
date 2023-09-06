import { useState } from "react";
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useState("");
  const [searchOption, setSearchOption] = useState("shows");
  const onSearchInput = (ev) => {
    setSearchStr(ev.target.value);
  };
  console.log(searchOption);
  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    const options = [searchStr, searchOption];
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
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
  );
};
export default SearchForm;
