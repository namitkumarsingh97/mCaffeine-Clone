import "./Photu.css";
import Images from "./image-1.png";

function Photu() {
  return (
    <div className="photu__main">
      <p>We are PETA Certified</p>
      <img src={Images} />
    </div>
  );
}

export default Photu;
