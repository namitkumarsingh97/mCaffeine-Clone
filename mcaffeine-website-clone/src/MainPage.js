import Navigation from "./components/Navbar/Navigation";
import Header from "./components/Header/Header";
import Slider from "./components/Carousel/Slider";
import HeadingText from "./components/HeadingText/HeadingText";
import NewPage from "./components/Buttons/NewPage";
import SecondText from "./components/HeadingText/SecondText";
import Photu from "./components/Photu/Photu";
import Shop from "./components/Photu/Shop";
import Precaution from "./components/Photu/Precaution";
import Section from "./components/Section/Section";

function MainPage() {
  return (
    <div>
      <Header />
      <Navigation />
      <hr />
      <Slider />
      <HeadingText />
      <NewPage />
      <SecondText />
      <Shop />
      <Section />
      <Photu />
      <Precaution />
    </div>
  );
}

export default MainPage;
