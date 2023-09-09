// import { FaStar } from "@react-icons/all-files/fa/FaStar";
const ShowCard = ({ name, imgURL, id, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No descriptipn";
  return (
    <div>
      <div>
        <img src={imgURL} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{summaryStripped}</p>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button" onClick={() => onStarMeClick(id)}>
          Star me
        </button>
      </div>
    </div>
  );
};
export default ShowCard;
