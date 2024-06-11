import { Link } from "react-router-dom";
import featured from "../assets/home/featured.svg";
import { featuredProjectsData } from "../data/projects";

const FeaturedProjects = () => {
  return (
    <div className="m-10 md:mx-36 md:my-48">
      <div className="">
        <img
          src={featured}
          className="w-2/3 sm:w-1/3 mb-8"
          alt="Featured projects"
        />
        <div className="flex flex-wrap -mx-4">
          {featuredProjectsData.map((project) => (
            <div key={project.id} className="w-full md:w-1/2 h-full px-4 mb-1">
              <div className="bg-gray rounded-lg">
                <Link to={`/project/${project.link}`} className="block mb-4">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="aspect-square object-cover rounded-lg hover:opacity-85"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link to="/projects">
          <p className="text-3xl text-bold">All Projects</p>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
