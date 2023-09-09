import { SearchCard ,SearchImgWrapper} from "../common/SearchCard";
import { Link } from "react-router-dom";
const ActorCard=({name,imgURL,gender,id,country,birthday,deathday})=>{
    // const summaryStripped=summary?summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''):"No descriptipn";
    return(
        <SearchCard>
            <SearchImgWrapper>
                <img src={imgURL} alt={name}/>
            </SearchImgWrapper>
            {/* !! to convert a variable into boolean */}
            <h1>{name} {!!gender && `(${gender})`}</h1>
            <p>{country ? `Comes from ${country}`:'No country known'}</p>
            {!!birthday && <p>Born {birthday}</p>}
            <p>{deathday ? `Died ${deathday}`:'Alive'}</p>
            {/* <p>{summaryStripped}</p> */}
            <div>
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button">Star me</button>
            </div>
        </SearchCard>
    )
};
export default ActorCard;