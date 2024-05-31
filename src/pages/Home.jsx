import Welcome from "../components/Welcome";
import GraphicDesigner from "../components/GraphicDesigner";
import Intro from "../components/Intro";
import LetsTalk from "../components/LetsTalk";
import FeaturedProjects from "../components/FeaturedProjects";

const Home = () => {
  return (
    <>
      <Welcome />
      <GraphicDesigner />
      <Intro />
      <FeaturedProjects />
      <LetsTalk />
    </>
  );
};

export default Home;
