// TODO: MAKE THIS A REUSABLE COMPONENT FOR ALL SVGs

import letsTalk from "../assets/home/letsTalk.svg";

const LetsTalk = () => {
  return (
    <div>
      <div className="flex justify-center mb-32 mx-5 md:mx-36">
        <a href="mailto:c.siountas@gmail.com" className="w-4/5 md:w-2/5">
          <img
            src={letsTalk}
            alt="A graphic design that says Let's talk design"
          />
        </a>
      </div>
    </div>
  );
};

export default LetsTalk;
