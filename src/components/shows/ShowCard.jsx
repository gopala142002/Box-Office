import { Link } from "react-router-dom";
const ShowCard=({name,imgURL,id,summary})=>{
    const summaryStripped=summary?summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,''):"No descriptipn";
    return(
        <div>
            <div>
                <img src={imgURL} alt={name}/>
            </div>
            <h1>{name}</h1>
            <p>{summaryStripped}</p>
            <div>
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button">Star me</button>
            </div>
        </div>
    )
};
export default ShowCard;