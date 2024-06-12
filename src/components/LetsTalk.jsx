// TODO: MAKE THIS A REUSABLE COMPONENT FOR ALL SVGs

import letsTalk from "../assets/home/letsTalk.svg";

const LetsTalk = () => {
  return (
    <div>
      <div className="flex justify-center m-20 mb-48 md:mx-36">
        <a href="mailto:c.siountas@gmail.com" className="w-4/5 sm:w-3/5">
          <img className="" src={letsTalk} alt="Let's talk design" />
        </a>
      </div>
    </div>
  );
};

export default LetsTalk;
