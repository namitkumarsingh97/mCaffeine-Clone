import Card from "./Card";
import Fade from "react-reveal/Fade";

function Products() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_cb7cfae1-56b7-48f8-ae35-7a6a61b330ae.jpg?v=1640458678"
          rating="4.7 (1155 reviews)"
          title="Coffee Body Scrub with Coconut, 100gm"
          price="Rs. 337"
          description="Exfoliates | Polishes"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_cb7cfae1-56b7-48f8-ae35-7a6a61b330ae.jpg?v=1640458678"
          rating="4.7 (1155 reviews)"
          title="Coffee Body Scrub with Coconut, 100gm"
          price="Rs. 337"
          description="Exfoliates | Polishes"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade right>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_cb7cfae1-56b7-48f8-ae35-7a6a61b330ae.jpg?v=1640458678"
          rating="4.7 (1155 reviews)"
          title="Coffee Body Scrub with Coconut, 100gm"
          price="Rs. 337"
          description="Exfoliates | Polishes"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Fade left>
        <Card
          img="https://cdn.shopify.com/s/files/1/1454/5188/products/1_cb7cfae1-56b7-48f8-ae35-7a6a61b330ae.jpg?v=1640458678"
          rating="4.7 (1155 reviews)"
          title="Coffee Body Scrub with Coconut, 100gm"
          price="Rs. 337"
          description="Exfoliates | Polishes"
        />
      </Fade>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Products;
