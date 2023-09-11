import ActorCard from "./ActorCard";
import { useStarredShows } from "../../lib/useStarredShows";
import { FlexGrid } from "../common/FlexGrid";
const ActorGrid = ({ actors }) => {
  const [starredShows,dispatchStarred]=useStarredShows();
  const onStarMeClick = (id) => {
    const isStarred = starredShows.includes(id);
    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", id });
    } else {
      dispatchStarred({ type: "STAR", id });
    }
  };
  // console.log(dispatchStarred);
  return (
    <FlexGrid>
      {actors.map((data) => (
        <ActorCard
          key={data.person.id}
          id={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          imgURL={
            data.person.image ? data.person.image.medium : "/imgNotFound.png"
          }
         summary={data.person.summary}
         isStarred={starredShows.includes(data.person.id)}
         onStarMeClick={onStarMeClick}
        />
      ))}
    </FlexGrid>
  );
};
export default ActorGrid;
