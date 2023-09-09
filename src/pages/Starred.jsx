import { useQuery } from "@tanstack/react-query";
import { getShowByIds } from "../api/tvmaze";
import {TextCenter} from "../components/common/TextCenter"
import { useStarredShows } from "../lib/useStarredShows";
import ShowGrid from "../components/shows/ShowGrid";
const Starred=()=>{
  const [starredShowsIds]=useStarredShows();

  const {data:starredShows,error:starredShowsError}=useQuery({
    queryKey:['starred',starredShowsIds],
    queryFn:async()=>getShowByIds(starredShowsIds).then(result=>result.map(show=>({show}))),
    refetchOnWindowFocus:false,
  });
  if(starredShows?.length===0)
  {
    return <TextCenter>No show were starred</TextCenter>
  }
  if(starredShows?.length>0)
  {
    return <ShowGrid shows={starredShows}/>
  }
  if(starredShowsError)
  {
    return <TextCenter>Error occurred {starredShowsError}</TextCenter>
  }
  return <TextCenter>Shows are loading </TextCenter>
}
export default Starred;