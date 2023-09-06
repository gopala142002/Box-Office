import { useParams } from "react-router-dom";
const Show=()=>{
    const {showId}=useParams();
    return(
        <div>show page for {showId}</div>
    )
};
export default Show; 