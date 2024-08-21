import { Link } from "react-router-dom";
import projects from "../data/projects";
import LetsTalk from "../components/LetsTalk";

const Projects = () => {
  return (
    <>
      <div className="m-10 md:mx-36 mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg">
              <Link to={`/project/${project.link}`} className="block">
                <img
                  src={project.coverImage}
                  alt={`Cover image of Christos Siountas designer project named ${project.name}`}
                  className="aspect-square object-cover rounded-lg hover:opacity-85"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-44">
        <LetsTalk />
      </div>
    </>
  );
};

export default Projects;
