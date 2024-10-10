import { NAV_LOGO } from "../Utils/links";

export default function NavBar() {
  console.log("Navbar");
  return (
    <nav>
      <div>
        <img src={NAV_LOGO} />
      </div>
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}
