import welcomeSvg from "../assets/home/welcome.svg";

const Welcome = () => {
  return (
    <div className="mt-28 m-10 md:m-36">
      <img src={welcomeSvg} alt="Welcome to my design portfolio" />
    </div>
  );
};

export default Welcome;
