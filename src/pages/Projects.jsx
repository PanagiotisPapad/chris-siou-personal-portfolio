import { Link } from "react-router-dom";
import projects from "../data/projects";
import LetsTalk from "../components/LetsTalk";

const Projects = () => {
  return (
    <div className="m-10 md:m-36">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="rounded-lg">
            <Link to={`/project/${project.link}`} className="block">
              <img
                src={project.coverImage}
                alt={project.name}
                className="aspect-square object-cover rounded-lg hover:opacity-85"
              />
            </Link>
          </div>
        ))}
      </div>
      <LetsTalk />
    </div>
  );
};

export default Projects;
