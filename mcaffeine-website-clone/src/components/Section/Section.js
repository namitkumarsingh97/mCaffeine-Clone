import "./Section.css";

function Section() {
  return (
    <div className="section__main">
      <img
        className="section__img1"
        src="https://cdn.shopify.com/s/files/1/1454/5188/files/Desktop-without-text.jpg?v=1629995496"
        alt="1"
      />
      <div className="centered">
        <h2>Caffeine: Our Secret Ingredient</h2>
        <button className="btn">KNOW MORE</button>
      </div>
      <img
        className="section__img2"
        src="https://cdn.shopify.com/s/files/1/1454/5188/files/Desktop-without-text_1.jpg?v=1629995612"
        alt="2"
      />
      <div className="centered1">
        <h2>We are addicted to good</h2>
        <button className="btn">KNOW MORE</button>
      </div>
    </div>
  );
}

export default Section;
