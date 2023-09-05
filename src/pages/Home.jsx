import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div>
            Home
            <Link to={"/Starred"}>Go To Starred page</Link>
        </div>
    )
};
export default Home;