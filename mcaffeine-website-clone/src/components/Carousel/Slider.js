import Carousel from "react-bootstrap/Carousel";
import ImgSlide1 from "./slide-1.jpg";
import ImgSlide2 from "./slide-2.jpg";
import ImgSlide3 from "./slide-3.jpg";
import "./Slider.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ImgSlide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImgSlide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImgSlide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
