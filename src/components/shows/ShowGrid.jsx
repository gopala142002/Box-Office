import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  console.log(shows[0]);
  return (
    <div>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          name={data.show.name}
          imgURL={data.show.image ? data.show.image.medium : "/imgNotFound.png"}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};
export default ShowGrid;
