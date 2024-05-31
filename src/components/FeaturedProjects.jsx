import projects from "../data/projects";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  return (
    <div className="m-10 md:m-36">
      <p className="font-extrabold text-gray text-2xl mb-4">
        FEATURED PROJECTS
      </p>
      <div className="flex flex-wrap -mx-4">
        {projects.map((project) => (
          <div key={project.id} className="w-full md:w-1/2 px-4 mb-8">
            <div className="bg-gray rounded-lg">
              <Link to={`/project/${project.link}`} className="block mb-4">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full rounded-lg"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
