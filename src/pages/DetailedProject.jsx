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
      <h2 className="text-5xl mt-28 mb-12 text-gray">{project.name}</h2>
      <div className="mb-24">
        {project.description.map((paragraph, index) => (
          <p key={index} className="mb-4 font-semibold">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="">
        {project.images.map((image, index) => (
          <div key={index} className="mb-12 h-[80%]">
            <img
              src={image}
              alt={`Image of ${project.name} design`}
              className="aspect-square object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedProject;
