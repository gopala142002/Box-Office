import { useState} from "react";
import { useSearchStr } from "../lib/useSearchStr";
import CustomRadio from "./CustomRadio";
const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchStr("");
  const [searchOption, setSearchOption] = useState("shows");
  const onSearchInput = (ev) => {
    setSearchStr(ev.target.value);
  };
  // console.log(searchOption);
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

      <CustomRadio
        label="Shows"
        name="search-option"
        value="shows"
        checked={searchOption === "shows"}
        onChange={onRadioChange}
      />
      <CustomRadio
        label="Actors"
        name="search-option"
        value="actors"
        checked={searchOption === "actors"}
        onChange={onRadioChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;
