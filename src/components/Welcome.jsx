import welcomeSvg from "../assets/home/welcome.svg";

const Welcome = () => {
  return (
    <div className="mt-28 m-10 md:m-36 flex justify-center">
      <img
        src={welcomeSvg}
        className="w-5/6"
        alt="Welcome to my design portfolio"
      />
    </div>
  );
};

export default Welcome;
