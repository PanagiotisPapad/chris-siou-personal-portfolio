// TODO: MAKE THIS A REUSABLE COMPONENT FOR ALL SVGs

import letsTalk from "../assets/home/letsTalk.svg";

const LetsTalk = () => {
  return (
    <div className="flex justify-center m-20 md:mx-36 my-48">
      <a href="mailto:c.siountas@gmail.com" className="w-4/5 sm:w-2/3">
        <img className="" src={letsTalk} alt="Let's talk design" />
      </a>
    </div>
  );
};

export default LetsTalk;
