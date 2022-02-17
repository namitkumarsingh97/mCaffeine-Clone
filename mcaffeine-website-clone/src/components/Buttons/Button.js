import "./Button.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="button-style">
      <Link to="/" exact>
        <button class="button"> All Products </button>
      </Link>
      <Link to="/gifts">
        <button class="button"> Gift Kits </button>
      </Link>
      <Link to="/launches">
        <button class="button"> New Launches </button>
      </Link>
      <Link to="/singles">
        <button class="button"> Singles </button>
      </Link>
      <Link to="/winter">
        <button class="button"> Winter Care </button>
      </Link>
    </div>
  );
}

export default Button;
