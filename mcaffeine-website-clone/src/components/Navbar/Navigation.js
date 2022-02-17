import "./Navigation.css";
import Logo from "./mcaffeine-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navigation() {
  return (
    <div className="navbar-main">
      <img src={Logo} alt="logo" />
      <div className="navbar">
        <ul>
          <li>
            Body Care <KeyboardArrowDownIcon />
          </li>
          &nbsp;&nbsp;
          <li>
            Face Care <KeyboardArrowDownIcon />
          </li>
          &nbsp;&nbsp;
          <li>
            Hair Care <KeyboardArrowDownIcon />
          </li>
          &nbsp;&nbsp;
          <li>
            Shop By Concerns <KeyboardArrowDownIcon />
          </li>
          &nbsp;&nbsp;
          <li>
            Gift Kits <KeyboardArrowDownIcon />
          </li>
          &nbsp;&nbsp;
          <li>
            Ranges <KeyboardArrowDownIcon />
          </li>
          &nbsp;&nbsp;
          <li>
            E-Gift Card <KeyboardArrowDownIcon />
          </li>
          &nbsp;&nbsp;
        </ul>
      </div>
      <div className="navbar-cart">
        <SearchIcon />
        <PersonIcon />
        <ShoppingBagIcon />
      </div>
    </div>
  );
}

export default Navigation;
