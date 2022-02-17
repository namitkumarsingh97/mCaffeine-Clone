import Card from "./Card";
import Fade from "react-reveal/Fade";

function Launches() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_3_42fca501-976e-47e3-87aa-3a51a9aa29a0.jpg?v=1642665929"
          rating="4.7 (23 reviews)"
          title="Coffee Lip Scrub for Chapped & Pigmented Lips, 12gm"
          price="Rs. 224"
          description="Exfoliates | Cures chapped lips | Reduces pigmentation"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_3_42fca501-976e-47e3-87aa-3a51a9aa29a0.jpg?v=1642665929"
          rating="4.7 (23 reviews)"
          title="Coffee Lip Scrub for Chapped & Pigmented Lips, 12gm"
          price="Rs. 224"
          description="Exfoliates | Cures chapped lips | Reduces pigmentation"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_3_42fca501-976e-47e3-87aa-3a51a9aa29a0.jpg?v=1642665929"
          rating="4.7 (23 reviews)"
          title="Coffee Lip Scrub for Chapped & Pigmented Lips, 12gm"
          price="Rs. 224"
          description="Exfoliates | Cures chapped lips | Reduces pigmentation"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_3_42fca501-976e-47e3-87aa-3a51a9aa29a0.jpg?v=1642665929"
          rating="4.7 (23 reviews)"
          title="Coffee Lip Scrub for Chapped & Pigmented Lips, 12gm"
          price="Rs. 224"
          description="Exfoliates | Cures chapped lips | Reduces pigmentation"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Launches;
