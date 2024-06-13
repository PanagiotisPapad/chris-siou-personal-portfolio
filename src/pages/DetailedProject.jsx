import { useParams } from "react-router-dom";
import projects from "../data/projects";

const DetailedProject = () => {
  const { link } = useParams();
  const project = projects.find((project) => project.link === link);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="m-10 md:mx-36">
      <h2 className="text-6xl mt-28 mb-12 text-white">{project.name}</h2>
      <div className="mb-24">
        {project.description.map((paragraph, index) => (
          <p key={index} className="mb-4 text-xl text-gray font-light">
            {paragraph}
          </p>
        ))}
      </div>
      <div>
        {project.images.map((image, index) => (
          <div key={index} className="mb-12 h-[80%]">
            <img
              src={image}
              alt={`Image of Christos Siountas project for ${project.name} company`}
              className="aspect-[3/2] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedProject;
