import ActorCard from "./ActorCard";
import { FlexGrid } from "../common/FlexGrid";
const ActorGrid = ({ actors }) => {
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
        />
        // console.log(data.person.image.medium)
      ))}
    </FlexGrid>
  );
};
export default ActorGrid;
