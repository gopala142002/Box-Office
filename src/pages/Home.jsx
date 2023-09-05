import { useState } from "react";
import { searchForShows } from "../api/tvmaze";
const Home=()=>{
    const [searchStr,setSearchStr]=useState('');
    const [apiData,setApiData]=useState(null);
    const [apiDataError,setApiDataError]=useState(null);
    console.log(apiDataError);
    const onSearchInput=(ev)=>{
        setSearchStr(ev.target.value);
    }
    const onSearch=async(ev)=>{
        ev.preventDefault();
        try{
            setApiDataError(null);
            const shows=await searchForShows(searchStr);
            setApiData(shows);
            console.log(apiData);
        }
        catch(error)
        {
            setApiDataError(error);
        }
    }
    const renderApiData=()=>{
        if(apiDataError)
        {
            return <div>Error ocurred:{apiDataError.message}</div>
        }
        if(apiData)
        {
            return apiData.map((data)=>(<div key={data.show.id}>{data.show.name}</div>))
        }
        return null;
    }
    return(
        <div>
            <form onSubmit={onSearch}>
                <input type="text" onChange={onSearchInput} value={searchStr}/>
                <button type="submit">Search</button>
            </form>
            <div>
                {renderApiData()}
            </div>
        </div>
    )
};
export default Home;