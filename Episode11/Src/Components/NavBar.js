import { NAV_LOGO } from "../Utils/links";
import { Link } from "react-router-dom";

export default function NavBar() {
  console.log("Navbar");
  return (
    <nav>
      <div>
        <img src={NAV_LOGO} />
      </div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Contacts</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
