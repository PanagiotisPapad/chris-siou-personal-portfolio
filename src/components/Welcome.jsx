import welcomeSvg from "../assets/home/welcome.svg";

const Welcome = () => {
  return (
    <div className="mt-28 md:m-[11%] flex justify-center">
      <img
        src={welcomeSvg}
        className="w-10/12"
        alt="Welcome to my design portfolio"
      />
    </div>
  );
};

export default Welcome;
