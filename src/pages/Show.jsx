import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShowById } from "../api/tvmaze";
const Show=()=>{
    const {showId}=useParams();
    const [showData,setshowData]=useState(null);
    const [showError,setshowError]=useState(null);
    useEffect(()=>{
        async function fetchData()
        {
            try
            {
                const res= await getShowById(showId);
                setshowData(res);      
                console.log(showData);
            }
            catch
            {
                setshowData(null);
            }
        }
        fetchData();
    },[showData, showId])
    if(showError)
    {
        setshowError();
        return <div>We have an error {showError.message}</div>
    }
    if(showData)
    {
        return <div>We got data: {showData.name}</div>
    }
    return(
        <div>Data is loading</div>
    )
};
export default Show; 