import Button from "./Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../otherPages/Products";
import Gifts from "../otherPages/Gifts";
import Launches from "../otherPages/Launches";
import Singles from "../otherPages/Singles";
import Winter from "../otherPages/Winter";

function NewPage() {
  return (
    <Router>
      <div>
        <Button />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/singles" element={<Singles />} />
          <Route path="/winter" element={<Winter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NewPage;
