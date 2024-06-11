import behance from "../assets/social_icons/behance.svg";
import linkedin from "../assets/social_icons/linkedin.svg";
import dribble from "../assets/social_icons/dribble.svg";

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center space-x-6 mt-8 mb-10">
      <a
        href="https://www.behance.net/christosiountas"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray"
      >
        <img src={behance} className="w-10" alt="chris siountas behance" />
      </a>
      <a
        href="https://www.linkedin.com/in/christos-siountas-922793232/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray"
      >
        <img src={linkedin} className="w-10" alt="chris siountas behance" />
      </a>
      <a
        href="https://dribbble.com/Siountas"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray"
      >
        <img src={dribble} className="w-10" alt="chris siountas behance" />
      </a>
    </div>
  );
};
export default SocialLinks;
