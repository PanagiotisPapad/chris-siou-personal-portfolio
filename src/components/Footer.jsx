import rights from "../assets/home/rights.svg";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center m-10 sm:mx-36 sm:mb-8">
      <SocialLinks />
      <img
        src={rights}
        className="w-4/5 sm:w-2/4"
        alt="Chris siountas 2024, all rights reserved"
      />
    </div>
  );
};

export default Footer;
