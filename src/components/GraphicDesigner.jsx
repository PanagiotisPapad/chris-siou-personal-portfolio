import graphic from "../assets/home/graphic.svg";
import my_photo from "../assets/home/my_photo.png";

const GraphicDesigner = () => {
  return (
    <div className="relative">
      <img
        src={my_photo}
        className="w-2/3 sm:w-1/4 absolute z-10 left-1/2 transform -translate-x-1/2 -top-80 sm:-top-8 mt-12 sm:mt-38"
        alt="Chris Siountas personal photo"
      />
      <img
        src={graphic}
        className="w-full z-0 mt-96 sm:mt-80"
        alt="Graphic designer Christos Siountas"
      />
    </div>
  );
};

export default GraphicDesigner;
