import rights from "../assets/home/rights.svg";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10 sm:mx-36 sm:mb-8 sm:mt-24">
      <SocialLinks />
      <img
        src={rights}
        className="w-full sm:w-1/5"
        alt="Chris siountas 2024, all rights reserved"
      />
    </div>
  );
};

export default Footer;
