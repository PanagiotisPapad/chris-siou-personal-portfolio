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
      <h2 className="text-4xl font-bold mb-16">{project.name}</h2>
      <p className="text-lg font-semibold mb-16">{project.description}</p>
      <div className="">
        {project.images.map((image, index) => (
          <div key={index} className="mb-12 h-[80%]">
            <img
              src={image}
              alt={`Image of ${project.name} design`}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailedProject;
