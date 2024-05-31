import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-8 mx-10 md:mx-36">
      <div className="flex-start">
        <p className="font-bold text-lg">
          <Link to="/">CHRIS SIOUNTAS</Link>
        </p>
      </div>

      <div className="hidden md:block">
        <ul className="flex flex-row space-x-12">
          <li className="hover:text-gray">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>

      <button className="hidden md:block bg-white rounded text-black hover:bg-gray hover:text-white px-4 py-1">
        <a href="mailto:c.siountas@gmail.com">Contact</a>
      </button>
    </div>
  );
};

export default NavBar;
