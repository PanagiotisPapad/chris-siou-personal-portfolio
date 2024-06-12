import heyThere from "../assets/home/heyThere.svg";

const Intro = () => {
  return (
    <div className="m-10 sm:m-36">
      <img src={heyThere} className="w-48 sm:w-34 mb-4" alt="Hey there" />
      <p className="text-3xl sm:text-5xl leading-normal sm:leading-tight">
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
