import Card from "./Card";
import Fade from "react-reveal/Fade";

function Gifts() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/2_5.jpg?v=1640772987"
          rating="4.7 (200 reviews)"
          title="Coffee Mood - Gift Kit"
          price="Rs. 1,515"
          description="Celebrate Every Mood"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/2_5.jpg?v=1640772987"
          rating="4.7 (200 reviews)"
          title="Coffee Mood - Gift Kit"
          price="Rs. 1,515"
          description="Celebrate Every Mood"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/2_5.jpg?v=1640772987"
          rating="4.7 (200 reviews)"
          title="Coffee Mood - Gift Kit"
          price="Rs. 1,515"
          description="Celebrate Every Mood"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/2_5.jpg?v=1640772987"
          rating="4.7 (200 reviews)"
          title="Coffee Mood - Gift Kit"
          price="Rs. 1,515"
          description="Celebrate Every Mood"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Gifts;
