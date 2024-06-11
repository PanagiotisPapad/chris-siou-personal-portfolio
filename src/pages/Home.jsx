import Welcome from "../components/Welcome";
import GraphicDesigner from "../components/GraphicDesigner";
import Intro from "../components/Intro";
import LetsTalk from "../components/LetsTalk";
import FeaturedProjects from "../components/FeaturedProjects";

const Home = () => {
  return (
    <div className="space-y-48">
      <Welcome />
      <GraphicDesigner />
      <Intro />
      <FeaturedProjects />
      <LetsTalk />
    </div>
  );
};

export default Home;
