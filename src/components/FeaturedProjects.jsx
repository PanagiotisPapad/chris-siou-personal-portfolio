import { Link } from "react-router-dom";
import { featuredProjectsData } from "../data/projects";

const FeaturedProjects = () => {
  return (
    <div className="m-10 md:mx-36">
      <div>
        <h3 className="text-gray text-xl md:text-3xl font-light mb-5">
          FEATURED PROJECTS
        </h3>
        <div className="flex flex-wrap -mx-4">
          {featuredProjectsData.map((project) => (
            <div key={project.id} className="w-full md:w-1/2 h-full px-3 mb-1">
              <div className="bg-gray rounded-lg">
                <Link to={`/project/${project.link}`} className="block mb-6">
                  <img
                    src={project.coverImage}
                    alt={`Cover image of Chsistos Siountas designer project ${project.name}`}
                    className="aspect-square object-cover rounded-lg hover:opacity-85"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects">
          <p className="text-2xl md:text-3xl hover:text-gray">All Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
