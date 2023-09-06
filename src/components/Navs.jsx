import { Link } from "react-router-dom";
const LINKS = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Starred",
    to: "/Starred",
  },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map((LINK) => (
          <li key={LINK.to}>
            <Link to={LINK.to}>{LINK.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Navs;
