const Seasons=({seasons})=>{
    return(
        <div>
            <p>Seasons in total : {seasons.length}</p>
            <p>Episodes in total : {seasons.reduce((sum,season)=>sum+season.episodeOrder,0)}</p>
        </div>
    )
};
export default Seasons;