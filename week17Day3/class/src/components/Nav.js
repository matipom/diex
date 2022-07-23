import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <Link to="/" reloadDocument>
        Home
      </Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  );
};
export default Nav;
