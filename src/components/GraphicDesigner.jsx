import graphic from "../assets/home/graphic.svg";
import my_photo from "../assets/home/my_photo.png";

const GraphicDesigner = () => {
  return (
    <div className="mt-38">
      <div className="relative">
        <img
          src={my_photo}
          className="w-1/3 absolute z-10 left-1/2 transform -translate-x-1/2 -top-28 mt-38"
          alt="Chris Siountas photo"
        />
        <img
          src={graphic}
          className="w-full z-0 mt-96"
          alt="Graphic designer"
        />
      </div>
    </div>
  );
};

export default GraphicDesigner;
