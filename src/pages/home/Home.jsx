import PopularEvents from "./popularEvents/PopularEvents";
import Slider from "./slider/Slider";
import Stats from "./stats/Stats";

const Home = () => {
  return (
    <div>
      <Slider />
      <PopularEvents/>
      <Stats/>
    </div>
  );
};

export default Home;
