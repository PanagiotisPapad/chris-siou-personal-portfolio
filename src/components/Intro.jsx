import { MdWavingHand } from "react-icons/md";

const Intro = () => {
  return (
    <div className="m-10 md:mx-36">
      <div className="flex flex-row items-center gap-4 mb-5">
        <h3 className="text-gray text-xl md:text-3xl font-light">HEY THERE!</h3>
        <MdWavingHand className="text-red text-2xl" />
      </div>
      <p className="text-xl sm:text-5xl leading-normal sm:leading-tight font-extralight mb-20 md:mb-80">
        I am Chris Siountas, Graphic Designer from Greece, specializing in Brand
        Identity & Visual Communication. I focus on simple, effective design to
        make brands resonate. My work blends strategic thinking with creative
        execution to craft lasting visual identities, always striving to ensure
        my clients' success.
      </p>
    </div>
  );
};

export default Intro;
