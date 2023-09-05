import { useState } from "react";
const Home=()=>{
    const [searchStr,setSearchStr]=useState('');
    const onSearchInput=(ev)=>{
        setSearchStr(ev.target.value);
    }
    const onSearch=async(ev)=>{
        ev.preventDefault();
        // https://api.tvmaze.com/search/shows?q=boys
        const data=await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
        const res=await data.json();
        console.log(res);
    }
    return(
        <div>
            <form onSubmit={onSearch}>
                <input type="text" onChange={onSearchInput} value={searchStr}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
};
export default Home;