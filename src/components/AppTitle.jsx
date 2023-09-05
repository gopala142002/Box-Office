const AppTitle=(props)=>{
    const {title="Box-Office",subtitle="Are you looking for an movie or an actor?"}=props;
    return(
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
};
export default AppTitle;