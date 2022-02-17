import "./Header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

function Header() {
  return (
    <div className="header">
      <p>
        <NotificationsNoneIcon className="icons" /> &nbsp; CAFFEINE HOURS: FLAT
        25% OFF SITEWIDE | FREE COFFEE FACE SERUM, WORTH 645, ON ORDERS 699+
      </p>
    </div>
  );
}

export default Header;
