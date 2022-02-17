import Card from "./Card";
import Fade from "react-reveal/Fade";

function Winter() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_989bd94d-c7d7-4442-b5e9-c9d3db39683b.jpg?v=1630551802"
          rating="4.7 (367 reviews)"
          title="Coffee Face Wash, 100ml"
          price="Rs. 262"
          description="Deep Cleanses | Reduces Puffiness"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_989bd94d-c7d7-4442-b5e9-c9d3db39683b.jpg?v=1630551802"
          rating="4.7 (367 reviews)"
          title="Coffee Face Wash, 100ml"
          price="Rs. 262"
          description="Deep Cleanses | Reduces Puffiness"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_989bd94d-c7d7-4442-b5e9-c9d3db39683b.jpg?v=1630551802"
          rating="4.7 (367 reviews)"
          title="Coffee Face Wash, 100ml"
          price="Rs. 262"
          description="Deep Cleanses | Reduces Puffiness"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_989bd94d-c7d7-4442-b5e9-c9d3db39683b.jpg?v=1630551802"
          rating="4.7 (367 reviews)"
          title="Coffee Face Wash, 100ml"
          price="Rs. 262"
          description="Deep Cleanses | Reduces Puffiness"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Winter;
